import React, { useState } from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import styles from "@src/scss/FreeLecture.module.scss";
import styled from "styled-components";
import MoviePlayer from "@src/components/players/MoviePlayer";
import Image from "next/image";
import videoData from "./VideoData.json";

export const VideoSlide = styled.div`
  .slick-slider {
    padding: 10px 0 50px 0;
    border-top: 1px solid #000 !important;
  }
  li.slick-active {
    background-color: #2fa753;
  }
  .slick-slide {
    padding: 0 8px;
  }
`;

export default function FreeVideoList(props: any) {
  const settings = {
    dots: true,
    dotsClass: `videoDot ${styles["videoDot"]}`,
    arrows: false,
    infinite: true,
    lazyLoad: "ondemand" as LazyLoadTypes,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 4000,
    initialSlide: 0,
  };

  const [showMovie, setShowMovie] = useState(false);
  const [movieUrl, setMovieUrl] = useState("");

  const toggleMovie = () => {
    setShowMovie(!showMovie);
  };

  const handleMovieUrl = (url: string) => {
    setMovieUrl(url);
  };

  return (
    <>
      <h4 className={styles.videoTitle}>{props.title}</h4>
      <p className={styles.videoSubTitle}>
        {props.subTitle01}
        <span>{props.subTitle02}</span>
      </p>
      <VideoSlide>
        <Slider {...settings}>
          {videoData
            .filter((video) => video.topic == props.topic)
            ?.map((video: any, index: number) => (
              <div key={index}>
                <button
                  className={styles.videoBtn}
                  type="button"
                  onClick={() => {
                    toggleMovie();
                    handleMovieUrl(video.url);
                  }}
                >
                  <Image
                    src={video.src}
                    alt={video.alt}
                    width="250"
                    height="140"
                    key={index}
                  />
                </button>
                <h4>{video.title}</h4>
                <p>{video.text}</p>
                <p>선생님:{video.name}</p>
              </div>
            ))}
        </Slider>
      </VideoSlide>
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
