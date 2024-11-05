//icons
import Logo from "../icons/Logo";
import SearchButton from "../icons/SearchButton";
import Cart from "../icons/Cart";
import Admin from "../icons/Admin";
import Login from "../icons/Login";

//styles
import styles from "./HomePageHeader.module.css";

function HomePageHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Logo />
        <div>
          <SearchButton />
          <input type="text" placeholder="جستجو" />
        </div>
      </div>
      <div className={styles.buttons}>
        <Cart />
        <Admin />
        <Login />
      </div>
    </div>
  );
}

export default HomePageHeader;
