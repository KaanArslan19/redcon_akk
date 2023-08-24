import Banner from "../constants/Banner";
import classes from "./Home.module.css";
import Navbar from "../constants/Navbar";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Home = (props) => {
  const [backgroundColor, setBackgroundColor] = useState(false);
  const backgroundChangeHandler = (currentIndex) => {
    if (currentIndex % 2 === 0) {
      setBackgroundColor(true);
    } else {
      setBackgroundColor(false);
    }
  };
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div className={isMobile ? classes.mobileContainer : classes.container}>
      {isMobile ? (
        <>
          <div
            className={
              backgroundColor
                ? [classes.topHalf + " " + classes.primaryBgLightMobile]
                : [classes.topHalf + " " + classes.secondaryBgLightMobile]
            }
          ></div>
          <div
            className={
              backgroundColor
                ? [classes.bottomHalf + " " + classes.primaryBgDarkMobile]
                : [classes.bottomHalf + " " + classes.secondaryBgDarkMobile]
            }
          ></div>
        </>
      ) : (
        <>
          <div
            className={
              backgroundColor
                ? [classes.rightHalf + " " + classes.primaryBgLight]
                : [classes.rightHalf + " " + classes.secondaryBgLight]
            }
          ></div>
          <div
            className={
              backgroundColor
                ? [classes.leftHalf + " " + classes.primaryBgDark]
                : [classes.leftHalf + " " + classes.secondaryBgDark]
            }
          ></div>
        </>
      )}

      <Navbar bg={backgroundColor ? "primaryBg" : "secondaryBg"} />
      <Banner index={backgroundChangeHandler} slides={props.bookList} />
    </div>
  );
};

export default Home;
