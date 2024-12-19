import { useContext } from "react";
import { IPaginationProps } from "../../interfaces/interfaces";
import styles from "./styles.module.css";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Pagination({
  totalPage,
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
  currentPage,
}: IPaginationProps) {
  const context = useContext(ThemeContext);
  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage <= 1}
        onClick={handlePreviousPage}
        className={`${styles.arrow} ${context?.isDark ? styles.dark : null}`}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPage)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              className={`${styles.pageNumber} ${
                context?.isDark ? styles.dark : null
              }`}
              disabled={index + 1 === currentPage}
              key={index}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        disabled={currentPage >= totalPage}
        onClick={handleNextPage}
        className={`${styles.arrow} ${context?.isDark ? styles.dark : null}`}
      >
        {">"}
      </button>
    </div>
  );
}
