import { useQuery } from "react-query"
import { graphqlFetcher, QueryKeys  } from "@src/assets/ts/queryClient";
import { GET_TEACHER, Teachers } from '@src/graphql/teacher';

import styles from "@src/scss/Teacher.module.scss";
import Link from "next/link";
import Image from "next/image";
import teacherData from "./TeacherList.json";

export default function TeacherList() {
  const { data, isLoading, error } = useQuery<Teachers | unknown | undefined>(QueryKeys.TEACHERS, () => graphqlFetcher(GET_TEACHER))
  console.log(data)
  console.log(GET_TEACHER)
  console.log(graphqlFetcher)

  return (
    <div className={styles.teacherList}>
      <h3>심화(1-3급)</h3>

      <ul className={styles.teacherListArea}>
        {teacherData
          .filter((teacher) => teacher.type == "심화(1-3급)")
          ?.map((teacher, index: number) => (
            <li key={index}>
              <p className={styles.lectureType}>
                <strong>{teacher.lectureType}</strong>
                <span>{teacher.lectureDetail}</span>
              </p>
              <p className={styles.teacherName}>
                <span>{teacher.teacherName}</span>
                선생님
              </p>
              <p className={styles.teacherInfo}>{teacher.teacherDetail}</p>
              <div className={styles.teacherLink}>
                <Link href={`/teacher/detail/${teacher.idx}`}>
                  상세보기
                </Link>
                <Link href={teacher.linkBest} target="_blank">
                  대표강의
                </Link>
              </div>
              <div className={styles.imgwrap}>
                <Image
                  src={teacher.teacherImg}
                  alt={teacher.teacherName}
                  width="204"
                  height="294"
                />
              </div>
            </li>
          ))}
      </ul>

      <h3>공무원 한국사</h3>

      <ul className={styles.teacherListArea}>
        {teacherData
          .filter((teacher) => teacher.type == "공무원 한국사")
          ?.map((teacher, index: number) => (
            <li key={index}>
              <p className={styles.lectureType}>
                <strong>{teacher.lectureType}</strong>
                <span>{teacher.lectureDetail}</span>
              </p>
              <p className={styles.teacherName}>
                <span>{teacher.teacherName}</span>
                선생님
              </p>
              <p className={styles.teacherInfo}>{teacher.teacherDetail}</p>
              <div className={styles.teacherLink}>
                <Link href={teacher.linkDeatil} target="_blank">
                  상세보기
                </Link>
                <Link href={teacher.linkBest} target="_blank">
                  대표강의
                </Link>
              </div>
              <div className={styles.imgwrap}>
                <Image
                  src={teacher.teacherImg}
                  alt={teacher.teacherName}
                  width="204"
                  height="294"
                />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
