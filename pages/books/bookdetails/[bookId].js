import BookList from "@/components/books/BookList";
import BookDetailsLayout from "@/components/layouts/BookDetailsLayout";
import { Book_List } from "@/lib/constantBookData";
import { useRouter } from "next/router";
import fs from "fs/promises";
const BookDetailsPage = (props) => {
  const router = useRouter();
  return (
    <div>
      <BookDetailsLayout
        description={props.bookData.description}
        writer={props.bookData.writer}
        coordinator={props.bookData.coordinator}
        totalPage={props.bookData.totalPage}
        publishDay={props.bookData.publishDay}
        paperOwner={props.bookData.paperOwner}
        place={props.bookData.place}
        graphicDesign={props.bookData.graphicDesign}
      />
    </div>
  );
};

export default BookDetailsPage;

export async function getStaticPaths() {
  const filePath = "./data.json";
  const rawData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(rawData);
  const paths = data.map((book) => ({
    params: {
      bookId: book.id,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const bookId = params.bookId;
  const filePath = "./data.json";
  const rawData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(rawData);
  const filteredBook = data.find((item) => item.id === bookId);
  console.log("Found Item:", filteredBook);

  return {
    props: {
      bookData: {
        id: filteredBook.id,
        description: filteredBook.description,
        writer: filteredBook.writer,
        coordinator: filteredBook.coordinator,
        totalPage: filteredBook.totalPage,
        publishDay: filteredBook.publishDay,
        isbnNumber: filteredBook.isbnNumber,
        paperOwner: filteredBook.paperOwner,
        place: filteredBook.place,
        graphicDesign: filteredBook.graphicDesign,
      },
    },
  };
}
