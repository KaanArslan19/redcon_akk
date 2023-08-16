import Books from "@/components/layouts/Books";
import fs from "fs/promises";

const BooksPage = (props) => {
  console.log(props.bookList);
  return <Books bookList={props.bookList.data} />;
};

export default BooksPage;

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
