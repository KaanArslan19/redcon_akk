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
            ? [classes.top + " " + classes.bgPrimaryLight]
            : [classes.top + " " + classes.bgSecondaryLight]
        }
      ></div>
      <div className={classes.bottom}></div>

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
