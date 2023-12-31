import classes from "./MessageLayout.module.css";
import Navbar from "../constants/Navbar";
import Message from "../constants/Message";
import { useMediaQuery } from "react-responsive";

const MessageLayout = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <div
      className={
        isMobile
          ? classes.container
          : [classes.container + " " + classes.heightAdj]
      }
    >
      <Navbar />
      <Message />
    </div>
  );
};

export default MessageLayout;
