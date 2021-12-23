import styles from "./styles.module.scss";
import { NavBar } from "../NavBar";
import { Card } from "../Card";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Modal } from "../Modal";

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
  const [type, setType] = useState(true);
  const [selectedItem, setSelectedItem] = useState<AnimeProps>();

  useEffect(() => {
    api
      .get(type ? "anime" : "manga")
      .then((response: any) => {
        let items: AnimeProps[] = [];
        response.data.data.map((item: any) => {
          items.push({
            title: item.attributes.canonicalTitle,
            image: item.attributes.posterImage.small,
            rating: item.attributes.averageRating,
            chapters: item.attributes.episodeCount,
            sinopse: item.attributes.synopsis,
            rank: item.attributes.popularityRank,
          });
        });

        setAnime(items);
      })
      .catch((err: any) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [type]);

  return (
    <>
      <NavBar onClick={(type: boolean) => setType(type)} />
      <div className={styles.section}>
        <h1 className={styles.section_title}>Animes mais populares</h1>
        <div className={styles.section_cards}>
          {anime.map((item) => {

            return (
              <Card
                image={item.image}
                title={item.title}
                onClick={() => {
                  setSelectedItem(item);
                }}
              />
            );
          })}
          {selectedItem ? (
            <Modal
              item={selectedItem}
              onClick={() => setSelectedItem(undefined)}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}
