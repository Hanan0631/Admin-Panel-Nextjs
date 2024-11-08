//utils
import { sp } from "utils/replaceNumber";

//styles
import styles from "./ProductDetails.module.css";

function ProductDetails({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <p>{data.name}</p>
        <span>{sp(data.price)} تومان</span>
      </div>
    </div>
  );
}

export default ProductDetails;
