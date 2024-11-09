import Admin from "@/components/templates/Admin";
import api from "@/configs/api";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";

function admin({ totalPages, currentPage, products }) {
  
  return (
    <div>
      <Admin
        totalPages={totalPages}
        currentPage={currentPage}
        data={products}
      />
    </div>
  );
}

export default admin;

export async function getServerSideProps({ req, query }) {
  const page = query.page || 1;
  const productsData = await api.get(`products?page=${page}&limit=10`);
  const products = productsData.data;

  const cookie = req.headers.cookie

  if(!cookie) {
    return {
      redirect: {destination: "/login"}
    }
  }

  return {
    props: {
      products,
      totalPages: products.totalPages,
      currentPage: page,
    },
  };
}
