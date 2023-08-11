import Banner from "../Banner";
import classes from "./Home.module.css";
import Navbar from "../Navbar";
import { useState } from "react";
import { Book_List } from "@/lib/constantBookData";
import { useMediaQuery } from "react-responsive";

const Home = () => {
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

      <Navbar />
      <Banner index={backgroundChangeHandler} slides={Book_List} />
    </div>
  );
};

export default Home;
