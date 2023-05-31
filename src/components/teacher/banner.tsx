import { useQuery } from "react-query";
import { graphqlFetcher, QueryKeys } from "@src/assets/ts/queryClient";
import { GET_TEACHERS, Teachers, Teacher } from "@src/graphql/teacher";
import React from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import styles from "@src/scss/TeacherBanner.module.scss";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const SlideWrap = styled.div`
  margin: 0 auto;
  width: 100%;

  .slick-arrow{
    position: absolute;
    top: 82%;
    z-index: 1;
    width: 35px;
    height: 50px;
    transform:translateY(0);
    font-size: 0;
    background-image: url('https://gscdn.hackers.co.kr/ecpa/img/common/sp_btn.png');
    background-size: auto !important;

    &.slick-prev{
      left: 0;
      background-position: -183px -25px;
    }

    &.slick-next{
      right: 0;
      background-position: -220px -25px !important;
    }
  }

  .slick-dots{
    .slick-active{
      font-weight: 600;
      
      &::after{
        display: block;
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: 0;
        left: 0;
        z-index: 1;
        background-color #0069a6;
      }
    }
  }
`;

function TeacherBanner() {
  const { data, isLoading, error } = useQuery<
    any | Teachers | unknown | undefined
  >(QueryKeys.LECTURES, () => graphqlFetcher(GET_TEACHERS));
  const LectureListItems = (data?.lectures || []) as Teacher;

  const teacherBannerData = [
    {
      src: "https://gscdn.hackers.co.kr/frontend/history/files/banner/f54f8e0dda080ca9197b5f1bfee3d049.jpg",
      href: "https://history.hackers.com/?r=history&c=event&evt_id=20080300",
      alt: "2023 한능검 2주합격 풀패스",
    },
    {
      src: "https://gscdn.hackers.co.kr/frontend/history/files/banner/a4b7f69047b1a9d055088352e4555870.jpg",
      href: "https://history.hackers.com/?r=history&c=event&evt_id=21020400",
      alt: "한국사능력검정 합격후기 이벤트",
    },
    {
      src: "https://gscdn.hackers.co.kr/frontend/files/banner/imglib_files/banner/imglib/1050x300.jpg",
      href: "https://history.hackers.com/?r=history&c=event&evt_id=21011200",
      alt: "한능검 심화/기본 최신인강 무료",
    },
    {
      src: "https://history.hackers.com/files/history/files/banner/4f1e0e3be7b3a6421ffae3c074c4a8b0.jpg",
      href: "https://history.hackers.com/?r=history&c=event&evt_id=20102900",
      alt: "한국사 전교재 체험판 무료배포",
    },
  ];

  const settings = {
    customPaging: function (i: number) {
      return <button>{teacherBannerData[i].alt}</button>;
    },

    dots: true,
    dotsClass: `slick-dots ${styles["slick-dots"]}`,
    arrows: true,
    arrowsClass: `slick-arrow ${styles["slick-arrow"]}`,
    infinite: true,
    lazyLoad: "ondemand" as LazyLoadTypes,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    initialSlide: 0,
  };

  return (
    <SlideWrap className={styles.teacherBanner}>
      <Slider {...settings}>
        {teacherBannerData?.map((banner, index: number) => (
          <Link href={banner.href} target="_blank" key={index}>
            <Image
              src={banner.src}
              alt={banner.alt}
              width="1050"
              height="300"
              key={index}
              priority
            />
          </Link>
        ))}
      </Slider>
    </SlideWrap>
  );
}

export default TeacherBanner;
