import HomePage from "@/components/templates/HomePage";
import api from "@/configs/api";

function Home({ products, totalPages, currentPage }) {
  return (
    <div>
      <HomePage
        totalPages={totalPages}
        currentPage={currentPage}
        products={products}
      />
    </div>
  );
}

export default Home;

export async function getServerSideProps({ query }) {
  const page = query.page || 1;
  const productsData = await api.get(`products?page=${page}&limit=10`);
  const products = productsData.data;

  console.log(products);

  return {
    props: {
      products,
      totalPages: products.totalPages,
      currentPage: page,
    },
  };
}
