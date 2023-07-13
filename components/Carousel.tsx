import Image from "next/image";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        cursor: "pointer",
        fontSize: "2rem",
      }}
      onClick={onClick}
    >
      <BiSolidRightArrow />
    </div>
  );
}
function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        cursor: "pointer",
        fontSize: "2rem",
      }}
      onClick={onClick}
    >
      <BiSolidLeftArrow />
    </div>
  );
}
const Carousel = () => {
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings}>
      <Image
        src={"https://www.dummyimage.com/2400x1200"}
        width={1000}
        height={1000}
        alt=""
        className="w-full"
      />
      <Image
        src={"https://www.dummyimage.com/1200x600"}
        width={1000}
        height={1000}
        alt=""
        className="w-full"
      />
      <Image
        src={"https://www.dummyimage.com/2000x1000"}
        width={1000}
        height={1000}
        alt=""
        className="w-full"
      />
    </Slider>
  );
};

export default Carousel;
