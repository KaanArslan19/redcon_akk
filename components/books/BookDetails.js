import Link from "next/link";
import classes from "./BookDetails.module.css";
import { GoPlay } from "react-icons/go";
import { TiAttachment } from "react-icons/ti";
const BookDetails = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <Link href="" className={classes.button}>
          Sesli Kitap İndir <GoPlay className={classes.icon} />
        </Link>
        <div className={classes.slider}></div>
        <Link href="" className={classes.button}>
          Pdf İndir
        </Link>
      </div>
      <div className={classes.bottom}>
        <h1>Ozet</h1>
        <p>Dynamic Summary</p>
        <div className={classes.bottomMiddle}>
          <div className={classes.bottomMiddleInner}>
            <div className={classes.innerContent}>
              <h5>Yazar</h5>
              <span>Dynamic Author</span>
            </div>
            <div>
              <h5>Yayın Koordinasyon</h5>
              <span>Dynamic Value</span>
            </div>
          </div>

          <Link href="" className={classes.button}>
            Görüntüleme Linkini Kopyala
            <TiAttachment className={classes.iconShare} />
          </Link>
        </div>
        <div className={classes.bottomLast}>
          <div className={classes.innerContent}>
            <h5>Sayfa Sayisi</h5>
            <span>Dynamic Author</span>
          </div>
          <div className={classes.innerContent}>
            <h5>Yayin Tarihi</h5>
            <span>Dynamic Author</span>
          </div>
          <div className={classes.innerContent}>
            <h5>ISBN/ISSN No</h5>
            <span>Dynamic Author</span>
          </div>
          <div className={classes.innerContent}>
            <h5>Yayin Sahibi</h5>
            <span>Dynamic Author</span>
          </div>
          <div className={classes.innerContent}>
            <h5>Basim Yeri</h5>
            <span>Dynamic Author</span>
          </div>
          <div className={classes.innerContent}>
            <h5>Grafik Tasarim ve Uygulama</h5>
            <span>Dynamic Author</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
