import { useState } from "react";
import classes from "./ImageSlider.module.css";
import Image from "next/image";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const ImageSlider = ({ slides, slideIndex }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    slideIndex(currentIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    slideIndex(currentIndex);
  };
  return (
    <div className={isMobile ? classes.mobileContainer : classes.container}>
      {isMobile ? (
        <>
          <div className={classes.mobileTop}>
            <Image
              src={slides[currentIndex].image}
              width={372}
              height={340}
              alt={slides[currentIndex].title}
            />
          </div>
          <div className={classes.mobileBottom}>
            <div className={classes.arrowsMobile}>
              <div onClick={goToPrevious} className={classes.arrowMobile}>
                <BiChevronLeft />
              </div>
              <div
                onClick={goToNext}
                className={[classes.arrowMobile + " " + classes.arrowFw]}
              >
                <BiChevronRight />
              </div>
            </div>
            <div>
              <div className={classes.mobileContent}>
                <h1>{slides[currentIndex].title}</h1>
              </div>

              <div className={classes.mobileContentBottom}>
                <Link
                  href={`/books/bookdetails/${slides[currentIndex].id}`}
                  className={classes.buttonMobile}
                >
                  Kitabi Incele
                </Link>
                <Image
                  src="/images/logos/ab_logo.png"
                  width={74}
                  height={24}
                  alt="aab-logo"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={classes.left}>
            <div>
              <h1>{slides[currentIndex].title}</h1>
              <Link
                href={`/books/bookdetails/${slides[currentIndex].id}`}
                className={
                  !isMobile ? [classes.button + " " + classes.buttonAdjust] : ""
                }
              >
                Kitabi Incele
              </Link>
            </div>

            <Image
              src="/images/logos/ab_logo.png"
              width={123}
              height={40}
              alt="aab-logo"
            />
          </div>

          <div className={classes.right}>
            <Image
              src={slides[currentIndex].image}
              width={750}
              height={687}
              alt={slides[currentIndex].title}
              className={classes.image}
            />
            <div className={classes.arrows}>
              <div onClick={goToPrevious} className={classes.arrow}>
                <BiChevronLeft />
              </div>
              <div
                onClick={goToNext}
                className={[classes.arrow + " " + classes.arrowFw]}
              >
                <BiChevronRight />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
