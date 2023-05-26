import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "@src/scss/Header.module.scss";

function Header() {
  return (
    <header>
      <div className={styles.headerIn}>
        <div className={styles.hdTop}>
          <ul className={styles.topLink}>
            <li className="on">
              <Link href="/" target="_blank">
                한국사
              </Link>
            </li>
            <li>
              <Link href="https://pass.hackers.com" target="_blank">
                자격증
              </Link>
            </li>
            <li>
              <Link href="https://ejob.hackers.com" target="_blank">
                취업인강
              </Link>
            </li>
            <li>
              <Link href="https://job.hackers.com" target="_blank">
                취업학원
              </Link>
            </li>
            <li>
              <Link href="https://public.hackers.com" target="_blank">
                공기업
              </Link>
            </li>
            <li>
              <Link href="https://champ.hackers.com" target="_blank">
                해커스인강
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.btnBookmark}>
                해커스한국사를 즐겨찾기로 +
              </Link>
            </li>
          </ul>

          <ul className={styles.topSvc}>
            <li>
              <button type="button">로그아웃</button>
            </li>
            <li>
              <Link href="https://myclass.hackers.com/myinfo?service_id=3340">
                나의정보
              </Link>
            </li>
            <li>
              <Link href="/cs">고객센터</Link>
            </li>
            <li>
              <Link href="/cs">해커스에 바란다</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={`${styles.headerBox}`}>
        <div className={`${styles.smartBanner}`}></div>
        <h1>
          <Link href={"/"}>
            <Image
              src="https://gscdn.hackers.co.kr/history/img/common/logo.png"
              alt="해커스 한국사"
              width="165"
              height="25"
              priority
            />
          </Link>
        </h1>
      </div>
      <div className={`${styles.gnb}`}>
        <ul>
          <li>
            <Link href="/lecture">수강신청</Link>
          </li>
          <li>
            <Link href="/teacher">스타강사</Link>
            <ul className={`${styles.subMenu}`}>
              <li>
                <Link href="/teacher/detail/1">김승범 선생님</Link>
              </li>
              <li>
                <Link href="/">안지영 선생님</Link>
              </li>
              <li>
                <Link href="/">이명호 선생님</Link>
              </li>
              <li>
                <Link href="/">연미정 선생님</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/exam">한능검정보</Link>
            <ul className={`${styles.subMenu}`}>
              <li>
                <Link href="/">시험소개</Link>
              </li>
              <li>
                <Link href="/">시험일정</Link>
              </li>
              <li>
                <Link href="/">시험꿀팁</Link>
              </li>
              <li>
                <Link href="/">자주묻는질문</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/freeLecture">무료컨텐츠</Link>
            <ul className={`${styles.subMenu}`}>
              <li>
                <Link href="/freeLecture">한국사 무료 강의</Link>
              </li>
              <li>
                <Link href="/freeLecture/download">기출문제 다운로드</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/book">교재/자료</Link>
            <ul className={`${styles.subMenu}`}>
              <li>
                <Link href="/">교재 자료 다운로드</Link>
              </li>
              <li>
                <Link href="/">추록/정오표</Link>
              </li>
              <li>
                <Link href="/">교재 구매</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/review">합격/수강후기</Link>
            <ul className={`${styles.subMenu}`}>
              <li>
                <Link href="/">합격후기</Link>
              </li>
              <li>
                <Link href="/">수강후기</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/event">이벤트</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
