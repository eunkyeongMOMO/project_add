import type { NextPage } from 'next'
import styles from '@src/scss/Main.module.scss';
import MainBigBanner from "@src/components/main/bigBanner";
import BestLecture from "@src/components/main/BestLecture";
import Teacher from "@src/components/main/Teacher";
import Lnb from "@src/components/lnb/Lnb";
import Review from "@src/components/main/Review";
import Image from "next/image";
import Event from "@src/components/main/Event";
import FreeContents from "@src/components/main/FreeContents";
import EventCommunity from "@src/components/main/EventCommunity";
import Emblem from "@src/components/main/Emblem";

const Home: NextPage = () => {

  return (
    <div className={`${styles.main}`}>
      {/* lnb */}
      <Lnb />

      {/* 메인 빅배너 */}
      <MainBigBanner/>

      {/* 해커스한국사 선생님 */}
      <Teacher />

      {/* 해커스 BEST 추천강의 */}
      <BestLecture />

      {/* 합격후기 */}
      <Review />

      {/* 배너 */}
      <div className="mt_30 mb_30">
        <div className={`${styles.inner}`}>
          <Image src="https://gscdn.hackers.co.kr/frontend/history/files/banner/ca52ac465b7584df9904a9901af35591.jpg" alt="" width="1050" height="109" />
        </div>
      </div>

      {/* 해커스 BEST 이벤트 */}
      <Event />

      {/* 무료 콘텐츠 */}
      <FreeContents />

      {/* 해커스한국사 이벤트/커뮤니티 */}
      <EventCommunity />

      {/* 이미지 배너 */}
      <div className={`${styles.imgBnr}`}>
        <div className={`${styles.inner}`}>
          <Image src="https://todoproject-cdn.teamcode88.com/2023/5/1684118267437_eeee.jpg" alt="" width="1200" height="210" />
        </div>
      </div>

      {/* 엠블럼 */}
      <Emblem />
    </div>
  )
}

export default Home
