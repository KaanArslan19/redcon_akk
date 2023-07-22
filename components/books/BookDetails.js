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
          <div>
            <h5>Yazar</h5>
            <span>Dynamic Author</span>
          </div>
          <div>
            <h5>Yayın Koordinasyon</h5>
            <span>Dynamic Value</span>
          </div>
          <Link href="" className={classes.button}>
            Görüntüleme Linkini Kopyala <TiAttachment />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
