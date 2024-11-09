//components
import SearchButton from "../icons/SearchButton";

//styles
import styles from "./SearchBox.module.css";

function SearchBox({ search, setSearch }) {
  return (
    <div className={styles.searchBox}>
      <div className={styles.search}>
        <SearchButton />
        <input
          type="text"
          placeholder="جستجو کالا"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={styles.admin}>
        <img src="/admin-photo.svg" />
        <div>
          <p>میلاد عظمی</p>
          <span>مدیر</span>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
