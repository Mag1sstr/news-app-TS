import { useNavigate } from "react-router-dom";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import { INews } from "../../interfaces/interfaces";
import Image from "../Image/Image";
import styles from "./styles.module.css";

interface IProps {
  item: INews;
}
function NewsBanner({ item }: IProps) {
  const navigate = useNavigate();
  return (
    <div className={styles.banner} onClick={() => navigate(`/news/${item.id}`)}>
      <Image image={item.image} />
      <h3 className={styles.title}>{item?.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
}

export default NewsBanner;
