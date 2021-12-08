import styles from "./styles.module.scss";
import { ReactComponent as Heart } from '../../assets/heart.svg';
import estrela from '../../assets/estrela.svg';

interface ModalProps {
    image: string;
    title: string;
    rating: number;
    chapters: number;
    sinopse: string;
    rank: number;
}

export function Modal(props: ModalProps) {

    return (
        <>
            <div className={styles.modal}>
                <img className={styles.modal_image} src={props.image} alt="Imagem do anime" />
                <div className={styles.modal_description}>
                    <h2 className={styles.modal_title}>
                        {props.title}
                        <Heart className={styles.modal_heart} />
                    </h2>
                    <span className={styles.modal_position}> Posição: {props.rank}</span>
                    <span className={styles.modal_rating}>
                        <img className={styles.modal_estrela} src={estrela} alt="Estrela" />
                        Avaliação {props.rating}
                    </span>
                    <p className={styles.modal_chapters}>
                        Capítulos/Episódios: {props.chapters}
                    </p>
                    <h3 className={styles.modal_sinopse}>
                        Sinopse
                    </h3>
                    <p className={styles.modal_sinopse_text}>
                        {props.sinopse}
                    </p>
                </div>
            </div>
        </>
    );
}