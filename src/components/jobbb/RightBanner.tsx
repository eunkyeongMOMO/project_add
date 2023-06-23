import styles from "@src/scss/Jobbb.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import Slider, { LazyLoadTypes } from "react-slick";

export const SlideWrap = styled.div`
  position: absolute;
  top: 18%;
  left: 105%;
  width: 110px;

  .slick-slider {
    position: relative;
    margin: 0 auto;
  }
  .slick-slide {
    & > div {
      margin: 0 auto;
    }
  }

  .slick-arrow {
    position: absolute;
    bottom: -20px;
    width: 16px;
    height: 16px;
    font-size: 0;
    text-indent: -9999px;
    outline: 0;
    z-index: 1;
    background: url("https://image.hackersjob.com/img/common/button3.png") no-repeat;
    &.slick-prev {
      left: 35px;
      background-position: 0 0;
    }
    &.slick-next {
      left: 55px;
      background-position: -15px 0 !important;
    }
  }
`;

function RightBanner() {
  const data = [
    { img: "https://cdn.hackers.com/hackersjob/PEG/banner/banner_16456857020412.png" },
    { img: "https://cdn.hackers.com/hackersjob/PEG/banner/banner_16456857020412.png" },
  ];

  const settings = {
    dots: false,
    dotsClass: `slick-dots`,
    arrows: true,
    infinite: true,
    lazyLoad: "ondemand" as LazyLoadTypes,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    initialSlide: 0,
  };

  return (
    <SlideWrap>
      <Slider {...settings}>
        {data?.map((data: any, index: number) => (
          <div className={"imgWrap"} key={index}>
            <Image src={data.img} alt={data.img} width="110" height="110" />
          </div>
        ))}
      </Slider>
    </SlideWrap>
  );
}

export default RightBanner;
