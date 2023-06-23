import TextCount from "@src/components/jobbb/TextCount";
import BtmBanner from "@src/components/jobbb/BtmBanner";
import styles from "@src/scss/Jobbb.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import RightBanner from "@src/components/jobbb/RightBanner";
import GradeChange from "@src/components/jobbb/GradeChange";
import router from "next/router";
import { GetServerSideProps } from "next";
import LinguisticsChange from "@src/components/jobbb/LinguisticsChange";
import PhotoModify from "@src/components/jobbb/PhotoModify";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  return {
    props: {
      query,
    },
  };
};

function Index({ query }: any) {
  const [menu, setMenu] = useState('');

  useEffect(() => {
    router.push({
      pathname: '/jobbb',
      query: {menu: menu}
    })
  }, [menu])

  return (
    <div className={`${styles.contentWrap}`}>
      <div className={`${styles.header} ${styles.flexRow} ${styles.sb}`}>
        <Link href="/">
          <Image src={"https://image.hackersjob.com/img/sub/top_logo.gif"} alt={"로고"} width="159" height="32" />
        </Link>
        <ul className={`${styles.topMenu} ${styles.flexRow} ${styles.ct}`}>
          <li>
            <button type="button" onClick={() => router.push({pathname: '/jobbb', query: {menu: 'text_count'}})}>
              {query.menu == 'text_count' ? (
                <Image src={"https://job.hackers.com/A_offline/tool/images/top_menu_01_1.gif"} alt={"글자수 세기"} width="79" height="16" />
              ) : (
                <Image src={"https://job.hackers.com/A_offline/tool/images/top_menu_01_0.gif"} alt={"글자수 세기"} width="79" height="16" />
              )}
            </button>
          </li>
          <li>
            <button type="button" onClick={() => router.push({pathname: '/jobbb', query: {menu: 'grade_change'}})}>
              {query.menu == 'grade_change' ? (
                <Image src={"https://job.hackers.com/A_offline/tool/images/top_menu_02_1.gif"} alt={"학점변환"} width="69" height="16" />
              ) : (
                <Image src={"https://job.hackers.com/A_offline/tool/images/top_menu_02_0.gif"} alt={"학점변환"} width="69" height="16" />
              )}
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setMenu('linguistics_change')}>
              {query.menu == 'linguistics_change' ? (
                <Image src={"https://job.hackers.com/A_offline/tool/images/top_menu_03_1.gif"} alt={"어학변환"} width="64" height="16" />
              ) : (
                <Image src={"https://job.hackers.com/A_offline/tool/images/top_menu_03_0.gif"} alt={"어학변환"} width="64" height="16" />
              )}
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setMenu('photo_modify')}>
              {query.menu == "photo_modify" ? (
                <Image src={"https://job.hackers.com/A_offline/tool/images/top_menu_04_1.gif"} alt={"사진수정"} width="66" height="16" />
              ) : (
                <Image src={"https://job.hackers.com/A_offline/tool/images/top_menu_04_0.gif"} alt={"사진수정"} width="66" height="16" />
              )}
            </button>
          </li>
        </ul>
      </div>
      {/* 글자수 세기 */}
      {query.menu == "text_count" && <TextCount />}

      {/* 학점변환 */}
      {query.menu == "grade_change" && <GradeChange />}

      {/* 어학변환 */}
      {query.menu == "linguistics_change" && <LinguisticsChange />}

      {/* 사진수정 */}
      {query.menu == "photo_modify" && <PhotoModify />}
      
      {/* 우측 배너 */}
      <RightBanner />
      
      {/* 하단 배너 */}
      <BtmBanner />
    </div>
  );
}

export default Index;
