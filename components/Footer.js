import Image from "next/image";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Image
          src="/images/footerLeft.png"
          width={150}
          height={80}
          alt="footerLeft"
        />
      </div>

      <Image src="/images/logo.png" width={150} height={120} alt="footerLogo" />
      <div className={classes.right}>
        <Image
          src="/images/footerRight.png"
          width={150}
          height={80}
          alt="footerLeft"
        />
      </div>
    </div>
  );
};

export default Footer;
