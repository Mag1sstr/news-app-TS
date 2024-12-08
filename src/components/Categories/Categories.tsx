import styles from "./styles.module.css";

interface IProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}
export default function Categories({
  categories,
  setSelectedCategory,
  selectedCategory,
}: IProps) {
  return (
    <div className={styles.categories}>
      {categories.map((category) => {
        return (
          <button
            onClick={() => setSelectedCategory(category)}
            className={
              selectedCategory === category ? styles.active : styles.item
            }
            key={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
