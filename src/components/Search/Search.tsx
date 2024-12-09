import styles from "./styles.module.css";

interface IProps {
  keywords: string;
  setKeywords: (str: string) => void;
}
export default function Search({ keywords, setKeywords }: IProps) {
  return (
    <div className={styles.search}>
      <input
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        type="text"
        className={styles.input}
        placeholder="Search..."
      />
    </div>
  );
}
