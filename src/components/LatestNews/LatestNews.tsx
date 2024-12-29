// import { getLatestNews } from "../../api/apiNews";
import { useEffect } from "react";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getLatestNews } from "../../store/newsSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import BannersList from "../BannersList/BannersList";
import styles from "./styles.module.css";

export default function LatestNews() {
  // const { data, isLoading }: any = useFetch(getLatestNews, {});
  const news = useAppSelector((state) => state.news.latestNews);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getLatestNews());
  }, []);

  return (
    <section className={styles.section}>
      <BannersList banners={news} isLoading={!news.length} />
    </section>
  );
}
