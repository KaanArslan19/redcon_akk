import BookDetailsLayout from "@/components/layouts/BookDetailsLayout";

import fs from "fs/promises";
const BookDetailsPage = (props) => {
  return (
    <div>
      <BookDetailsLayout
        summary={props.bookData.summary}
        writer={props.bookData.writer}
        coordinator={props.bookData.coordinator}
        totalPage={props.bookData.totalPage}
        publishDay={props.bookData.publishDay}
        paperOwner={props.bookData.paperOwner}
        place={props.bookData.place}
        graphicDesign={props.bookData.graphicDesign}
        isbnNumber={props.bookData.isbnNumber}
        bg={props.bookData.bg}
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

  return {
    props: {
      bookData: {
        id: filteredBook.id,
        summary: filteredBook.summary,
        writer: filteredBook.writer,
        coordinator: filteredBook.coordinator,
        totalPage: filteredBook.totalPage,
        publishDay: filteredBook.publishDay,
        isbnNumber: filteredBook.isbnNumber,
        paperOwner: filteredBook.paperOwner,
        place: filteredBook.place,
        isbnNumber: filteredBook.isbnNumber,
        graphicDesign: filteredBook.graphicDesign,
        bg: filteredBook.bg,
      },
    },
  };
}
