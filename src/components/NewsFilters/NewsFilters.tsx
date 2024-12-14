import { getCategories } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import { IFilters } from "../../interfaces/interfaces";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import styles from "./styles.module.css";

interface IProps {
  filters: IFilters;
  changeFilter: (key: string, value: null | string | number) => void;
}
export default function NewsFilters({ filters, changeFilter }: IProps) {
  const { data: dataCategories }: any = useFetch(getCategories, {});

  return (
    <div className={styles.filters}>
      {dataCategories ? (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            setSelectedCategory={(category) =>
              changeFilter("category", category)
            }
            selectedCategory={filters.category}
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
}
