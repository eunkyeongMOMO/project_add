import styles from "@src/scss/Jobbb.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import Slider, { LazyLoadTypes } from "react-slick";

export const SlideWrap = styled.div`
  position: relative;
  margin: 0 auto 50px;
  width: 100%;

  .slick-slider {
    margin: 0 auto;
    width: 100%;
  }
  .slick-slide {
    & > div {
      margin: 0 auto;
      width: 580px;
    }
  }

  .slick-dots {
    position:absolute;
    bottom: -20px;
    right:60px;
    width:auto;
    li {
      &:not(.slick-active) {
        display: none;
      }
      button {
        font-size: 14px;
        color: #000;
        &:before {
          background-color: transparent;
          font-size: 14px;
        }
      }
    }
  }

  .slick-arrow {
    position: absolute;
    bottom: -23px;
    width: 16px;
    height: 16px;
    font-size: 0;
    text-indent: -9999px;
    outline: 0;
    z-index: 1;
    background: url("https://image.hackersjob.com/img/common/button3.png") no-repeat;
    &.slick-prev {
      right: 16px;
      background-position: 0 0;
    }
    &.slick-next {
      right: 0;
      background-position: -15px 0 !important;
    }
  }
`;

function BtmBanner() {
  const data = [
    { img: "https://cdn.hackers.com/hackersjob/PEG/banner/banner_16518384650659.png" },
    { img: "https://cdn.hackers.com/hackersjob/PEG/banner/banner_16475882202462.png" },
    { img: "https://cdn.hackers.com/hackersjob/PEG/banner/banner_16456861236215.jpg" },
  ];

  const settings = {
    dots: true,
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
            <Image src={data.img} alt={data.img} width="580" height="164" />
          </div>
        ))}
      </Slider>
      <span className={styles.total}>/ {data?.length}</span>
    </SlideWrap>
  );
}

export default BtmBanner;
