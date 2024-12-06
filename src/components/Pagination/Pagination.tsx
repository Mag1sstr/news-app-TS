import styles from "./styles.module.css";

interface IProps {
  totalPage: number;
  currentPage: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  handlePageClick: (pageNumber: number) => void;
}
export default function Pagination({
  totalPage,
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
  currentPage,
}: IProps) {
  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage <= 1}
        onClick={handlePreviousPage}
        className={styles.arrow}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPage)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              className={styles.pageNumber}
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
        className={styles.arrow}
      >
        {">"}
      </button>
    </div>
  );
}
