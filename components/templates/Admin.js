//next
import Link from "next/link";

//react
import { useEffect, useState } from "react";

//components
import ProductsList from "./ProductsList";
import SearchBox from "../modules/SearchBox";
import AddProduct from "./AddProduct";
import DeleteProducts from "./DeleteProducts";
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProduct";
import Pagination from "../modules/Pagination";
import Management from "../icons/Management";

//services
import { useFetchProductsData } from "services/queries";

//styles
import styles from "./Admin.module.css";

function Admin({ data, totalPages, currentPage }) {
  const [page, setPage] = useState(currentPage)
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState([]);
  const [checkBox, setCheckBox] = useState(false);
  const [id, setId] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [multipleDeleteModal, setMultipleDeleteModal] = useState(false);

  const { isPending, isError, error } = useFetchProductsData();

  useEffect(() => {
    const searchedProducts = data?.data.filter((item) =>
      item.name.includes(search)
    );
    setSearched(searchedProducts);
  }, [search]);

  const deleteMultipleHandler = () => {
    setMultipleDeleteModal(true);
  };
  return (
    <div className={styles.adminContainer}>
      <SearchBox search={search} setSearch={setSearch} />
      <div className={styles.management}>
        <div>
          <Management />
          <p>مدیریت کالا</p>
        </div>
        {checkBox ? (
          <div>
            <Link href="/">فروشگاه</Link>
            <button onClick={deleteMultipleHandler}>حذف محصولات</button>
            <button onClick={() => setCheckBox(false)}>انصراف</button>
          </div>
        ) : (
          <div>
            <Link href="/">فروشگاه</Link>
            <button onClick={() => setAddModal(true)}>افزودن محصول</button>
            <button onClick={() => setCheckBox(true)}>انتخاب محصول</button>
          </div>
        )}
      </div>
      <ProductsList
        data={search ? searched : data?.data}
        isPending={isPending}
        error={error}
        isError={isError}
        checkBox={checkBox}
        setSelectedIds={setSelectedIds}
        setDeleteModal={setDeleteModal}
        setId={setId}
        setEditModal={setEditModal}
      />
      {addModal && <AddProduct setAddModal={setAddModal} />}
      {deleteModal && (
        <DeleteProduct
          setDeleteModal={setDeleteModal}
          id={id}
          setId={setId}
          setPage={setPage}
          pageInfo={data}
        />
      )}
      {editModal && (
        <EditProduct setEditModal={setEditModal} id={id} setId={setId} />
      )}
      {multipleDeleteModal && (
        <DeleteProducts
          setMultipleDeleteModal={setMultipleDeleteModal}
          selectedIds={selectedIds}
          setCheckBox={setCheckBox}
        />
      )}
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
}

export default Admin;
