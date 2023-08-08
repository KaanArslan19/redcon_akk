import Footer from "../Footer";
import Navbar from "../Navbar";
import BookList from "../books/BookList";
import classes from "./Books.module.css";
import { Book_List } from "@/lib/constantBookData";
const Books = () => {
  return (
    <div className={classes.container}>
      <Navbar />
      <BookList books={Book_List} />
      <Footer />
    </div>
  );
};

export default Books;
