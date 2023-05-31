import React from "react";
import teacherData from "@src/components/teacher/TeacherList.json";
import styles from "@src/scss/TeacherDetail.module.scss";
import TeacherDetailBanner from "@src/components/teacher/detail/banner";
import MoviePlayer from "@src/components/players/MoviePlayer";

type TeacherProps = {
  teacherListIdx: any;
  scrollProps01: any;
  scrollProps02: any;
  scrollProps03: any;
};
function TeacherIntroduce({
  teacherListIdx,
  scrollProps01,
  scrollProps02,
  scrollProps03,
}: TeacherProps) {
  const teacherBg = teacherData[teacherListIdx].teacherDetailIntroduceBg;
  return (
    <>
      {/* 선생님 단 */}
      <div
        ref={scrollProps02}
        className={`${styles.teacherContent} ${styles.teacherContent01}`}
      >
        <div className={styles.teacherDetailInner}>
          <div className={styles.teacherMiniTitle}>
            <p>{teacherData[teacherListIdx].teacherName} 선생님</p>
            <span>TEACHER</span>
          </div>
          <TeacherDetailBanner slideNum="01" />
        </div>
      </div>

      <div className={`${styles.teacherContent} ${styles.teacherContent02}`}>
        <div className={styles.teacherDetailInner}>
          <div className={styles.teacherMiniTitle}>
            <p>{teacherData[teacherListIdx].teacherName} 선생님</p>
            <span>CLASS</span>
          </div>
          <TeacherDetailBanner slideNum="02" />
        </div>
      </div>

      <div
        ref={scrollProps03}
        className={`${styles.teacherContent} ${styles.teacherContent03}`}
        style={{ background: `#fff url('${teacherBg}') no-repeat top left` }}
      >
        <div className={styles.teacherDetailInner}>
          <div className={styles.teacherMiniTitle}>
            <p>{teacherData[teacherListIdx].teacherName} 선생님</p>
            <span>LECTURE</span>
          </div>
          <MoviePlayer
            url={teacherData[teacherListIdx].teacherDetailIntroduceVideo}
          />
        </div>
      </div>

      <div
        ref={scrollProps01}
        className={`${styles.teacherContent} ${styles.teacherContent04}`}
      >
        <div className={styles.teacherDetailInner}>
          <div className={styles.teacherMiniTitle}>
            <p>{teacherData[teacherListIdx].teacherName} 선생님</p>
            <span>LECTURE</span>
          </div>
          <div className={styles.teacherLectTitle}>
            <p>
              {teacherData[teacherListIdx].teacherName} 선생님의
              <br />
              <strong>강의 리스트</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(TeacherIntroduce);
