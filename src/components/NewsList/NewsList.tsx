import withSkeleton from "../../helpers/hocs/withSkeleton";
import { INews } from "../../interfaces/interfaces";
import NewsItem from "../NewsItem/NewsItem";
import styles from "./styles.module.css";

interface IProps {
  news: INews[];
}
function NewsList({ news }: IProps) {
  return (
    <ul className={styles.list}>
      {news.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
}
const NewsListWithSkeleton = withSkeleton(NewsList, "item", 10);

export default NewsListWithSkeleton;
