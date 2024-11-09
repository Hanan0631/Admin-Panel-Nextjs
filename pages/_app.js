//react
import { useState } from "react";

//react-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//services
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";

//styles
import "@/styles/globals.css";
import "@/styles/fonts.css";

function MyApp({ Component, pageProps }) {
  const [page, setPage] = useState(1)
  return (
    <TanstackQueryProvider>
      <Component {...pageProps} page={page} setPage={setPage} />
      <ToastContainer />
    </TanstackQueryProvider>
  );
}

export default MyApp;
