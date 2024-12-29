import { getLatest } from "../../api/apiNews";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import { useFetch } from "../../helpers/hooks/useFetch";
import { INews } from "../../interfaces/interfaces";
import styles from "./styles.module.css";

import { useNavigate, useParams } from "react-router-dom";

export default function NewsPage() {
  const navigate = useNavigate();
  const { data }: any = useFetch(getLatest, {});
  const { id } = useParams();
  // console.log(data);

  return (
    <section className={styles.page} onClick={() => navigate("/")}>
      <div className={styles.return}>Return</div>
      {data?.news.map((el: INews) => {
        if (el.id === id) {
          return (
            <div key={el.id} className={styles.news}>
              <h1>{el.title}</h1>
              <img src={el.image} alt="" />
              <p>Author: {el.author}</p>
              <p>Published: {formatTimeAgo(el.published)}</p>
            </div>
          );
        }
      })}
    </section>
  );
}
