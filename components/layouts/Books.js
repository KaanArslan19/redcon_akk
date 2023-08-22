import Footer from "../constants/Footer";
import Navbar from "../constants/Navbar";
import BookList from "../books/BookList";
import classes from "./Books.module.css";
const Books = (props) => {
  return (
    <div className={classes.container}>
      <Navbar bg={props.bg} />
      <BookList bookList={props.bookList} />
      <Footer />
    </div>
  );
};

export default Books;
