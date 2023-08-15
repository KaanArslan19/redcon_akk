import Image from "next/image";
import classes from "./Kids.module.css";
import { useMediaQuery } from "react-responsive";

const Kids = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1385px)",
  });
  return (
    <div className={isMobile ? classes.mobileContainer : classes.container}>
      <div className={classes.space}></div>
      <div
        className={
          isMobile
            ? [classes.contentMobile + " " + classes.bg]
            : [classes.content + " " + classes.sizeAdj]
        }
      >
        <div className={classes.top}>
          <Image
            src="/images/logos/ac_logo.png"
            width={130}
            height={88}
            alt="aak-logo"
          />

          <h3 className={classes.title}>
            Çocuk dünyasına dair her şey için;
            <br />
            Aliağa Çocuk
          </h3>
          <p>
            Yarınların büyükleri olacak çocuklarımızın çevremizi tanıması,
            doğayı, hayvanları, doğal güzellikleri keşfedip sevmesi, gelenek ve
            görenekleri öğrenmesi, milli ve manevi değerleri kazanıp vatan,
            bayrak ve Atatürk sevgisiyle yetişmesi yarınlarımızın güvencesidir.
            Aliağa Kent Kitaplığı, çocuklarımıza yönelik olarak Aliağa’yı konu
            alan çocuk edebiyatına ilişkin çeşitli yayınları “Aliağa Çocuk”
            dizisi adıyla yayınlanmaktadır.
            <br />
            <br /> Aliağa Çocuk dizisinde öykü, boyama kitapları, resimli
            kitaplar ve çocuk dergileri gibi çocukları hem eğlendirecek hem de
            çocukların gelişimini destekleyecek eserler yayınlanmaktadır.
            <br /> <br /> Aliağa Çocuk kitaplarımızı okuyan tüm çocuklarımızın
            hep mutlu olması dileğimizle. <br /> <br /> Kucak dolusu sevgiler...
          </p>
        </div>

        <div className={isMobile ? classes.bottomMobile : classes.bottom}>
          <div className={classes.bottomLeft}>
            <Image
              src="/images/logos/akb_logo.png"
              width={isMobile ? 78 : 110}
              height={isMobile ? 40 : 56}
              alt="aak-logo"
            />
          </div>
          <div className={classes.bottomRight}>
            <Image
              src="/images/logos/ab_logo.png"
              width={isMobile ? 74 : 123}
              height={isMobile ? 24 : 40}
              alt="aak-logo"
            />
            <div
              className={isMobile ? classes.spreaderMobile : classes.spreader}
            ></div>

            <Image
              src="/images/logos/uretken_belediyecilik.png"
              width={isMobile ? 60 : 80}
              height={isMobile ? 24 : 40}
              alt="aak-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kids;
