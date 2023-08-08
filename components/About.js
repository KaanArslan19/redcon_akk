import Image from "next/image";
import classes from "./About.module.css";
import { useMediaQuery } from "react-responsive";
const About = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1384px)",
  });
  return (
    <div className={!isMobile ? classes.container : classes.mobileContainer}>
      <div className={isMobile ? classes.emptyMobile : ""}></div>
      <div className={isMobile ? classes.mobileContent : classes.content}>
        <div
          className={
            !isMobile
              ? classes.top
              : [classes.topMobile + " " + classes.bgColorAdj]
          }
        >
          <div>
            <h1>Aliağa’nın Kültür Belleği: Aliağa Kent Kitaplığı</h1>
            <p>
              Günümüzde İzmir’in Aliağa ilçesinin bulunduğu bölgenin insanlık
              tarihi açısından 8.500 yıllık bir geçmişi bulunmaktadır. Aliağa
              Belediyesi; bölgenin tarihi, arkeolojik, ekonomik ve sosyokültürel
              mirasının bilimsel araştırmalarla ortaya çıkarılıp kayıt altına
              almak amacıyla Aliağa Kent Belleği araştırmalarını başlatmış, bu
              araştırmalarda elde edilen bilimsel sonuçları basılı eserler
              olarak yayınlayarak gelecek kuşaklara yazılı kaynaklar oluşturmayı
              hedeflemiştir. Bu amaçla, 2015 yılında T.C. Kültür ve Turizm
              Bakanlığı Kütüphaneler ve Yayımlar Genel Müdürlüğü veri tabanında
              48116 seri numarası ile kayıtlanan Aliağa Kent Kitaplığı Yayınevi
              kurulmuş, ilk olarak da “Aliağa’nın Antik Kentleri” adlı kitap
              yayınlanmıştır.
              <br /> <br />
              “Kentlere anlam ve değer katan, o kenti kent yapan; tarihi ve
              geçmişten bugüne biriktirdiği zenginlikleridir.” şeklinde
              değerlendiren Aliağa Belediye Başkanı Serkan Acar’ın ilçenin
              kültürel gelişiminde büyük önem verdiği yayınevi, 2023 yılına
              kadar arkeolojiden tarihe, coğrafyadan antropolojiye, spordan
              gençlik ve çocuk yayınlarına, farklı disiplinlerde kitaplar
              yayınlanmaktadır.
            </p>
          </div>
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

export default About;
