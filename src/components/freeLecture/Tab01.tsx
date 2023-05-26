import React, { useState } from "react";
import styles from "@src/scss/FreeLecture.module.scss";
import Link from "next/link";

export type PropsType = {
  state: number;
};

export default function Tab01(props: PropsType) {
  const [currentTab, setCurrentTab] = useState(props.state);
  const selectMenuHandler = (index: any) => {
    setCurrentTab(index);
  };

  const tabData = [
    {
      idx: 0,
      tabBtn: "한국사 무료 강의",
      tabUrl: "/freeLecture",
    },
    {
      idx: 1,
      tabBtn: "데일리 한국사 퀴즈",
      tabUrl: "",
    },
    {
      idx: 2,
      tabBtn: "FUN 한국사",
      tabUrl: "",
    },
    {
      idx: 3,
      tabBtn: "자가진단테스트",
      tabUrl: "",
    },
    {
      idx: 4,
      tabBtn: "기출문제 다운로드",
      tabUrl: "/freeLecture/download",
    },
    {
      idx: 5,
      tabBtn: "한국사 기출 선지퀴즈",
      tabUrl: "",
    },
    {
      idx: 6,
      tabBtn: "한국사 전생 유형 테스트",
      tabUrl: "",
    },
    {
      idx: 7,
      tabBtn: "취업 무료 콘텐츠",
      tabUrl: "",
    },
    {
      idx: 8,
      tabBtn: "노트패드 다운로드",
      tabUrl: "",
    },
  ];
  return (
    <div className={`tabWrap ${styles.tab01}`}>
      <ul>
        {tabData.map((tab: any, index: number) => (
          <li key={tab.idx}>
            <Link
              href={tab.tabUrl}
              className={currentTab === index ? `${styles.on}` : ""}
              onClick={() => selectMenuHandler(index)}
            >
              {tab.tabBtn}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
