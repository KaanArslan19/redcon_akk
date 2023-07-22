import Link from "next/link";
import classes from "./Contact.module.css";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLike,
} from "react-icons/ai";

const Contact = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.left}>
          <h1>İletişim</h1>
          <div className={classes.sections}>
            <h5>Adres</h5>
            <span>
              Aliağa Belediyesi Kültür Mahallesi Lozan Caddesi No:47 Aliağa /
              İzmir / Türkiye
            </span>
          </div>
          <div className={classes.sections}>
            <h5>Email</h5>
            <span>hilalmasa@aliaga.bel.tr | aliagabld@hs1.kep.tr</span>
          </div>
          <div className={classes.sections}>
            <h5>Telefon</h5>
            <span>+90 232 399 00 00</span>
          </div>
          <div className={classes.sections}>
            <h5>Sosyal Medya</h5>
            <span>
              <Link href="">
                <AiOutlineFacebook className={classes.icon} />
              </Link>
              <Link href="">
                <AiOutlineInstagram className={classes.icon} />
              </Link>
              &nbsp;|&nbsp; aliagakentkitaplıgı&nbsp; |&nbsp;{" "}
              <Link href="">
                <AiOutlineLike className={classes.iconLike} />
              </Link>
            </span>
          </div>
        </div>
        <div className={classes.right}>
          <h1>Merhaba!</h1>
          <form className={classes.form}>
            <input placeholder="Name" />
            <input placeholder="Email" />
            <textarea placeholder="Mesaj" />
            <button className={classes.button}>Gönder</button>
          </form>
        </div>
      </div>
      <div className={classes.map}></div>
    </div>
  );
};

export default Contact;
