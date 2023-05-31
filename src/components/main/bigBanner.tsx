import React from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import styles from "@src/scss/Main.module.scss";
import styled from "styled-components";
import Image from "next/image";
import { useQuery } from "react-query";
import { QueryKeys, graphqlFetcher } from "@src/assets/ts/queryClient";
import GET_BANNERS, { Banner, Banners } from "@src/graphql/banner";

export const SlideWrap = styled.div`
  position:relative;
  margin: 0 auto;
  width: 100%;

  .slick-slider{
    margin: 0 auto;
    width: 100%;
  }
  .slick-slide{
    &:nth-of-type(2){background:#2aaf70;}
    // &:nth-of-type(3){background:#aae259;}
    & > div{
      margin: 0 auto;
      width:1050px;
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
    background: url('https://gscdn.hackers.co.kr/history/img/common/sp_main.png') no-repeat;
    &.slick-prev{
      left:50%;
      margin-left:-570px;
      background-position:0 0;
    }
    &.slick-next{
      right:50%;
      margin-right:-570px;
      background-position:-29px 0 !important;
    }
  }
`;

function MainBigBanner() {
  const { data, isLoading, error } = useQuery<any | Banners | unknown | undefined>(QueryKeys.BANNERS, 
    () => graphqlFetcher(GET_BANNERS, {category1: "main", category2: "big"}))

    console.log(data?.GET_BANNERS)
  
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
        {data?.GET_BANNERS?.map((banner: Banner, index: number) => (
          <div className={"imgWrap"} key={index}>
            <Image src={banner.imgUrl} alt={banner.imgAlt} width="1050" height="420" priority />
          </div>
        ))}
      </Slider>
    </SlideWrap>
  );
}

export default MainBigBanner;

