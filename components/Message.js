import Image from "next/image";
import classes from "./Message.module.css";

const Message = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <h1>Sevgili Okuryazarlar</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Image
          src="/images/abb_sign.png"
          width={80}
          height={50}
          alt="abb-logo"
        />
      </div>
      <Image
        src="/images/motif.jpg"
        className={classes.motif}
        width={80}
        height={50}
        alt="motif"
      />
    </div>
  );
};

export default Message;
