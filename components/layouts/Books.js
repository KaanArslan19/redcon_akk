import Footer from "../constants/Footer";
import Navbar from "../constants/Navbar";
import BookList from "../books/BookList";
import classes from "./Books.module.css";
import { Book_List } from "@/lib/constantBookData";
const Books = (props) => {
  return (
    <div className={classes.container}>
      <Navbar />
      <BookList bookList={props.bookList} />
      <Footer />
    </div>
  );
};

export default Books;
