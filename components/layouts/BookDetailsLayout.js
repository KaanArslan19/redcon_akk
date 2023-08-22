import Navbar from "../constants/Navbar";
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
  bg,
}) => {
  return (
    <div className={classes.container}>
      <div
        className={
          bg
            ? [
                classes.background +
                  " " +
                  classes.top +
                  " " +
                  classes.bgPrimaryLight,
              ]
            : [
                classes.background +
                  " " +
                  classes.top +
                  " " +
                  classes.bgSecondaryLight,
              ]
        }
      ></div>
      <div
        className={
          bg
            ? [
                classes.background +
                  " " +
                  classes.bottom +
                  " " +
                  classes.bgPrimaryDark,
              ]
            : [
                classes.background +
                  " " +
                  classes.bottom +
                  " " +
                  classes.bgSecondaryDark,
              ]
        }
      ></div>

      <Navbar bg={bg} />
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
        bg={bg}
      />
    </div>
  );
};

export default BookDetailsLayout;
