import Home from "@/components/layouts/Home";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Aliağa Kent Kitaplığı</title>
        <meta name="HomePage" content="Landing" />
      </Head>
      <Home />
    </>
  );
}
