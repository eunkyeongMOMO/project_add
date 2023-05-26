import React, { useState } from "react";
import styles from "@src/scss/Main.module.scss";
import Image from "next/image";
import Link from "next/link";

function EventCommunity() {
  return (
    <div className={`${styles.eventCommunity}`}>
      <div className={`${styles.inner} flexRow sb`}>
        <div className={`${styles.eventArea}`}>
          <h2 className={`${styles.title}`}>해커스한국사 이벤트/커뮤니티</h2>
          <div className={`flexRow sb`}>
            <button type="button">
              <Image src="https://gscdn.hackers.co.kr/frontend/files/banner/imglib_files/banner/imglib/320x451_01.jpg" alt="" width="320" height="450" />
            </button>
            <button type="button">
              <Image src="https://history.hackers.com/files/history/files/banner/c3da4be5ac8eb6afca09f46bbf554ac0.jpg" alt="" width="320" height="450" />
            </button>
          </div>
        </div>
        <div className={`${styles.communityArea}`}>
          <div className="flexRow sb">
            <h2 className={`${styles.title}`}>고객센터</h2>
            <div className={`${styles.side}`}>
              <Link href="" className={`${styles.btnMoreIcon}`}>
                더보기
              </Link>
            </div>
          </div>
          <div className={`${styles.center}`} id="mainCs">
            <div className={`${styles.titleWrap}`}>
              <div className={`${styles.side}`}>
                <Link href="" className={`${styles.btnMoreIcon}`}>
                  더보기
                </Link>
              </div>
            </div>

            <div className={`${styles.csBox}`}>
              <div className={`${styles.tell}`}>
                <strong>02-537-5000</strong>
              </div>
              <ul className={`${styles.info}`}>
                <li>
                  <span>평일</span>
                  <p>09:00~21:00</p>
                </li>
                <li>
                  <span>토요일</span>
                  <p>09:00~18:00</p>
                </li>
                <li>
                  <span>일요일/공휴일</span>
                  <p>게시판 상담만 가능 (09~18)</p>
                </li>
                <li>
                  <span>이메일</span>
                  <p>jobhelp@hackers.com</p>
                </li>
              </ul>
            </div>

            <div className={`${styles.couponBox}`}>
              <div className={`${styles.couponTitle} ${styles.jsHoverWrap}`}>
                <label htmlFor="couponInput">쿠폰&amp;수강권 등록</label>
                <button className={`${styles.btnQuestionIcon} ${styles.jsHoverBtn}`}>
                  <span>쿠폰&amp;수강권 등록 유의사항</span>
                </button>
              </div>
              <div className={styles.couponInput}>
                <input type="text" id="couponInput" />
                <button type="submit">등 록</button>
              </div>
              <ul className={`${styles.csList}`}>
                <li><Link href="/?r=history&amp;c=cs/sub/faq">자주 묻는 질문</Link></li>
                <li><Link href="https://member.hackers.com/login?service_id=3340&amp;return_url=https%3A%2F%2Fhistory.hackers.com%2F">실시간 1:1 빠른 상담</Link></li>
                <li><Link href="#">원격지원 서비스</Link></li>
                <li><Link href="/?r=history&amp;c=cs/support/study_program">프로그램 설치</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCommunity;
