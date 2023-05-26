import React, { useState } from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import styles from "@src/scss/Main.module.scss";
import styled from "styled-components";
import Image from "next/image";
import MoviePlayer from "@src/components/players/MoviePlayer";

export const SlideWrap = styled.div`
  position:relative;
  margin: 0 auto;
  width: 100%;

  .slick-slider{
    margin: 0 auto;
    width: 100%;
  }

  .slick-arrow{
    position: absolute;
    top: -14%;
    width:27px;
    height:28px;
    font-size: 0;
    text-indent: -9999px;
    outline: 0;
    z-index: 1;
    background: url('https://gscdn.hackers.co.kr/history/img/common/sp_main.png') no-repeat;
    &.slick-prev{
      right:50%;
      margin-right:-475px;
      background-position:-40px -39px;
    }
    &.slick-next{
      right:50%;
      margin-right:-510px;
      background-position:-73px -39px !important;
    }
  }
`;

function BestLecture() {
  const [showMovie, setShowMovie] = useState(false);
  const [movieUrl, setMovieUrl] = useState("");  

  const toggleMovie = () => {
    setShowMovie(!showMovie);
  };

  const handleMovieUrl = (url: string) => {
    setMovieUrl(url);
  };
  
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    lazyLoad: "ondemand" as LazyLoadTypes,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    initialSlide: 0,
  };

  const bannerData = [
    {img:"https://gscdn.hackers.co.kr/frontend/history/site/mnc/4b569f67295ffe77f8164676e88d4a94.jpg", src:"https://www.youtube.com/embed/xo74E1kSKnc", title:"한국사"},
    {img:"https://gscdn.hackers.co.kr/frontend/history/site/mnc/18cb3ee81acb48ba88e6b060bc2bd705.jpg", src:"https://www.youtube.com/embed/xo74E1kSKnc", title:"한국사"},
    {img:"https://gscdn.hackers.co.kr/frontend/history/site/mnc/86a061ca9bdd08a9aca753bf16471d2a.jpg", src:"https://www.youtube.com/embed/xo74E1kSKnc", title:"한국사"},
    {img:"https://gscdn.hackers.co.kr/frontend/history/site/mnc/86a061ca9bdd08a9aca753bf16471d2a.jpg", src:"https://www.youtube.com/embed/xo74E1kSKnc", title:"한국사"}
  ];

  return (
    <>
      <div className={`${styles.inner}`}>
        <h2 className={`${styles.title}`}>해커스 BEST 추천강의</h2>
        <SlideWrap>
          <Slider {...settings}>
            {bannerData?.map((banner: {img: string, src:string, title:string}, index: number) => (
                <button
                  type="button"
                  onClick={() => {
                    toggleMovie();
                    handleMovieUrl(banner.src);
                  }}
                  key={index}
                >
                  <>
                    <div className={`${styles.bestLectureThumb}`}>
                      <Image src={banner.img} alt="" width="342" height="192" />
                    </div>
                    <dl className={`${styles.bestLectureTxt}`}>
                      <dt>
                        <span className={`${styles.blue}`}>[{banner.title}] </span>
                        <span className={`${styles.red}`}> {banner.title}</span>
                      </dt>
                      <dd>
                        교수님 : 이명호 │ 수강기간 : 50일 │ 강의 수 : 20강
                      </dd>
                    </dl>
                  </>
                </button>
            ))}
          </Slider>
        </SlideWrap>
        
      </div>

      {/* 팝업영상 */}
      {showMovie && (
        <div className={styles.moviePopup}>
          <div className={styles.bg} onClick={toggleMovie}></div>
          <div className={styles.inner}>
            <MoviePlayer url={movieUrl} />
          </div>
        </div>
      )}
    </>
  );
}

export default BestLecture;

