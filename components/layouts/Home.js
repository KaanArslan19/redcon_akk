import Banner from "../Banner";
import classes from "./Home.module.css";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.rightHalf}></div>
      <div className={classes.leftHalf}></div>
      <Navbar />
      <Banner />
    </div>
  );
};

export default Home;
