import { BiChevronDown } from "react-icons/bi";
import { TiAttachment } from "react-icons/ti";
import { GoPlay } from "react-icons/go";

import Link from "next/link";
import classes from "./MobileBookDetails.module.css";

import { useState } from "react";

const MobileBookDetails = ({
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
  const [showSummary, setShowSummary] = useState(false);
  const [showMobileFeatures, setShowMobileFeatures] = useState(false);
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
          bg
            ? classes.mobileBottomContainer + " " + classes.bgPrimaryDark
            : classes.mobileBottomContainer + " " + classes.bgSecondaryDark
        }
      >
        <div className={classes.mobileBottom}>
          <div className={classes.mobileMainContent}>
            <div className={classes.mobileHeader} onClick={summaryClickHandler}>
              <h1>Özet</h1>
              <BiChevronDown className={classes.arrowDownIcon} />
            </div>

            <p className={!showSummary && classes.restrictSummary}>{summary}</p>
            {!showSummary && <p>...</p>}
          </div>

          <>
            <div className={classes.mobileLink}>
              <span>Görüntüleme Linkini Kopyala</span>
              <TiAttachment className={classes.iconShareMobile} />
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
        </div>
      </div>
    </div>
  );
};

export default MobileBookDetails;
