import { Fragment } from "react";
import About from "../constants/About";
import Navbar from "../constants/Navbar";
import classes from "./AboutLayout.module.css";
import { useMediaQuery } from "react-responsive";

const AboutLayout = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1384px)",
  });
  return (
    <div className={isMobile ? "" : classes.container}>
      {isMobile ? (
        <Fragment>
          <div className={classes.topHalf}></div>
          <div className={classes.bottomHalf}></div>
        </Fragment>
      ) : (
        <Fragment>
          <div className={classes.rightHalf}></div>
          <div className={classes.leftHalf}></div>
        </Fragment>
      )}

      <Navbar />
      <About />
    </div>
  );
};

export default AboutLayout;
