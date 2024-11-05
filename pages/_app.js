//react
import { useState } from "react";

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
    </TanstackQueryProvider>
  );
}

export default MyApp;
