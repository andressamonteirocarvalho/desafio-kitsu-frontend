import styles from "./styles.module.scss";

interface CardProps {
    title: string;
    image: string;
}

export function Card(props: CardProps) {

    return (
        <>
            <div className={styles.card}>
                <img className={styles.card_image} src={props.image} alt="Imagem do anime" />
                <div className={styles.card_text}>{props.title}</div>
            </div>
        </>
    );
}