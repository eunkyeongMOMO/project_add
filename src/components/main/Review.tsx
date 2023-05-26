import React, { useState } from "react";
import styles from "@src/scss/Main.module.scss";
import Link from "next/link";
import MoviePlayer from "@src/components/players/MoviePlayer";

function Review() {
  return (
    <div className={`${styles.reviewWrap}`}>
      <div className={`${styles.innerBox} flexRow sb`}>
        {/* 롤링 */}
        <div className={`${styles.reviewList}`}>
          <h2 className={`${styles.titleType}`}>
            쏟아지는
            <br />
            해커스한국사<span className={`${styles.highlight}`}>합격후기!</span>
          </h2>
          <div className={`${styles.side}`}>
            <Link href="/?r=history&amp;c=exam/review" className={`${styles.btnMoreIcon}`}>
              더보기
            </Link>
          </div>

          <div className={`${styles.txtRoll} after`}>
            <ul>
              <li>
                <Link href="/?r=history&amp;c=exam/review&amp;uid=3204463">
                  <p className={`${styles.txt} ${styles.txtOver} pr15`}>51회 한능검 10일만에 100점 1급 합격!!</p>
                </Link>
              </li>
              <li>
                <Link href="/?r=history&amp;c=exam/review&amp;uid=3204432">
                  <p className={`${styles.txt} ${styles.txtOver} pr15`}>51회 91점으로 1급 합격했습니다</p>
                </Link>
              </li>
              <li>
                <Link href="/?r=history&amp;c=exam/review&amp;uid=3204432">
                  <p className={`${styles.txt} ${styles.txtOver} pr15`}>51회 91점으로 1급 합격했습니다</p>
                </Link>
              </li>
              <li>
                <Link href="/?r=history&amp;c=exam/review&amp;uid=3204432">
                  <p className={`${styles.txt} ${styles.txtOver} pr15`}>51회 91점으로 1급 합격했습니다</p>
                </Link>
              </li>
              <li>
                <Link href="/?r=history&amp;c=exam/review&amp;uid=3204432">
                  <p className={`${styles.txt} ${styles.txtOver} pr15`}>51회 91점으로 1급 합격했습니다</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* 영상 */}
        <MoviePlayer
          url={"https://cdndown.hackers.com/hackers/mp4/public/sample/16181_1.mp4"}
          light="https://i.ytimg.com/vi/ip4bRNnmWMg/hqdefault.jpg"
          width="667px"
          height="367px"
        />
      </div>
    </div>
  );
}

export default Review;
