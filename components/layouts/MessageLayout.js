import classes from "./MessageLayout.module.css";
import Navbar from "../Navbar";
import Message from "../Message";

const MessageLayout = () => {
  return (
    <div className={classes.container}>
      <Navbar />
      <Message />
    </div>
  );
};

export default MessageLayout;
