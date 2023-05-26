import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import styles from "@src/scss/TeacherDetail.module.scss";
import TeacherBestLect from "@src/components/teacher/detail/bestLect";
import TeacherProfile from "@src/components/teacher/detail/profile";
import TeacherMenuTab01 from "@src/components/teacher/detail/menuTab01";
import TeacherMenuTab02 from "@src/components/teacher/detail/menuTab02";
import Image from "next/image";
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
  const teacherListIdx = query.idx - 1;

  const teacherMainImg = teacherData[teacherListIdx].teacherDetailMainImg;

  const menuList = {
    0: <TeacherBestLect teacherListIdx={teacherListIdx} />,
    1: <TeacherProfile teacherListIdx={teacherListIdx} />,
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
              <button type="button">강의 수강신청</button>
            </li>
            <li>
              <button type="button">선생님 소개</button>
            </li>
            <li>
              <button type="button">대표강의 맛보기</button>
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

      <TeacherIntroduce teacherListIdx={teacherListIdx} />
    </>
  );
}

export default Index;
