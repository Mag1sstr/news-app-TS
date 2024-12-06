import styles from "./styles.module.css";

export default function Image({ image }) {
  return (
    <div className={styles.wrapper}>
      {image ? <img className={styles.image} src={image} alt="" /> : null}
    </div>
  );
}
