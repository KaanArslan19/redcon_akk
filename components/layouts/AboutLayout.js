import About from "../About";
import Navbar from "../Navbar";
import classes from "./AboutLayout.module.css";

const AboutLayout = () => {
  return (
    <div className={classes.container}>
      <Navbar />
      <About />
    </div>
  );
};

export default AboutLayout;
