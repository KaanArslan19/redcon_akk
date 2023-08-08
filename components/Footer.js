import Image from "next/image";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Image
          src="/images/logos/akb_logo.png"
          width={110}
          height={56}
          alt="akb-logo"
        />
        <div className={classes.spreader}></div>

        <Image
          src="/images/logos/ac_black.png"
          width={82}
          height={56}
          alt="ac-logo-black"
        />
      </div>

      <Image src="/images/logo.png" width={150} height={120} alt="footerLogo" />
      <div className={classes.right}>
        <Image
          src="/images/logos/ab_logo.png"
          width={123}
          height={40}
          alt="footerLeft"
        />
        <div className={classes.spreader}></div>
        <Image
          src="/images/logos/uretken_belediyecilik.png"
          width={80}
          height={40}
          alt="footerLeft"
        />
      </div>
    </div>
  );
};

export default Footer;
