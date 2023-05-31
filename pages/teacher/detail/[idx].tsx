import { useQuery } from "react-query";
import { graphqlFetcher, QueryKeys } from "@src/assets/ts/queryClient";
import { GET_TEACHERS, Teachers } from "@src/graphql/teacher";

import React, { useEffect, useState, useRef } from "react";
import { GetServerSideProps } from "next";
import styles from "@src/scss/TeacherDetail.module.scss";
import TeacherBestLect from "@src/components/teacher/detail/bestLect";
import TeacherProfile from "@src/components/teacher/detail/profile";
import TeacherMenuTab01 from "@src/components/teacher/detail/menuTab01";
import TeacherMenuTab02 from "@src/components/teacher/detail/menuTab02";
import Image from "next/image";
import Link from "next/link";
import teacherData from "@src/components/teacher/TeacherList.json";
import TeacherIntroduce from "@src/components/teacher/detail/introduce";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  return {
    props: {
      query,
    },
  };
};

function Index({ query }: any) {
  const { data, isLoading, error } = useQuery<
    any | Teachers | unknown | undefined
  >(QueryKeys.TEACHERS, () => graphqlFetcher(GET_TEACHERS));

  const teacherListIdx = query.idx - 1;

  const teacherMainImg = teacherData[teacherListIdx].teacherDetailMainImg;

  const menuList = {
    0: <TeacherBestLect teacherListIdx={teacherListIdx} />, // 대표강의 보기
    1: <TeacherProfile teacherListIdx={teacherListIdx} />, // 선생님 프로필
  } as any;
  const [tabIndex, setTabIndex] = useState(0);

  const tabChange = (i: number) => {
    setTabIndex(i);
  };

  const [tabToggle, setTabToggle] = useState(false);
  const fnTabToggle = () => {
    setTabToggle((tabToggle) => !tabToggle);
  };

  const teacherMenuTab = {
    0: <TeacherMenuTab01 />,
    1: <TeacherMenuTab02 />,
  } as any;
  const [teacherMenuIndex, setTeacherMenuIndex] = useState(0);
  const teacherMenuChange = (i: number) => {
    setTeacherMenuIndex(i);
  };

  const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  const [ScrollActive, setScrollActive] = useState(false);
  const handleScroll = () => {
    if (ScrollY > 870) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  };
  useEffect(() => {}, [ScrollY]);

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });

  const scrollToRef = useRef<HTMLDivElement>(null);
  const moveToClick = () => {
    scrollToRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={`${styles.teacherDetailInner} ${styles.teacherDetailWrap}`}
        style={{
          background: `url('${teacherMainImg}') no-repeat bottom right`,
        }}
      >
        <div className={styles.teacherInfoArea}>
          <p className={styles.detailSubTitle}>
            {teacherData[teacherListIdx].teacherDetailSubText}
          </p>
          <p className={styles.teacherTitle}>
            {teacherData[teacherListIdx].teacherDetailText}
            <br />
            <span className={styles.teacherclass}>
              {teacherData[teacherListIdx].lectureType}
            </span>
            <span>{teacherData[teacherListIdx].teacherName} 선생님</span>
          </p>
        </div>

        <div className={styles.teacherInfoTab}>
          <ul className={styles.teacherTab}>
            <li>
              <button
                type="button"
                onClick={() => tabChange(0)}
                className={`${tabIndex === 0 ? styles.on : ""}`}
              >
                대표강의 보기
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => tabChange(1)}
                className={`${tabIndex === 1 ? styles.on : ""}`}
              >
                선생님 프로필
              </button>
            </li>
          </ul>

          <div className={`${styles.tabcon} ${styles.on}`}>
            {menuList[tabIndex]}
          </div>
        </div>

        <div className={styles.teacherBoardArea}>
          <div className={styles.teacherBoarBox}>
            <h3 className={styles.boardTitle}>BEST 강의</h3>
            <ul>
              <li>
                <Link
                  href="https://history.hackers.com/?r=history&c=lecture/detail&productIdx=6290"
                  target="_blank"
                >
                  해커스 한국사능력검정시험 2주 합격 심화 (개정 6판)
                </Link>
              </li>
              <li>
                <Link
                  href="https://history.hackers.com/?r=history&c=lecture/detail&productIdx=4063"
                  target="_blank"
                >
                  [5일 완성] 김승범의 빠르게 합격하는 한국사 심화 (1·2·3급) -
                  3판
                </Link>
              </li>
              <li>
                <Link
                  href="https://history.hackers.com/?r=history&c=lecture/detail&productIdx=6251"
                  target="_blank"
                >
                  [교재포함] 2023년 한국사능력검정 심화 2주합격 풀패스 (미사용)
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.teacherBoarBox}>
            <h3 className={styles.boardTitle}>
              주요 이벤트 소식
              <Link
                className={styles.moreIcon}
                href="https://history.hackers.com/?r=history&c=cs/benefit/events"
                target="_blank"
              ></Link>
            </h3>
            <ul>
              <li>
                <Link
                  href="https://history.hackers.com/?r=history&c=event&evt_id=20080300"
                  target="_blank"
                >
                  1위 해커스한국사 | 한능검 2주단기합격 최신인강 6종 0원!
                </Link>
              </li>
              <li>
                <Link
                  href="https://history.hackers.com/?r=history&c=event&evt_id=20080302"
                  target="_blank"
                >
                  1위 해커스한국사 | 65회 한능검 정답채점&라이브해설 풀서비스
                  3판
                </Link>
              </li>
              <li>
                <Link
                  href="https://history.hackers.com/?r=history&c=event&evt_id=20102900"
                  target="_blank"
                >
                  1위 해커스한국사 | 기출풀이+자동채점+합격예측 모의고사 0원!
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`${styles.teacherNav} ${ScrollActive ? styles.fixed : ""}`}
      >
        <div
          className={`${styles.teacherDetailInner} ${styles.teacherNavInner}`}
        >
          <div className={styles.navLeftArea}>
            <button type="button" onClick={() => fnTabToggle()}>
              열기
            </button>
            <Image
              src={String(teacherData[teacherListIdx].teacherDetailMiniImg)}
              className={styles.teacherSmallImg}
              width="42"
              height="42"
              alt={`${teacherData[teacherListIdx].teacherName} 선생님`}
            />
            <span className={styles.teacherName}>
              {teacherData[teacherListIdx].teacherName} 선생님
            </span>
          </div>

          <ul className={styles.navRightArea}>
            <li>
              <button type="button" onClick={moveToClick}>
                강의 수강신청
              </button>
            </li>
            <li>
              <button type="button" onClick={moveToClick}>
                선생님 소개
              </button>
            </li>
            <li>
              <button type="button" onClick={moveToClick}>
                대표강의 맛보기
              </button>
            </li>
          </ul>
        </div>
        <div className={`${styles.navTab} ${tabToggle ? styles.on : ""}`}>
          <div className={styles.teacherDetailInner}>
            <ul className={`${styles.navTabBtn}`}>
              <li>
                <button
                  type="button"
                  onClick={() => teacherMenuChange(0)}
                  className={`${teacherMenuIndex === 0 ? styles.on : ""}`}
                >
                  한능검
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => teacherMenuChange(1)}
                  className={`${teacherMenuIndex === 1 ? styles.on : ""}`}
                >
                  공무원 한국사
                </button>
              </li>
            </ul>

            <div className={`${styles.tabcon} ${styles.on}`}>
              {teacherMenuTab[teacherMenuIndex]}
            </div>
          </div>
        </div>
      </div>

      <TeacherIntroduce
        teacherListIdx={teacherListIdx}
        scrollProps01={scrollToRef}
        scrollProps02={scrollToRef}
        scrollProps03={scrollToRef}
      />
    </>
  );
}

export default Index;
