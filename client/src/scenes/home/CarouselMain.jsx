import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselCss from './CarouselMain.module.css'

// imports all images from assets folder
const importAll = (r) =>
    r.keys().reduce((acc, item) => {
        acc[item.replace("./", "")] = r(item);
        return acc;
    }, {});

const heroTextureImports = importAll(
    require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);

const CarouselMain = () => {
    const isNonMobile = window.matchMedia("(min-width: 600px)").matches;

  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <button className={CarouselCss.left} onClick={onClickHandler}>
          <i className="fa-sharp fa-solid fa-arrow-left"></i>
        </button>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <button className={CarouselCss.right} onClick={onClickHandler}>
          <i className="fa-sharp fa-solid fa-arrow-right"></i>
        </button>
      )}
    >
      {Object.values(heroTextureImports).map((texture, index) => (
        <div key={`carousel-image-${index}`}>
          <img src={texture} alt={`carousel-${index}`} />
          <div
            className={CarouselCss.textContainer}
            style={{
              left: isNonMobile ? "10%" : "0",
              right: isNonMobile ? undefined : "0 auto",
              margin: isNonMobile ? undefined : "0",
              maxWidth: isNonMobile ? undefined : "240px"
            }}
          >
            <h5>-- NEW ITEMS</h5>
            <h1>SALE</h1>
            <h5>COLLABORATIONS</h5>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselMain