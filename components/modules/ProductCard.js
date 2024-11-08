//icons
import Cart from "../icons/Cart";
import Plus from "../icons/Plus";
import Minus from "../icons/Minus";
import Delete from "../icons/Delete";

//utils
import { sp } from "utils/replaceNumber";

//styles
import styles from "./ProductCard.module.css";


function ProductCard({ item }) {
  return (
    <div className={styles.cardContainer}>
      <h3>{item.name}</h3>
      <p>{sp(item.price)} تومان</p>
      <div>
        <button>
          <Cart />
        </button>
        <button>
          <Plus />
        </button>
        <button>
          <Minus />
        </button>
        <button>
          <Delete />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;