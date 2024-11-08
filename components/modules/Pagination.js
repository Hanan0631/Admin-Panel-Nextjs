//tanstack
import { useQueryClient } from "@tanstack/react-query";

//utils
import { e2p } from "utils/replaceNumber";

//styles
import styles from "./Pagination.module.css";
import { useRouter } from "next/router";

function Pagination({ totalPages, currentPage }) {
  const queryClient = useQueryClient();
  const router = useRouter();
  //   console.log(data?.data)

  //   const nextHandler = async () => {
  //     if (data?.data.totalPages > page) {
  //       setPage((prevPage) => prevPage + 1);
  //       await queryClient.invalidateQueries(["products-list", page]);
  //     }
  //   };

  //   const previousHandler = async () => {
  //     if (page > 1) {
  //       setPage((prevPage) => prevPage - 1);
  //       await queryClient.invalidateQueries(["products-list", page]);
  //     }
  //   };

  const handlePageChange = async (page) => {
    await router.push(`?page=${page}&limit=10`);
    await queryClient.invalidateQueries(["products-list", page]);
  };

  return (
    <div className={styles.pagination}>
      <button
        className={currentPage > 1 ? styles.active : styles.disabled}
        onClick={() => {
          if (currentPage > 1) handlePageChange(+currentPage - 1);
        }}
      >
        صفحه قبل
      </button>

      <div>
        <span>{e2p(currentPage)}</span>
      </div>

      <button
        className={currentPage < totalPages ? styles.active : styles.disabled}
        onClick={() => {
          if (currentPage < totalPages) handlePageChange(+currentPage + 1);
        }}
      >
        صفحه بعد
      </button>
    </div>
  );
}

export default Pagination;
