import Link from "next/link";
import classes from "./BookDetails.module.css";
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
}) => {
  const [showSummary, setShowSummary] = useState(false);
  const [showMobileFeatures, setShowMobileFeatures] = useState(false);
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const summaryClickHandler = () => {
    setShowSummary(true);
    if (showSummary) {
      setShowSummary(false);
    }
  };
  const mobileFeaturesClickHandler = () => {
    setShowMobileFeatures(true);
    if (showMobileFeatures) {
      setShowMobileFeatures(false);
    }
  };
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
      <div
        className={
          isMobile ? classes.mobileBottomContainer : classes.bottomContainer
        }
      >
        <div className={isMobile ? classes.mobileBottom : classes.bottom}>
          <div className={isMobile && classes.mobileMainContent}>
            {isMobile ? (
              <div
                className={classes.mobileHeader}
                onClick={summaryClickHandler}
              >
                <h1>Özet</h1>
                <BiChevronDown className={classes.arrowDownIcon} />
              </div>
            ) : (
              <h1>Özet</h1>
            )}

            <p className={!showSummary && isMobile && classes.restrictSummary}>
              {summary}
            </p>
            {!showSummary && isMobile && <p>...</p>}
          </div>
          {isMobile ? (
            <>
              <div className={classes.mobileLink}>
                <span>Görüntüleme Linkini Kopyala</span>
                <TiAttachment className={classes.iconShare} />
              </div>
              <div className={classes.mobileBookFeatures}>
                {!showMobileFeatures ? (
                  <div
                    className={classes.mobileLink}
                    onClick={mobileFeaturesClickHandler}
                  >
                    <span className={classes.mobileButton}>
                      Kitap Özellikleri
                    </span>
                    <BiChevronDown className={classes.arrowDownIcon} />
                  </div>
                ) : (
                  <div className={classes.mobileBookFeaturesContainer}>
                    <div
                      className={classes.mobileLinkShowFeatures}
                      onClick={mobileFeaturesClickHandler}
                    >
                      <span className={classes.mobileButton}>
                        Kitap Özellikleri
                      </span>
                      <BiChevronDown className={classes.arrowDownIcon} />
                    </div>
                    <div className={classes.mobileBookFeaturesInnerContainer}>
                      <div className={classes.mobileBookFeaturesLeft}>
                        <div className={classes.mobileBookFeaturesInnerContent}>
                          <h5>Yazar</h5>
                          <span>{writer}</span>
                        </div>
                        <div className={classes.mobileBookFeaturesInnerContent}>
                          <h5>Sayfa Sayisi</h5>
                          <span>{totalPage}</span>
                        </div>
                        <div className={classes.mobileBookFeaturesInnerContent}>
                          <h5>ISBN/ISSN No</h5>
                          <span>{isbnNumber}</span>
                        </div>
                        <div className={classes.mobileBookFeaturesInnerContent}>
                          <h5>Basim Yeri</h5>
                          <span>{place}</span>
                        </div>
                      </div>
                      <div className={classes.mobileBookFeaturesRight}>
                        <div className={classes.mobileBookFeaturesInnerContent}>
                          <h5>Yayın Koordinasyon</h5>
                          <span>{coordinator}</span>
                        </div>
                        <div className={classes.mobileBookFeaturesInnerContent}>
                          <h5>Yayin Tarihi</h5>
                          <span>{publishDay}</span>
                        </div>
                        <div className={classes.mobileBookFeaturesInnerContent}>
                          <h5>Yayin Sahibi</h5>
                          <span>{paperOwner}</span>
                        </div>
                        <div className={classes.mobileBookFeaturesInnerContent}>
                          <h5>Grafik Tasarim ve Uygulama</h5>
                          <span>{graphicDesign}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
