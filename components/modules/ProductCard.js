//icons
import Cart from "../icons/Cart";
import Plus from "../icons/Plus";
import Minus from "../icons/Minus";
import Delete from "../icons/Delete";

//utils
import { sp } from "utils/replaceNumber";

//styles
import styles from "./ProductCard.module.css";
import Link from "next/link";

function ProductCard({ item }) {
  return (
    <div className={styles.cardContainer}>
      <Link href={`products/${item.id}`}>
        <h3>{item.name}</h3>
      </Link>
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
