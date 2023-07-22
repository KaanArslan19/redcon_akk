import React from "react";
import Navbar from "../Navbar";
import classes from "./BookDetailsLayout.module.css";
import BookDetails from "../books/BookDetails";

const BookDetailsLayout = () => {
  return (
    <div>
      <div className={classes.bottom}></div>
      <div className={classes.top}></div>
      <Navbar />
      <BookDetails />
    </div>
  );
};

export default BookDetailsLayout;
