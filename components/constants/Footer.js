import Image from "next/image";
import classes from "./Footer.module.css";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <div className={isMobile ? classes.containerMobile : classes.container}>
      <div className={classes.left}>
        <Image
          src="/images/logos/akb_logo.png"
          width={isMobile ? 47 : 110}
          height={isMobile ? 24 : 56}
          alt="akb-logo"
        />
        <div
          className={isMobile ? classes.spreaderMobile : classes.spreader}
        ></div>

        <Image
          src="/images/logos/ac_black.png"
          width={isMobile ? 35 : 82}
          height={isMobile ? 24 : 56}
          alt="ac-logo-black"
        />
      </div>

      <Image
        src="/images/logo.png"
        width={isMobile ? 41 : 150}
        height={isMobile ? 40 : 120}
        alt="footerLogo"
      />
      <div className={classes.right}>
        <Image
          src="/images/logos/ab_logo.png"
          width={isMobile ? 49 : 123}
          height={isMobile ? 16 : 40}
          alt="footerLeft"
        />
        <div
          className={isMobile ? classes.spreaderMobile : classes.spreader}
        ></div>
        <Image
          src="/images/logos/uretken_belediyecilik.png"
          width={isMobile ? 32 : 80}
          height={isMobile ? 16 : 40}
          alt="footerLeft"
        />
      </div>
    </div>
  );
};

export default Footer;
