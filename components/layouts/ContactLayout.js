import Contact from "../Contact";
import Navbar from "../Navbar";
import classes from "./ContactLayout.module.css";
import { useMediaQuery } from "react-responsive";

const ContactLayout = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <div className={classes.container}>
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
      <Contact />
    </div>
  );
};

export default ContactLayout;
