import styles from "@src/scss/TeacherDetail.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function TeacherMenuTab01() {
  return (
    <ul className={styles.teacherMenuTab}>
      <li>
        <Link
          href="https://history.hackers.com/?r=history&c=teacher&front=teacher_detail&tc_id=3978887"
          target="_blank"
        >
          <Image
            src="https://history.hackers.com/files/history/teacher/intro/3978887/137cd6709e885746723c5b92e2081bb1.png"
            className={styles.teacherMenuImg}
            width="42"
            height="42"
            alt="김승범 선생님"
          />
          <p>
            심화(1-3급)
            <br />
            <strong>김승범 선생님</strong>
          </p>
        </Link>
      </li>
      <li>
        <Link
          href="https://history.hackers.com/?r=history&c=teacher&front=teacher_detail&tc_id=3978887"
          target="_blank"
        >
          <Image
            src="https://history.hackers.com/files/history/teacher/intro/3978887/137cd6709e885746723c5b92e2081bb1.png"
            className={styles.teacherMenuImg}
            width="42"
            height="42"
            alt="김승범 선생님"
          />
          <p>
            심화(1-3급)
            <br />
            <strong>김승범 선생님</strong>
          </p>
        </Link>
      </li>
      <li>
        <Link
          href="https://history.hackers.com/?r=history&c=teacher&front=teacher_detail&tc_id=3978887"
          target="_blank"
        >
          <Image
            src="https://history.hackers.com/files/history/teacher/intro/3978887/137cd6709e885746723c5b92e2081bb1.png"
            className={styles.teacherMenuImg}
            width="42"
            height="42"
            alt="김승범 선생님"
          />
          <p>
            심화(1-3급)
            <br />
            <strong>김승범 선생님</strong>
          </p>
        </Link>
      </li>
      <li>
        <Link
          href="https://history.hackers.com/?r=history&c=teacher&front=teacher_detail&tc_id=3978887"
          target="_blank"
        >
          <Image
            src="https://history.hackers.com/files/history/teacher/intro/3978887/137cd6709e885746723c5b92e2081bb1.png"
            className={styles.teacherMenuImg}
            width="42"
            height="42"
            alt="김승범 선생님"
          />
          <p>
            심화(1-3급)
            <br />
            <strong>김승범 선생님</strong>
          </p>
        </Link>
      </li>
    </ul>
  );
}
