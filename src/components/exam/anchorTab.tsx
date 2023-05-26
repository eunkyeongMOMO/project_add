import React, { useEffect, useRef, useState } from 'react';
import styles from "@components/exam/Exam.module.scss";

const AnchorTab = () => {
  const stickyRef = useRef<HTMLDivElement>(null);
  //useRef(0)으로 하면 number속성이 돼서 DOM 설정이 힘듦
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const stickyWrap = stickyRef.current;
    if(stickyWrap){//참 or 거짓
      const handleScroll = () => {
        const stickyPos = stickyWrap.offsetTop; //현재 요소의 외부 테두리 거리
        const nowPos = window.pageYOffset;

        if(nowPos >= stickyPos) {
          stickyWrap.classList.add('scrollFixed');
        } else {
          stickyWrap.classList.remove('scrollFixed');
        }
      };

      window.addEventListener('scroll', handleScroll);

      const handleLinkClick = (e: MouseEvent) => {
        e.preventDefault();
        const target = e.target as HTMLElement;
        if (target.tagName === 'A'){ // ? 소문자 a로 하니까 안먹넹
          const moveObj = target.getAttribute('href');
          const movPos = (document.querySelector(moveObj!) as HTMLElement).offsetTop - stickyWrap.offsetHeight;
          window.scrollTo({
            top: movPos,
            behavior: 'smooth'
          });

          const tabItems = stickyWrap.querySelectorAll('a');
          tabItems.forEach((tab, index) => {
            if(tab === target){
              setActiveTab(index);
            }
          });
        }
      };

      stickyWrap.addEventListener('click', handleLinkClick);

      return() => {
        window.removeEventListener('scroll', handleScroll);
        stickyWrap.removeEventListener('click', handleLinkClick);
      };
    }
  }, []);

  return (
    <div className={`${styles.stickyWrap} ${styles.scrollFixed}`} ref={stickyRef}>
      <ul className={styles.tabWrap}>
        <li className={activeTab === 0 ? styles.on : ''}><a href="#intro">시험 소개</a></li>
        <li className={activeTab === 1 ? styles.on : ''}><a href="#schedule">시험 일정</a></li>
        <li className={activeTab === 2 ? styles.on : ''}><a href="#tips">시험 꿀TIP!</a></li>
        <li className={activeTab === 3 ? styles.on : ''}><a href="#qna">자주 묻는 질문</a></li>
      </ul>
    </div>
  );
};

export default AnchorTab;