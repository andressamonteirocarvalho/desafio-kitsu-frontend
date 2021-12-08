import styles from "./styles.module.scss";
import { NavBar } from '../NavBar';
import { Card } from '../Card';
import { useEffect, useState } from "react";
import api from "../../services/api";

interface AnimeProps {
    title: string;
    image: string;
    rating: number;
    chapters: number;
    sinopse: string;
    rank: number;
}

export function Section() {

    const [anime, setAnime] = useState<AnimeProps[]>([]);

    useEffect(() => {
        api
            .get("anime")
            .then((response: any) => {
                let array: AnimeProps[] = []
                response.data.data.map((animeProps: any) => {
                    array.push({
                        title: animeProps.attributes.canonicalTitle,
                        image: animeProps.attributes.posterImage.small,
                        rating: animeProps.attributes.averageRating,
                        chapters: animeProps.attributes.episodeCount,
                        sinopse: animeProps.attributes.synopsis,
                        rank: animeProps.attributes.popularityRank,
                    })

                })

                setAnime(array)

            })
            .catch((err: any) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    return (
        <>
            <NavBar />
            <div className={styles.section}>
                <h1 className={styles.section_title}>Animes mais populares</h1>
                <div className={styles.section_cards}>
                    {anime.map(prop => {

                        return (

                            <Card image={prop.image} title={prop.title} />

                        );
                    })}

                </div>
            </div>
        </>
    );
}