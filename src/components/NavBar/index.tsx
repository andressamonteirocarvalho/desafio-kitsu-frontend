import styles from "./styles.module.scss";
import logo from "../../assets/firedev.png";
import heart from "../../assets/heart.svg";
import buscar from "../../assets/buscar.png";
import {NavBarProps} from "../../types";

export function NavBar(props: NavBarProps) {
  return (
      <nav className={styles.navbar}>
        <div className={styles.navbar_logo}>
          <img
            className={styles.navbar_logo_img}
            src={logo}
            alt="Logo Firedev"
          />
        </div>
        <div className={styles.navbar_left_side}>
          <ul className={styles.navbar_list}>
            <li
              className={styles.navbar_item}
              onClick={() => props.onClick(true)}
            >
              anime
            </li>
            <li
              className={styles.navbar_item}
              onClick={() => props.onClick(false)}
            >
              manga
            </li>
          </ul>
        </div>
        <div className={styles.navbar_right_side}>
          <div className={styles.navbar_search}>
            <input className={styles.navbar_search_input} type="text" />
            <img
              className={styles.navbar_search_icon}
              src={buscar}
              alt="Buscar"
            />
          </div>
          <img className={styles.navbar_heart} src={heart} alt="heart" />
        </div>
      </nav>
  );
}
