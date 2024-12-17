import { useContext } from "react";
import { formatDate } from "../../helpers/formatDate";
import styles from "./styles.module.css";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Header() {
  const context = useContext(ThemeContext);
  return (
    <header
      className={`${styles.header} ${context?.isDark ? styles.dark : null}`}
    >
      <div>
        <h1 className={styles.title}>NEWS APP</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>
      <div
        onClick={() => {
          context?.toggleTheme();
        }}
        className={`${styles.button} ${context?.isDark ? styles.active : null}`}
      >
        <div className={styles.circle}></div>
      </div>
    </header>
  );
}
