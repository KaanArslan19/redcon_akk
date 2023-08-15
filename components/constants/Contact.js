import Link from "next/link";
import classes from "./Contact.module.css";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLike,
} from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

const Contact = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1100px)",
  });
  return (
    <div className={isMobile ? classes.mobileContainer : classes.container}>
      <div className={isMobile ? classes.mobileContent : classes.content}>
        <div className={isMobile ? classes.top : classes.left}>
          <h1>İletişim</h1>
          <div className={classes.sections}>
            {!isMobile && <div className={classes.spreaderAddressTop}></div>}

            <h5>Adres</h5>
            <span>
              Aliağa Belediyesi Kültür Mahallesi Lozan Caddesi No:47 <br />
              Aliağa / İzmir / Türkiye
            </span>
            {!isMobile && <div className={classes.spreaderAddressBottom}></div>}
          </div>
          <div className={classes.sections}>
            <h5>Yazar</h5>
            <span>hilalmasa@aliaga.bel.tr | aliagabld@hs1.kep.tr</span>
            {!isMobile && <div className={classes.spreaderEmail}></div>}
          </div>
          <div className={classes.sections}>
            <h5>Telefon</h5>
            <span>+90 232 399 00 00</span>
            {!isMobile && <div className={classes.spreaderTel}></div>}
          </div>
          <div className={classes.sections}>
            <h5>Sosyal Medya</h5>
            <span
              className={
                isMobile
                  ? [classes.socialContent + " " + classes.borderBottom]
                  : classes.socialContent
              }
            >
              <Link href="">
                <AiOutlineFacebook
                  className={isMobile ? classes.iconMobile : classes.icon}
                />
              </Link>
              <Link href="">
                <AiOutlineInstagram
                  className={isMobile ? classes.iconMobile : classes.icon}
                />
              </Link>
              <div
                className={isMobile ? classes.spreaderMobile : classes.spreader}
              ></div>
              <span>Aliagakentkitaplıgı</span>
              <div
                className={isMobile ? classes.spreaderMobile : classes.spreader}
              ></div>
              <Link href="">
                <AiOutlineLike
                  className={isMobile ? classes.iconMobile : classes.icon}
                />
              </Link>
            </span>
            {!isMobile && <div className={classes.spreaderSocial}></div>}
          </div>
        </div>
        <div className={isMobile ? classes.bottom : classes.right}>
          <h1>Merhaba!</h1>
          <form className={classes.form}>
            <input placeholder="Name" />
            <input placeholder="Email" />
            <textarea placeholder="Mesaj" />
            <button className={classes.button}>Gönder</button>
          </form>
        </div>
      </div>
      <div className={isMobile ? classes.mapMobile : classes.map}></div>
    </div>
  );
};

export default Contact;
