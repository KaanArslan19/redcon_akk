import Image from "next/image";
import classes from "./Kids.module.css";
const Kids = () => {
  return (
    <div className={classes.container}>
      <div className={classes.rightHalf}></div>
      <div className={classes.leftHalf}></div>
      <div className={classes.innerContainer}>
        <div></div>
        <div className={classes.content}>
          <div>
            <Image
              src="/images/aak_logo.png"
              width={240}
              height={150}
              alt="aak-logo"
            />
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

          <div className={classes.bottom}>
            <div className={classes.bottomLeft}>
              <Image
                src="/images/footerRight.png"
                width={150}
                height={50}
                alt="aak-logo"
              />
            </div>
            <Image
              src="/images/akk_logo.png"
              width={150}
              height={50}
              alt="aak-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kids;
