//next
import { useRouter } from "next/router";

//services
import { useDeleteMultipleProducts } from "services/mutations";

//utils
import { errorToast, successToast } from "utils/toast";

//styles
import styles from "./DeleteProduct.module.css";

function DeleteProducts({
  setMultipleDeleteModal,
  selectedIds,
  setCheckBox,
  pageInfo,
  setPage,
}) {
  const router = useRouter();

  const { mutate } = useDeleteMultipleProducts();

  const deleteHandler = (data) => {
    mutate(
      { data },
      {
        onSuccess: async () => {
          router.replace(router.asPath);
          setMultipleDeleteModal(false);
          setCheckBox(false);
          successToast("محصولات با موفقیت حذف شدند");
        },
        onError: (error) => {
          if (error.status === 401)
            errorToast("برای حذف محصولات وارد حساب کاربری خود شوید");
        },
      }
    );
  };

  return (
    <div className={styles.delete}>
      <div className={styles.box}>
        <img src="/deleteImg.svg" />
        <p>آیا از حذف این محصولات مطمئنید؟</p>
        <div className={styles.buttons}>
          <button onClick={() => deleteHandler({ ids: selectedIds })}>
            حذف
          </button>
          <button onClick={() => setMultipleDeleteModal(false)}>لغو</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProducts;
