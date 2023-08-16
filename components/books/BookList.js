import { Fragment } from "react";
import classes from "./BookList.module.css";
import BookItem from "./BookItem";

const BookList = (props) => {
  return (
    <Fragment>
      <div className={classes.listContainer}>
        <ul id="item-list" className={classes.list}>
          {props.bookList.map((product) => (
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
