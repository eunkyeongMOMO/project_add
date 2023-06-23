import { QueryType } from "@pages/freeLecture/download/[id]";
import styles from "@src/scss/FreeLecture.module.scss";
import Link from "next/link";


export default function BoardView(props : QueryType) {
  return (
    <div className={styles.boarViewdArea}>
      <ul>
        <li>
          <p className={styles.title}>
            {props.title}
          </p>
        </li>
        <li className={styles.info}>
          <div>
            <p>작성자 : {props.name}</p>
          </div>
          <div>
            <span>조회수 : {props.views}</span>
            <span>작성일 : {props.day}</span>
          </div>
        </li>
        <li className={styles.fileList}>
          <p>
            <span className={styles.fileIcon}></span>제64회 심화 정답표.pdf
            (35.3KB), &nbsp;2023-04-15&nbsp;16:40:28
          </p>
        </li>
        <li className={styles.view}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex officiis
            dolorum rem! Magnam qui temporibus fugit asperiores debitis animi
            iure?
          </p>
        </li>
      </ul>
      <Link href="/freeLecture/download">
        <button type="button" className={styles.listBtn}>
          목록
        </button>
      </Link>
    </div>
  );
}
