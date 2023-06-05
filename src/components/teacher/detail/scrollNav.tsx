import styles from "@src/scss/TeacherDetail.module.scss";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import teacherData from "@src/components/teacher/TeacherList.json";
import TeacherMenuTab01 from "@src/components/teacher/detail/menuTab01";
import TeacherMenuTab02 from "@src/components/teacher/detail/menuTab02";

const TeacherScrollNav = (props: any) => {
  const [tabToggle, setTabToggle] = useState(false);
  const fnTabToggle = () => {
    setTabToggle((tabToggle) => !tabToggle);
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

  const teacherMenuTab = {
    0: <TeacherMenuTab01 />,
    1: <TeacherMenuTab02 />,
  } as any;
  const [teacherMenuIndex, setTeacherMenuIndex] = useState(0);
  const teacherMenuChange = (i: number) => {
    setTeacherMenuIndex(i);
  };

  return (
    <div className={`${styles.teacherNav} ${ScrollActive ? styles.fixed : ""}`}>
      <div className={`${styles.teacherDetailInner} ${styles.teacherNavInner}`}>
        <div className={styles.navLeftArea}>
          <button type="button" onClick={() => fnTabToggle()}>
            열기
          </button>
          <Image
            src={String(teacherData[0].teacherDetailMiniImg)}
            // src={String(teacherData[0].teacherDetailMiniImg)} -- api 연결 후 수정 필요
            className={styles.teacherSmallImg}
            width="42"
            height="42"
            alt={`${teacherData[0].teacherName} 선생님`}
            // alt={`${teacherData[0].teacherName} 선생님`} -- api 연결 후 수정 필요
          />
          <span className={styles.teacherName}>
            {teacherData[0].teacherName} 선생님
            {/* {teacherData[0].teacherName} 선생님 -- api 연결 후 수정 필요 */}
          </span>
        </div>

        <ul className={styles.navRightArea}>
          <li>
            <button type="button" onClick={() => props.moveToClick(1)}>
              강의 수강신청
            </button>
          </li>
          <li>
            <button type="button" onClick={() => props.moveToClick(2)}>
              선생님 소개
            </button>
          </li>
          <li>
            <button type="button" onClick={() => props.moveToClick(3)}>
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
  );
};

export default TeacherScrollNav;
