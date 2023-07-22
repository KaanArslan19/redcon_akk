import { useState } from "react";
import classes from "./ImageSlider.module.css";
import Image from "next/image";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <h1>{slides[currentIndex].title}</h1>
        <p>{slides[currentIndex].description}</p>
      </div>
      <div className={classes.right}>
        <Image
          src={slides[currentIndex].image}
          width={562}
          height={622}
          alt={slides[currentIndex].title}
        />

        <div className={classes.arrows}>
          <div onClick={goToPrevious} className={classes.arrow}>
            <MdArrowBackIos />
          </div>
          <div onClick={goToNext} className={classes.arrow}>
            <MdArrowForwardIos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
