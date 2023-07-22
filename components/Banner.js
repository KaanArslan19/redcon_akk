import Image from "next/image";
import classes from "./Banner.module.css";
import ImageSlider from "./ui/ImageSlider";

const DUMMY_BOOK_DATA = [
  {
    id: "b1",
    title: "Helvacı",
    description: "description text",
    image: "/images/book1.png",
  },
  {
    id: "b2",
    title: "Kuş Cenneti",
    description: "description text",
    image: "/images/book2.png",
  },
];
const Banner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <ImageSlider slides={DUMMY_BOOK_DATA} />
      </div>
      <div className={classes.bottom}></div>
    </div>
  );
};

export default Banner;
