import React from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import styles from "@src/scss/Main.module.scss";
import styled from "styled-components";
import Image from "next/image";

export const SlideWrap = styled.div`
  position:relative;
  margin: 20px auto 30px;
  width: 100%;

  .slick-slider{
    margin: 0 auto;
    width: 100%;
  }
  .slick-slide{
    & > div{
      margin: 0 auto;
      width:500px;
    }
  }

  .slick-arrow{
    position: absolute;
    top: 40%;
    width:20px;
    height:37px;
    font-size: 0;
    text-indent: -9999px;
    outline: 0;
    z-index: 1;
    background: url('https://gscdn.hackers.co.kr/hacademia/images/common/re_btn.png') no-repeat;
    &.slick-prev{
      left:50%;
      margin-left:-570px;
      background-position:4px 0;
    }
    &.slick-next{
      right:50%;
      margin-right:-570px;
      background-position:-17px 0px !important;
    }
  }
`;

function Emblem() {
  const settings = {
    dots: false,
    dotsClass: `slick-dots`,
    arrows: true,
    infinite: true,
    lazyLoad: "ondemand" as LazyLoadTypes,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    initialSlide: 0,
  };

  const bannerData = [
    {img:"https://gscdn.hackers.co.kr/hacademia/images/common/footer/foot_slide1_B.png"},
    {img:"https://gscdn.hackers.co.kr/hacademia/images/common/footer/foot_slide_no1_brand.png"},
    {img:"https://gscdn.hackers.co.kr/hacademia/images/common/footer/foot_slide1_00.png"},
    {img:"https://gscdn.hackers.co.kr/hacademia/images/common/footer/foot_slide1_04_2.png"},
    {img:"https://gscdn.hackers.co.kr/hacademia/images/common/footer/foot_slide1_05.png"},
    {img:"https://gscdn.hackers.co.kr/hacademia/images/common/footer/foot_slide1_B.png"},
    {img:"https://gscdn.hackers.co.kr/hacademia/images/common/footer/foot_slide_no1_brand.png"},
    {img:"https://gscdn.hackers.co.kr/hacademia/images/common/footer/foot_slide1_00.png"},
    {img:"https://gscdn.hackers.co.kr/hacademia/images/common/footer/foot_slide1_04_2.png"},
    {img:"https://gscdn.hackers.co.kr/hacademia/images/common/footer/foot_slide1_05.png"},
  ];

  return (
    <SlideWrap>
      <div className="inner1050">
        <Slider {...settings}>
          {bannerData?.map((banner: {img: string}, index: number) => (
            <div className={"imgWrap"} key={index}>
              <Image src={banner.img} alt="" width="189" height="190" />
            </div>
          ))}
        </Slider>
      </div>
    </SlideWrap>
  );
}

export default Emblem;

