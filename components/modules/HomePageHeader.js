//next
import Link from "next/link";

//cookies-next
import { getCookie } from "cookies-next";

//icons
import Logo from "../icons/Logo";
import SearchButton from "../icons/SearchButton";
import Cart from "../icons/Cart";
import Admin from "../icons/Admin";
import Login from "../icons/Login";

//styles
import styles from "./HomePageHeader.module.css";

function HomePageHeader({ search, setSearch }) {
  const token = getCookie("token");

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Logo />
        <div>
          <SearchButton />
          <input
            type="text"
            placeholder="جستجو"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.buttons}>
        <Link href="/" className={styles.cart}>
          <Cart />
        </Link>
        {token ? (
          <Link href="/admin">
            <Admin />
          </Link>
        ) : (
          <Link href="/login">
            <Login />
          </Link>
        )}
      </div>
    </div>
  );
}

export default HomePageHeader;
