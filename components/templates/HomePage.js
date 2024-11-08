//react
import { useEffect, useState } from "react";

//components
import HomePageHeader from "../modules/HomePageHeader";
import ProductCard from "../modules/ProductCard";
import Pagination from "../modules/Pagination";

//services
import { useFetchProductsData } from "services/queries";

//styles
import styles from "./HomePage.module.css";

function HomePage({ totalPages, currentPage, products }) {
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState([]);

  const { data } = useFetchProductsData(currentPage, search);

  useEffect(() => {
    const searchedProducts = data?.data.data.filter((item) =>
      item.name.includes(search)
    );
    setSearched(searchedProducts);
  }, [search]);

  return (
    <div className={styles.container}>
      <HomePageHeader search={search} setSearch={setSearch} />
      <div className={styles.cardContainer}>
        {search
          ? searched?.map((item) => <ProductCard key={item.id} item={item} />)
          : products?.data.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        products={products}
      />
    </div>
  );
}

export default HomePage;
