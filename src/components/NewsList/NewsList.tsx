import { INews } from "../../interfaces/interfaces";
import NewsItem from "../NewsItem/NewsItem";
import styles from "./styles.module.css";

interface IProps {
  news: INews[];
}
export default function NewsList({ news }: IProps) {
  return (
    <ul className={styles.list}>
      {news.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
}
