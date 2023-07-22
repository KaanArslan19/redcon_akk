import Image from "next/image";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.container}>
      <div className={classes.rightHalf}></div>
      <div className={classes.leftHalf}></div>
      <div className={classes.content}>
        <div className={classes.top}>
          <div></div>
          <div className={classes.topLeft}>
            <h1>Aliağa Kent Kitaplığı</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className={classes.bottom}>
          <span>Bilginin Işığında</span>
          <div>
            <Image
              src="/images/about_middle.png"
              width={150}
              height={50}
              alt="akk-logo"
              className={classes.logo}
            />
            <Image
              src="/images/akk_logo.png"
              width={150}
              height={60}
              alt="akk-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
