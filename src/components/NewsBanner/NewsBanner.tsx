import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import withSkeleton from "../../helpers/hocs/withSkeleton";
import { INews } from "../../interfaces/interfaces";
import Image from "../Image/Image";
import styles from "./styles.module.css";

interface IProps {
  item: INews;
}
function NewsBanner({ item }: IProps) {
  return (
    <div className={styles.banner}>
      <Image image={item.image} />
      <h3 className={styles.title}>{item?.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
}

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, "banner", 1);

export default NewsBannerWithSkeleton;
