import classes from "./Banner.module.css";
import ImageSlider from "../ui/ImageSlider";

import { useMediaQuery } from "react-responsive";

const Banner = ({ index, slides }) => {
  const indexChangeHandler = (currentIndex) => {
    index(currentIndex);
  };
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div className={isMobile ? classes.mobileContainer : classes.container}>
      <div className={classes.top}>
        <ImageSlider slideIndex={indexChangeHandler} slides={slides} />
      </div>
      <div className={classes.bottom}></div>
    </div>
  );
};

export default Banner;
