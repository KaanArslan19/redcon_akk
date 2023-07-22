import { Fragment, useEffect, useState } from "react";
import classes from "./BookList.module.css";
import BookItem from "./BookItem";

const BookList = ({ books }) => {
  const [bookList, setBookList] = useState(books);
  useEffect(() => {
    const updatedBookList = bookList.map((book, index) => ({
      ...book,
      bg: index % 2 === 0 ? true : book.bg,
    }));
    setBookList(updatedBookList);
  }, []);
  return (
    <Fragment>
      <div className={classes.listContainer}>
        <ul id="item-list" className={classes.list}>
          {bookList.map((product) => (
            <BookItem
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              bg={product.bg}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default BookList;
