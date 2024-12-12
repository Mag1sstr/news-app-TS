import withSkeleton from "../../helpers/hocs/withSkeleton";
import { INews } from "../../interfaces/interfaces";
import NewsBanner from "../NewsBanner/NewsBanner";
import styles from "./styles.module.css";

interface IProps {
  banners: INews[];
}
function BannersList({ banners }: IProps) {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
}

const BannersListWithSkeleton = withSkeleton(BannersList, "banner", 6);

export default BannersListWithSkeleton;
