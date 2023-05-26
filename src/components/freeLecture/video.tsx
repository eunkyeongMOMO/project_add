import styles from "@src/scss/FreeLecture.module.scss";
import FreeViedoTop05 from "@src/components/freeLecture/viedoTop05";
import FreeVideoList from "@src/components/freeLecture/videoList";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function FreeVideo() {
  const [videoType, setVidoType] = useState("전체");
  const selectVideo = (e: any) => {
    setVidoType(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <div className={styles.cont02}>
        <h3 className={styles.contTitle}>
          무료강의 TOP 5
          <span>실시간 가장 HOP한 해커스 한국사 무료 강의를 제공합니다.</span>
        </h3>
        <FreeViedoTop05 />
      </div>
      <div className={styles.cont03}>
        <div className={styles.contTitleWrap}>
          <h3 className={styles.contTitle}>
            과목별 무료강의
            <span>과목별 한국사 무료 강의를 제공합니다.</span>
          </h3>
        </div>
        <div className={styles.videoSelect}>
          <select name="videList" onChange={selectVideo}>
            <option value="전체">전체</option>
            <option value="심화">심화(1-3급)</option>
            <option value="기본">기본(4-6급)</option>
          </select>
        </div>
        <div>
          {videoType === "전체" || videoType === "심화" ? (
            <FreeVideoList
              topic="심화(1-3급)"
              title="심화(1-3급)"
              subTitle01="심화 기출"
              subTitle02="해설 강의"
            />
          ) : null}
        </div>
        <div>
          {videoType === "전체" || videoType === "기본" ? (
            <FreeVideoList
              topic="기본(4-6급)"
              title="기본(4-6급)"
              subTitle01="기본 기출"
              subTitle02="해설 강의"
            />
          ) : null}
        </div>

        <FreeVideoList
          topic="공통"
          subTitle01="공통 강의"
          subTitle02="시대 흐름 잡기"
        />

        <Link
          href="https://www.youtube.com/channel/UCVeKJzXoDRBdmcUoe8i09PA?sub_confirmation=1"
          target="blank"
        >
          <Image
            className={`${styles.bottomBnr}`}
            src="https://gscdn.hackers.co.kr/history/img/free_lecture/banner_220801_pc.jpg"
            alt="배너"
            width="1050"
            height="150"
          />
        </Link>
      </div>
    </>
  );
}
