//components
import Loader from "../modules/Loader";
import TableData from "../modules/TableData";

//utils
import { errorToast } from "utils/toast";

function ProductsList({
  data,
  isPending,
  isError,
  checkBox,
  setSelectedIds,
  setDeleteModal,
  setId,
  setEditModal,
}) {
  return (
    <div>
      {isPending ? (
        <Loader />
      ) : isError ? (
        errorToast("مشکلی پیش آمده لطفا دوباره تلاش کنید")
      ) : (
        <TableData
          data={data}
          checkBox={checkBox}
          setSelectedIds={setSelectedIds}
          setDeleteModal={setDeleteModal}
          setId={setId}
          setEditModal={setEditModal}
        />
      )}
    </div>
  );
}

export default ProductsList;
