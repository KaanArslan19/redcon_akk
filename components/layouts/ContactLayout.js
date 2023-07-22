import Contact from "../Contact";
import Navbar from "../Navbar";
import classes from "./ContactLayout.module.css";
const ContactLayout = () => {
  return (
    <div className={classes.container}>
      <div className={classes.rightHalf}></div>
      <div className={classes.leftHalf}></div>
      <Navbar />
      <Contact />
    </div>
  );
};

export default ContactLayout;
