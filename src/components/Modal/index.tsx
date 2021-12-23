import styles from "./styles.module.scss";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import estrela from "../../assets/estrela.svg";

interface ModalProps {
  item: {
    image: string;
    title: string;
    rating: number;
    chapters: number;
    sinopse: string;
    rank: number;
  };
  onClick: () => void;
}

export function Modal(props: ModalProps) {
  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.modal}>
        <img
          className={styles.modal_image}
          src={props.item.image}
          alt="Imagem do anime"
        />
        <div className={styles.modal_description}>
          <div className={styles.modal_description_container}>
            <h2 className={styles.modal_title}>{props.item.title}</h2>
            <Heart className={styles.modal_heart} />
          </div>
          <span className={styles.modal_position}>
            {" "}
            Posição: {props.item.rank}
          </span>
          <span className={styles.modal_rating}>
            <img className={styles.modal_estrela} src={estrela} alt="Estrela" />
            Avaliação {props.item.rating}
          </span>
          <p className={styles.modal_chapters}>
            Capítulos/Episódios: {props.item.chapters}
          </p>
          <h3 className={styles.modal_sinopse}>Sinopse</h3>
          <p className={styles.modal_sinopse_text}>{props.item.sinopse}</p>
          <button
            className={styles.modal_button}
            onClick={() => props.onClick()}
          >
            {" "}
            x
          </button>
        </div>
      </div>
    </div>
  );
}
