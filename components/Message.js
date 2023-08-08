import Image from "next/image";
import classes from "./Message.module.css";
import { useMediaQuery } from "react-responsive";

const Message = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <div className={classes.container}>
      <div className={isMobile ? classes.topMobile : classes.top}>
        <h1>Tarih, Bir Milletin Geçmişi ile Geleceği Arasındaki Köprüdür</h1>
        <p>
          Kentleri kent yapan, geçmişten bugüne taşıdığı değerlerle oluşan
          kimlikleridir. Coğrafyamızda günümüze ulaşan her şey, bize geleceğe
          taşımamız için emanet edilen geçmişin mirasıdır. Bu kültürün kâinatta
          bıraktığı ayak izlerini korumak, anlamak ve geleceğe taşımak da bizim
          omuzlarımızdaki yüce bir sorumluluk ve görevdir.
          <br />
          <br /> Aliağa ve çevresinin 8.500 yıllık uygarlık yolculuğuna dair tüm
          kültürel birikimi bulmak, kayıt altına almak ve geleceğe taşımak!
          İşte, Kent Belleği araştırmalarımız ve Aliağa Kent Kitaplığı
          yayınlarımızla bu tarihsel görev ve sorumluluğu yerine getirmeye
          çalışıyoruz.
          <br />
          <br />
          Biliyoruz ki Tarih, bir milletin geçmişi ile geleceği arasında
          köprüdür. Aliağa’nın geçmişten bugüne kültür birikimini geleceğe
          taşımak için bir meşale olan Aliağa Kent Kitaplığı, bu kültürel
          köprüyü kuran çok değerli eserleri kültür dünyamıza kazandırıyor.
          <br />
          <br />
          Eserlerimizin tüm okuyucularımıza yararlı olmasını diliyorum. <br />
          <br />
          Sevgi ve Saygılarımla…
        </p>
        <Image
          src="/images/logos/abb_sign.png"
          width={isMobile ? 128 : 182}
          height={isMobile ? 28 : 40}
          alt="abb-logo"
        />
      </div>
      <div className={classes.motifContainer}>
        <div className={classes.motif}></div>
      </div>
    </div>
  );
};

export default Message;
