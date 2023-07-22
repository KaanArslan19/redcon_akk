import Kids from "../Kids";
import Navbar from "../Navbar";
import classes from "./KidsLayout.module.css";
const KidsLayout = () => {
  return (
    <div className={classes.container}>
      <Navbar />
      <Kids />
    </div>
  );
};

export default KidsLayout;
