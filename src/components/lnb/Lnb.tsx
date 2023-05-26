import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from '@src/scss/Lnb.module.scss';
import { throttle } from "throttle-debounce";

function Lnb() {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollTopOffset, setScrollTopOffset] = useState(0);
  const [fixed, setFixed] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  }

  const scrollToBtm = () => {
    window.scrollTo({
      top:document.documentElement.scrollHeight - window.innerHeight,
      behavior: 'smooth'
    })
  }

  const scrollFixed = () => {
    setFixed(!fixed)
  }

  useEffect(() => {
    // 스크롤할때마다 실행
    const updateScroll = () => {
      setScrollTop(window.scrollY);
    };

    const handleScroll = throttle(100, updateScroll);

    window.addEventListener("scroll", handleScroll);

    if (scrollTop >= window.screenTop + 300) {
      // 스크롤 130px만큼 내렸을때 설정
      setScrollTopOffset(4);
    } else {
      setScrollTopOffset(29.5);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTop]);
  
  return (
    <div className={`${styles.quickMenu}`} style={{ top: `${scrollTopOffset}vw`, position : fixed ? 'fixed' : 'absolute' }}>
      <div className={`${styles.quickTit}`}>QUICK MENU</div>
      <ul className={`${styles.quickList}`}>
        <li>
          <Link href={`/?r=history&c=free_lecture`} target="_blank">
            무료강의/자료
          </Link>
        </li>
        <li>
          <Link href={`https://history.hackers.com/?r=history&c=exam/test/intro`} target="_blank">
            시험정보
          </Link>
        </li>
        <li>
          <Link href={`https://history.hackers.com/?r=history&c=exam/review`} target="_blank">
            합격후기
          </Link>
        </li>
        <li>
          <Link href={`https://history.hackers.com/#main_cs`} target="_blank">
            쿠폰/수강등록
          </Link>
        </li>
        <li>
          <Link href={`https://history.hackers.com/?r=history&c=cs/benefit/affiliation`} target="_blank">
            제휴 할인업체
          </Link>
        </li>
        <li>
          <Link href={`/?r=history&c=cs/front=support/hope`} target="_blank">
            해커스에 바란다
          </Link>
        </li>
        <li>
          <button type="button" onClick={scrollToTop}>
            TOP
          </button>
        </li>
        <li>
          <button type="button" onClick={scrollToBtm}>
            DOWN
          </button>
        </li>
        <li>
          <button type="button" onClick={scrollFixed}>
            LOCK
          </button>
        </li>
      </ul>

      <ul className={`quick-banner-list`}>
        <li>
          <Link href={`https://history.hackers.com/?r=history&c=event&evt_id=20080300`} target="_blank">
            <Image src={`https://history.hackers.com/files/history/files/banner/be445a16275a52aa36ba6432a97181d2.jpg`} width={124} height={120} alt={``} />
          </Link>
        </li>
        <li>
          <Link href={`https://history.hackers.com/?r=history&c=teacher&front=teacher_detail&tc_id=3978887&tci_id=82`} target="_blank">
            <Image src={`https://history.hackers.com/files/history/files/banner/e5efaf457392e45faaae2df9bb68b04a.jpg`} width={124} height={120} alt={``} />
          </Link>
        </li>
        <li>
          <Link href={`https://history.hackers.com/?r=history&c=event&evt_id=20102900`} target="_blank">
            <Image src={`https://history.hackers.com/files/history/files/banner/9f22d84a69786bcd09416cc5d7a24d31.jpg`} width={124} height={120} alt={``} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Lnb;
