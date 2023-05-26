import React, { useEffect, useState, useRef, useCallback } from "react";
import dynamic from "next/dynamic";

interface PlayerType {
  width?: string; //너비
  height?: string; //높이
  controls?: boolean; //기본 플레이어 컨트롤 표시
  url?: string; //영상url
  autoPlay?: boolean; //자동재생
  pip?: boolean; //모바일에서 pip 모드
  light?: string | boolean; //썸네일 (있을경우 autoPlay 불가)
}

const MoviePlayer = (props: PlayerType) => {
  const ReactPlayer = dynamic(() => import("react-player/lazy"), {
    ssr: false,
  });
  return (
    <ReactPlayer
      playing={props.autoPlay ? true : false}
      url={
        props.url
          ? props.url
          : "https://cdndown.hackers.com/pass/no/mp4/promotion/220907/sms_cc.mp4"
      }
      controls={props.controls == false ? props.controls : true}
      width={props.width ? props.width : "100%"}
      height={props.height ? props.height : "100%"}
      pip={props.pip ? props.pip : true}
      muted={props.autoPlay ? true : false}
      volume={0.7}
      light={props.light ? props.light : false}
    />
  );
};

export default MoviePlayer;
