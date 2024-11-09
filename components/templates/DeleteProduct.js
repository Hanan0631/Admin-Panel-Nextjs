//next
import { useRouter } from "next/router";

//services
import { useDeleteProductById } from "services/mutations";

//utils
import { errorToast, successToast } from "utils/toast";

//styles
import styles from "./DeleteProduct.module.css";

function DeleteProduct({ setDeleteModal, id, setId, pageInfo, setPage }) {
  console.log(pageInfo)
  const router = useRouter()
  const { mutate } = useDeleteProductById();

  const deleteHandler = (id) => {
    mutate(id, {
      onSuccess: async () => {
        router.replace(router.asPath)
        setDeleteModal(false);
        successToast("محصول مورد نظر با موفقیت حذف شد");
      },
      onError: (error) => {
        if (error.status === 401)
          errorToast("برای حذف محصول وارد حساب کاربری خود شوید");
      },
    });
    if (pageInfo?.data.length === 1) {
      setPage((prevPage) => prevPage - 1);
    }
   
    setId("");
  };

  return (
    <div className={styles.delete}>
      <div className={styles.box}>
        <img src="/deleteImg.svg" />
        <p>آیا از حذف این محصول مطمئنید؟</p>
        <div className={styles.buttons}>
          <button onClick={() => deleteHandler(id)}>حذف</button>
          <button onClick={() => setDeleteModal(false)}>لغو</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProduct;
