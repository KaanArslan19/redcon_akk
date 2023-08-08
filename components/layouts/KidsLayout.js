import Kids from "../Kids";
import Navbar from "../Navbar";
import classes from "./KidsLayout.module.css";
import { useMediaQuery } from "react-responsive";

const KidsLayout = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1385px)",
  });
  return (
    <div className={isMobile ? "" : classes.container}>
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
      <Kids />
    </div>
  );
};

export default KidsLayout;
