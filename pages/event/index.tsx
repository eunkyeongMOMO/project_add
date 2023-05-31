import React from 'react';
import styles from "@components/event/Event.module.scss";
import SubTitle from '@src/components/event/subTitle';
import TitleTab from '@src/components/event/titleTab';
import EventItem from '@src/components/event/item';

function index() {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.inner}>
          <h2 className={styles.title}>고객센터</h2>

          <div className={styles.boxWrap}>
            <div className={styles.text}>
              <strong>빠른 상담 안내</strong>
              <p>1:1 게시판에 문의내역을 남겨주시면, 빠르게 답변을 받아보실 수 있습니다.</p>
            </div>
            <a className={styles.btn} href="https://member.hackers.com/login?service_id=3340&amp;return_url=https%3A%2F%2Fhistory.hackers.com%2F%3Fr%3Dhistory%26c%3Dcs%2Fbenefit%2Fevents&amp;_ga=2.100248350.106322033.1685253025-1202261904.1684979115&amp;_gl=1*1c9v5s6*_ga*MTIwMjI2MTkwNC4xNjg0OTc5MTE1*_ga_EPVJH3DR86*MTY4NTI1MzAyNC4xLjEuMTY4NTI1NDM1My4xOC4wLjA.">
              1:1 빠른상담 바로가기 <span>〉</span>
            </a>
          </div>

          <div className={styles.tabWrap}>
            <ul className={styles.dep1}>
              <li>
                <a href="#;">고객센터</a>
                <ul className={styles.dep2}>
                  <li><a href="#;">자주묻는질문</a></li>
                  <li><a href="#;">1:1 문의하기</a></li>
                  <li><a href="#;">영상 문제해결</a></li>
                </ul>
              </li>
              <li>
                <a href="#;">고객지원</a>
                <ul className={styles.dep2}>
                  <li><a href="#;">공지사항</a></li>
                  <li><a href="#;">해커스한국사에 바란다</a></li>
                  <li><a href="#;">학습프로그램 다운로드</a></li>
                </ul>
              </li>
              <li className={styles.on}>
                <a href="#;">수강생혜택</a>
                <ul className={styles.dep2}>
                  <li className={styles.on}><a href="#;">진행중인 이벤트</a></li>
                  <li><a href="#;">제휴할인업체</a></li>
                </ul>
              </li>
              <li>
                <a href="#;">사이트이용안내</a>
                <ul className={styles.dep2}>
                  <li><a href="#;">PC 다운로드 수강 서비스</a></li>
                  <li><a href="#;">쿠폰/포인트 이용안내</a></li>
                  <li><a href="#;">컨텐츠불법사용금지안내</a></li>
                </ul>
              </li>
            </ul>
          </div>

          <h3 className={styles.midTitle}>진행중인 이벤트 <span>해커스 한국사에서 수강생을 위해 준비한 이벤트입니다.</span></h3>
          <p className={styles.totalTitle}>총 <span><em>56</em>건</span>의 이벤트가 있습니다.</p>

          <div className={styles.titleTab}>
            <ul>
              <li className={styles.on}>
                <a href="#history">한국사</a>
              </li>
              <li>
                <a href="#pass">자격증</a>
              </li>
              <li>
                <a href="#etc">기타</a>
              </li>
            </ul>
          </div>

          <div id="history">
            <SubTitle index={0} />{/* 한국사 */}
          </div>

          <div id="pass">
            <SubTitle index={1}/>{/* 자격증 */}
          </div>

          <div id="etc">
            <SubTitle index={2}/>{/* 기타 */}
          </div>

        </div>
      </div>
    </>
  );
}

export default index;