import React from "react";
import Navbar from "../Navbar";
import classes from "./BookDetailsLayout.module.css";
import BookDetails from "../books/BookDetails";

const BookDetailsLayout = ({
  summary,
  writer,
  coordinator,
  totalPage,
  publishDay,
  paperOwner,
  place,
  graphicDesign,
  isbnNumber,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.top}></div>
      <div className={classes.bottom}></div>

      <Navbar />
      <BookDetails
        summary={summary}
        writer={writer}
        coordinator={coordinator}
        totalPage={totalPage}
        publishDay={publishDay}
        paperOwner={paperOwner}
        place={place}
        graphicDesign={graphicDesign}
        isbnNumber={isbnNumber}
      />
    </div>
  );
};

export default BookDetailsLayout;
