//next
import { useRouter } from "next/router";

//react
import { useEffect } from "react";

function Index() {
  const router = useRouter();
  useEffect(() => {
    router.push("/products");
  }, []);
  return <div></div>;
}

export default Index;
