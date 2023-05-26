import React from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import styles from "@src/scss/TeacherDetailBanner.module.scss";
import styled from "styled-components";
import Image from "next/image";

export const SlideWrap = styled.div`
  margin: 0 auto;
  width: 870px;
  height: 470px;

  .slick-arrow {
    position: absolute;
    top: 45%;
    z-index: 0;
    width: 34px;
    height: 84px;
    transform: translateY(0);
    font-size: 0;
    background-image: url("https://gscdn.hackers.co.kr/ecpa/img/common/sp_btn.png");
    background-size: auto !important;

    &.slick-prev {
      left: -20px;
      background-position: 0 -45px;
    }

    &.slick-next {
      right: -20px;
      background-position: -50px -45px !important;
    }
  }

  .slick-dots {
    .slick-active {
      background-color: #fff;
    }
  }
`;

const TeacherDetailBanner = (props: any) => {
  const teacherBannerData01 = [
    {
      src: "https://history.hackers.com/files/history/teacher/intro/3978887/e079ce72731ad9597c3c76930cdbf3bf.png",
      alt: "한국사 심화 수험생들의 절대적인 지지",
    },
    {
      src: "https://history.hackers.com/files/history/teacher/intro/3978887/db2d29d09e2d2af10d288fd9243ab4ff.png",
      alt: "승범쌤이랑 공부하고 2주만에 1급",
    },
    {
      src: "https://history.hackers.com/files/history/teacher/intro/3978887/46478531e9f7cf8a1b05f10762f66db2.png",
      alt: "시험에 나올만한 요점들을 콕콕 집어주신 덕분에 단기 합격할 수 있었어요",
    },
    {
      src: "https://history.hackers.com/files/history/teacher/intro/3978887/5ff2efeab373b1ed324fe61efa782846.png",
      alt: "이번 기회에 역사책과 친하게 지내기로 했습니다",
    },
  ];
  const teacherBannerData02 = [
    {
      src: "https://history.hackers.com/files/history/teacher/intro/3978887/eb89e8719319fc5bcfde345a29d1358e.png",
      alt: "한국사능력검정 단기합격을 위해 김승범 선생님이 반드시 필요한 이유",
    },
    {
      src: "https://history.hackers.com/files/history/teacher/intro/3978887/9e86245197577e8071309e1af518e613.png",
      alt: "한국사능력검정 시험 당일 라이브로 총평/해설 제공",
    },
    {
      src: "https://history.hackers.com/files/history/teacher/intro/3978887/2dbf098707d72401e7bb8b17b9c8f561.png",
      alt: "체계적인 학습 커리큘럼으로 흐름과 배경을 완벽히 이해",
    },
  ];

  const settings = {
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

  if (props.slideNum === "01") {
    return (
      <>
        <SlideWrap className={styles.teacherDetailBanner}>
          <Slider {...settings}>
            {teacherBannerData01?.map((banner, index: number) => (
              <Image
                src={banner.src}
                alt={banner.alt}
                width="870"
                height="470"
                key={index}
                priority
              />
            ))}
          </Slider>
        </SlideWrap>
      </>
    );
  } else if (props.slideNum === "02") {
    return (
      <>
        <SlideWrap className={styles.teacherDetailBanner}>
          <Slider {...settings}>
            {teacherBannerData02?.map((banner, index: number) => (
              <Image
                src={banner.src}
                alt={banner.alt}
                width="870"
                height="470"
                key={index}
                priority
              />
            ))}
          </Slider>
        </SlideWrap>
      </>
    );
  } else {
    return null;
  }
};

export default TeacherDetailBanner;
