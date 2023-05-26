import React from 'react';
import Image from "next/image";
import styles from "@components/review/Review.module.scss";
import Interview from "@src/components/review/Interview";

function index() {
  return (
    <div className={`inner1050`}>
      <ol className={`${styles.subNavi}`}>
        <li>Home</li>
        <li>합격후기</li>
      </ol>
      <div className={styles.teacherTitle}>
        <h2>합격후기</h2>
      </div>
      
      <Image
        src="https://gscdn.hackers.co.kr/pass/img/pass_info/img_tit01.jpg"
        className={styles.teacherSmallImg}
        width="228"
        height="32"
        alt=""
      />

      <Interview />
    </div>
  );
}

export default index;