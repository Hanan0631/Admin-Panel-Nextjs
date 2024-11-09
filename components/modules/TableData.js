//utils
import { useRouter } from "next/router";
import { e2p } from "../../utils/replaceNumber";
import { sp } from "../../utils/replaceNumber";

//styles
import styles from "./TableData.module.css";
import DeleteAdmin from "../icons/DeleteAdmin";
import EditAdmin from "../icons/EditAdmin";

function TableData({
  data,
  checkBox,
  setSelectedIds,
  setDeleteModal,
  setId,
  setEditModal,
}) {
  const router = useRouter();

  const checkHandler = (id) => {
    setSelectedIds((prevSelectedIds) =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id]
    );
  };

  const deleteByIdHandler = (id) => {
    setId(id);
    setDeleteModal(true);
  };

  const editHandler = (id) => {
    setId(id);
    setEditModal(true);
  };

  return (
    <div className={styles.table}>
      <div className={styles.header}>
        <span>نام کالا</span>
        <span>موجودی</span>
        <span>قیمت</span>
        <span>شناسه کالا</span>
        <span></span>
      </div>
      <div className={styles.body}>
        {data?.map((item) => (
          <div className={styles.row} key={item.id}>
            <span onClick={() => router.push(`products/${item.id}`)}>
              {item.name}
            </span>
            <span>{e2p(item.quantity)}</span>
            <span>{sp(item.price)} تومان</span>
            <span>{item.id}</span>

            {checkBox ? (
              <input
                className={styles.images}
                type="checkbox"
                onChange={() => checkHandler(item.id)}
              />
            ) : (
              <span className={styles.images}>
                <div onClick={() => editHandler(item.id)}>
                  <EditAdmin />
                </div>
                <div onClick={() => deleteByIdHandler(item.id)}>
                  <DeleteAdmin />
                </div>
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableData;
