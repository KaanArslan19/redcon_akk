import Home from "@/components/layouts/Home";
import Head from "next/head";
import fs from "fs/promises";

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>Aliağa Kent Kitaplığı</title>
        <meta name="HomePage" content="Landing" />
      </Head>
      <Home bookList={props.bookList.data} />
    </>
  );
}

export async function getStaticProps() {
  const filePath = "./data.json";
  const rawData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(rawData);

  return {
    props: {
      bookList: {
        data,
      },
    },
  };
}
