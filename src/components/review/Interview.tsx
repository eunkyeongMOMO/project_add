import React, { useState } from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import styles from "@src/scss/Main.module.scss";
import styled from "styled-components";
import Image from "next/image";
import MoviePlayer from "@src/components/players/MoviePlayer";

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

function Interview() {
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
    dotsClass: `slick-dots`,
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
    {img:"https://gscdn.hackers.co.kr/pass/img/pass_info/mov_thumb01.jpg", url: "https://youtu.be/sbYItYk7zb8"},
    {img:"https://gscdn.hackers.co.kr/pass/img/pass_info/mov_thumb02.jpg", url: "https://youtu.be/nu2BFCpNaQ0"},
    {img:"https://gscdn.hackers.co.kr/pass/img/pass_info/mov_thumb03.jpg", url: "https://youtu.be/iiHKqVzsL2s"},
    {img:"https://gscdn.hackers.co.kr/pass/img/pass_info/mov_thumb04.jpg", url: "https://youtu.be/x8xGRVWEoyk"},
    {img:"https://gscdn.hackers.co.kr/pass/img/pass_info/mov_thumb05.jpg", url: "https://youtu.be/DZ7Il1BR54Q"},
    {img:"https://gscdn.hackers.co.kr/pass/img/pass_info/mov_thumb06.jpg", url: "https://youtu.be/DkBlhRXMxT8"},
    {img:"https://gscdn.hackers.co.kr/pass/img/pass_info/mov_thumb07.jpg", url: "https://youtu.be/SDbGek8Pag0"},
  ];

  return (
    <>
      <SlideWrap>
        <div className="inner1050">
          <Slider {...settings}>
            {bannerData?.map((banner: {img: string, url:string}, index: number) => (
              <div className={"imgWrap"} key={index} onClick={() => handleMovieUrl(banner.url)}>
                <Image src={banner.img} alt="" width="320" height="180" />
              </div>
            ))}
          </Slider>
          </div>
      </SlideWrap>
      
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

export default Interview;

