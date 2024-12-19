import { useContext } from "react";
import styles from "./styles.module.css";
import { ThemeContext } from "../../contexts/ThemeContext";

interface IProps {
  keywords: string;
  setKeywords: (str: string) => void;
}
export default function Search({ keywords, setKeywords }: IProps) {
  const context = useContext(ThemeContext);
  return (
    <div className={`${styles.search} ${context?.isDark ? styles.dark : null}`}>
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
