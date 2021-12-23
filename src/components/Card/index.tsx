import styles from "./styles.module.scss";
import {CardProps} from "../../types";

export function Card(props: CardProps) {
  return (
    <div className={styles.card} onClick={() => props.onClick()}>
      <img
        className={styles.card_image}
        src={props.image}
        alt="Imagem do anime"
      />
      <div className={styles.card_text}>{props.title}</div>
    </div>
  );
}
