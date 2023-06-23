import styles from "@src/scss/BookDownload.module.scss";
import Image from "next/image";

export default function BookDownload() {
  return (
    <div className={styles.bookDownloadArea}>
      <div className={styles.searchArea}>
        <input type="text" placeholder="교재명 검색" />
        <button type="button">조회</button>
      </div>

      <ul className={styles.bookListWrap}>
        <li>
          <div className={`${styles.boxArea} ${styles.imgBox}`}>
            <Image
              src="https://gscdn.hackers.co.kr/hackers/files/bookmanager/4bbbcf014b866e6bf0398cafa5a41101.jpg"
              alt="2023 해커스 한국사능력검정시험 2주 합격 기본(4·5·6급) 2판"
              width={150}
              height={212}
            />
          </div>
          <div className={`${styles.boxArea} ${styles.txtBox}`}>
            <p>
              2023 해커스 한국사능력검정시험 2주 합격 기본(4·5·6급) 2판
              <em className={styles.tagName}>New</em>
            </p>
          </div>
          <div className={`${styles.boxArea} ${styles.fileNameBox}`}>
            <p>하루 한 장, 셀프 쪽지 시험(PDF)</p>
            <p>폰 안에 쏙! 혼동포인트 30 (PDF)</p>
          </div>
          <div className={`${styles.boxArea} ${styles.btnBox}`}>
            <button type="button" className={styles.btnDownload}>
              파일다운로드
              <i className={styles.iconDownload}></i>
            </button>
            <button type="button" className={styles.btnDownload}>
              파일다운로드
              <i className={styles.iconDownload}></i>
            </button>
          </div>
        </li>
        <li>
          <div className={`${styles.boxArea} ${styles.imgBox}`}>
            <Image
              src="https://gscdn.hackers.co.kr/hackers/files/bookmanager/4bbbcf014b866e6bf0398cafa5a41101.jpg"
              alt="2023 해커스 한국사능력검정시험 2주 합격 기본(4·5·6급) 2판"
              width={150}
              height={212}
            />
          </div>
          <div className={`${styles.boxArea} ${styles.txtBox}`}>
            <p>
              2023 해커스 한국사능력검정시험 2주 합격 기본(4·5·6급) 2판
              <em className={styles.tagName}>Best</em>
            </p>
          </div>
          <div className={`${styles.boxArea} ${styles.fileNameBox}`}>
            <p>하루 한 장, 셀프 쪽지 시험(PDF)</p>
            <p>폰 안에 쏙! 혼동포인트 30 (PDF)</p>
          </div>
          <div className={`${styles.boxArea} ${styles.btnBox}`}>
            <button type="button" className={styles.btnDownload}>
              파일다운로드
              <i className={styles.iconDownload}></i>
            </button>
            <button type="button" className={styles.btnDownload}>
              파일다운로드
              <i className={styles.iconDownload}></i>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
