import About from "../About";
import Navbar from "../Navbar";
import classes from "./AboutLayout.module.css";
import { useMediaQuery } from "react-responsive";

const AboutLayout = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1384px)",
  });
  return (
    <div className={!isMobile && classes.container}>
      {isMobile ? (
        <>
          <div className={classes.topHalf}></div>
          <div className={classes.bottomHalf}></div>
        </>
      ) : (
        <>
          <div className={classes.rightHalf}></div>
          <div className={classes.leftHalf}></div>
        </>
      )}

      <Navbar />
      <About />
    </div>
  );
};

export default AboutLayout;
