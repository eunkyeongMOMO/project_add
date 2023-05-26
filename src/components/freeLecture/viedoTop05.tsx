import React, { useState } from "react";
import styles from "@src/scss/FreeLecture.module.scss";
import MoviePlayer from "@src/components/players/MoviePlayer";
import Image from "next/image";

export default function FreeViedoTop05() {
  const videoData = [
    {
      id: 1,
      src: "https://history.hackers.com/files/history/common/2022/05/fe1e267239c877cb242a2f649aa52eda.png",
      alt: "한눈에 펼쳐보는 한국사 1탄 '선사시대·고대사회'편",
      url: "https://www.youtube.com/embed/qZ2qBfxW20w",
    },
    {
      id: 2,
      src: "https://gscdn.hackers.co.kr/frontend/history/common/2023/03/da96054c679d848532cbbf207d2160e8.jpg",
      alt: "63회 한국사능력검정시험 심화 기출문제",
      url: "https://www.youtube.com/embed/vwWAbWkM7Ko",
    },
    {
      id: 3,
      src: "https://gscdn.hackers.co.kr/frontend/history/common/2023/03/96392238431877cb96e2a45eded7bb72.png",
      alt: "62회 한국사능력검정시험 심화 기출문제",
      url: "https://www.youtube.com/embed/3Fx5jjsJHGc",
    },
    {
      id: 4,
      src: "https://gscdn.hackers.co.kr/frontend/history/common/2023/03/68694a6125f6ace081f3d354946aeb96.jpg",
      alt: "51회 한국사능력검정시험 기본 기출문제",
      url: "https://www.youtube.com/embed/3SXcMm2GvkQ",
    },
    {
      id: 5,
      src: "https://gscdn.hackers.co.kr/frontend/history/common/2023/03/94f7031ed295d7c6bbdbb2d261cdecf1.jpg",
      alt: "노베이스를 위한 시대흐름잡기 6",
      url: "https://www.youtube.com/embed/QJAj3hTL5Ys",
    },
  ];

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
      <div className={styles.videoTop05List}>
        <ul className="fl">
          {videoData?.map((video: any, index: number) => (
            <li key={video.id}>
              <button
                type="button"
                onClick={() => {
                  toggleMovie();
                  handleMovieUrl(video.url);
                }}
              >
                <Image
                  src={video.src}
                  alt={video.alt}
                  width="520"
                  height="293"
                  key={index}
                />
                <p className={styles.videoNotice}>{video.alt}</p>
              </button>
            </li>
          ))}
        </ul>
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
