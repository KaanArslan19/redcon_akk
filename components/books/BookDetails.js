import Link from "next/link";
import classes from "./BookDetails.module.css";
import MobileBookDetails from "../mobileConstants/MobileBookDetails";
import { GoPlay } from "react-icons/go";
import { TiAttachment } from "react-icons/ti";
import { useMediaQuery } from "react-responsive";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";

const BookDetails = ({
  summary,
  writer,
  coordinator,
  totalPage,
  publishDay,
  paperOwner,
  place,
  graphicDesign,
  isbnNumber,
  bg,
}) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1058px)",
  });

  return (
    <>
      {isMobile ? (
        <MobileBookDetails
          summary={summary}
          writer={writer}
          coordinator={coordinator}
          totalPage={totalPage}
          publishDay={publishDay}
          paperOwner={paperOwner}
          place={place}
          graphicDesign={graphicDesign}
          isbnNumber={isbnNumber}
          bg={bg}
        />
      ) : (
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
          <div className={classes.bottomContainer}>
            <div className={classes.bottom}>
              <div>
                <h1>Özet</h1>

                <p>{summary}</p>
              </div>
              <>
                <div className={classes.bottomMiddle}>
                  <div className={classes.bottomMiddleInner}>
                    <div className={classes.innerContent}>
                      <h5>Yazar</h5>
                      <span>{writer}</span>
                    </div>
                    <div>
                      <h5>Yayın Koordinasyon</h5>
                      <span>{coordinator}</span>
                    </div>
                  </div>
                  <button className={classes.button}>
                    Görüntüleme Linkini Kopyala
                    <TiAttachment className={classes.iconShare} />
                  </button>
                </div>
                <div className={classes.bottomLast}>
                  <div className={classes.innerContent}>
                    <h5>Sayfa Sayisi</h5>
                    <span>{totalPage}</span>
                  </div>
                  <div className={classes.innerContent}>
                    <h5>Yayin Tarihi</h5>
                    <span>{publishDay}</span>
                  </div>
                  <div className={classes.innerContent}>
                    <h5>ISBN/ISSN No</h5>
                    <span>{isbnNumber}</span>
                  </div>
                  <div className={classes.innerContent}>
                    <h5>Yayin Sahibi</h5>
                    <span>{paperOwner}</span>
                  </div>
                  <div className={classes.innerContent}>
                    <h5>Basim Yeri</h5>
                    <span>{place}</span>
                  </div>
                  <div className={classes.innerContentLast}>
                    <h5>Grafik Tasarim ve Uygulama</h5>
                    <span>{graphicDesign}</span>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookDetails;
