import { EmptyLayout } from "@/components/layouts/EmptyLayout";
import "@/styles/globals.css";
import { AppPropsWithLayout } from "@/types";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  console.log("App component");
  

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
