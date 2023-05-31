import React from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import styles from "@src/scss/FreeLecture.module.scss";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { QueryKeys, graphqlFetcher } from "@src/assets/ts/queryClient";
import GET_BANNERS, { Banners } from "@src/graphql/banner";
import { useQuery } from "react-query";

interface Props {
  className?: string;
  style?: any;
  onClick?: any;
}
export const SlideWrap = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  padding-bottom: 50px;

  .slick-slider {
    margin: 0 auto;
    width: 100%;
  }
  .slick-slide {
    height: 300px !important;
  }

  .slickDot li.slick-active:before {
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: #0069a6;
  }
`;

const NextArrow = (props: Props) => {
  const { className, onClick } = props;
  return <button className={styles.nextArrow} onClick={onClick} />;
};

const PrevArrow = (props: Props) => {
  const { className, onClick } = props;
  return <button className={styles.prevArrow} onClick={onClick} />;
};

export default function Banner() {
  const settings = {
    customPaging: function (i: any) {
      return <button type="button">{imgData[i].imgArt} ☞</button>;
    },

    dots: true,
    dotsClass: `slickDot ${styles["slickDot"]}`,
    arrows: true,
    infinite: true,
    lazyLoad: "ondemand" as LazyLoadTypes,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const imgData = [
    {
      imgUrl:
        "https://gscdn.hackers.co.kr/frontend/history/files/banner/c5d4fa7a796791136a97bf7a26b20551.jpg",
      linkUrl: "https://history.hackers.com/?r=history&c=event&evt_id=22120600",
      imgArt: "합격교재 3권+연표 무료받기",
    },
    {
      imgUrl:
        "https://gscdn.hackers.co.kr/frontend/files/banner/imglib_files/banner/imglib/1050x300.jpg",
      linkUrl: "https://history.hackers.com/?r=history&c=event&evt_id=20080300",
      imgArt: "한국사 전강의 무료배포",
    },
    {
      imgUrl:
        "https://gscdn.hackers.co.kr/frontend/history/files/banner/49d256192b374cb8e16f326a59ca9229.jpg",
      linkUrl: "https://history.hackers.com/?r=history&c=event&evt_id=21011200",
      imgArt: "한국사 전교재 확인하기",
    },
    {
      imgUrl:
        "https://history.hackers.com/files/history/files/banner/4f706bd0371531b469cac53007dbbf3a.jpg",
      linkUrl: "https://history.hackers.com/?r=history&c=event&evt_id=20102900",
      imgArt: "기출모의고사 바로받기",
    },
    {
      imgUrl:
        "https://gscdn.hackers.co.kr/frontend/history/files/banner/c5d4fa7a796791136a97bf7a26b20551.jpg",
      linkUrl: "https://history.hackers.com/?r=history&c=event&evt_id=22120600",
      imgArt: "합격교재 3권+연표 무료받기5",
    },
    {
      imgUrl:
        "https://gscdn.hackers.co.kr/frontend/files/banner/imglib_files/banner/imglib/1050x300.jpg",
      linkUrl: "https://history.hackers.com/?r=history&c=event&evt_id=20080300",
      imgArt: "한국사 전강의 무료배포6",
    },
    {
      imgUrl:
        "https://gscdn.hackers.co.kr/frontend/history/files/banner/49d256192b374cb8e16f326a59ca9229.jpg",
      linkUrl: "https://history.hackers.com/?r=history&c=event&evt_id=21011200",
      imgArt: "한국사 전교재 확인하기7",
    },
    {
      imgUrl:
        "https://history.hackers.com/files/history/files/banner/4f706bd0371531b469cac53007dbbf3a.jpg",
      linkUrl: "https://history.hackers.com/?r=history&c=event&evt_id=20102900",
      imgArt: "기출모의고사 바로받기8",
    },
  ];

  const { data, isLoading, error } = useQuery<
    any | Banners | unknown | undefined
  >(QueryKeys.BANNERS, () =>
    graphqlFetcher(GET_BANNERS, { category1: "free_lecture" })
  );
  console.log(data);

  return (
    <SlideWrap>
      <Slider {...settings}>
        {data?.GET_BANNERS?.map((banner: any, index: number) => (
          <div key={index}>
            <Link href={banner.linkUrl} target="blank">
              <Image
                src={banner.imgUrl}
                alt={banner.imgArt}
                width="1050"
                height="300"
                priority
              />
            </Link>
          </div>
        ))}
      </Slider>
    </SlideWrap>
  );
}
