//components
import ProductDetails from "@/components/templates/ProductDetails";

//configs
import api from "@/configs/api";

function Details({ data }) {
  return (
    <div>
      <ProductDetails data={data} />
    </div>
  );
}

export default Details;

export async function getStaticPaths() {
  const data = await api.get(`products`);
  const newData = data.data.data.slice(0, 5);
  const paths = newData.map((product) => ({
    params: { productId: product.id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const data = await api.get(`products/${params.productId}`);

  if (!data.data.name) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data.data,
    },
  };
}
