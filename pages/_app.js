//services
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";

//styles
import "@/styles/globals.css";
import "@/styles/fonts.css";

function MyApp({ Component, pageProps }) {
  return (
    <TanstackQueryProvider>
      <Component {...pageProps} />
    </TanstackQueryProvider>
  );
}

export default MyApp;
