import { useQuery } from "react-query";
import { graphqlFetcher, QueryKeys } from "@src/assets/ts/queryClient";
import { GET_TEACHERS, Teachers, Teacher } from "@src/graphql/teacher";

import styles from "@src/scss/Teacher.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function TeacherList() {
  const { data, isLoading, error } = useQuery<
    any | Teachers | unknown | undefined
  >(QueryKeys.TEACHERS, () => graphqlFetcher(GET_TEACHERS));

  return (
    <div className={styles.teacherList}>
      {data?.GET_TEACHERS[0]?.categoryIdx === 1 && (
        <h3>{data.GET_TEACHERS[0].categoryName}</h3>
      )}

      {data?.GET_TEACHERS[0]?.categoryIdx === 1 && (
        <ul className={styles.teacherListArea}>
          {data.GET_TEACHERS[0].teacher?.map((teacher: any, index: number) => (
            <li key={index}>
              <p className={styles.lectureType}>
                <strong>{teacher.title}</strong>
                <span>{teacher.subTitle}</span>
              </p>
              <p className={styles.teacherName}>
                <span>{teacher.teacherName}</span>
                선생님
              </p>
              <p className={styles.teacherInfo}>{teacher.teacherInfo}</p>
              <div className={styles.teacherLink}>
                <Link href={`/teacher/detail/${index + 1}`}>상세보기</Link>
                <Link
                  href="https://history.hackers.com/?r=history&c=lecture/detail&productIdx=6290"
                  target="_blank"
                >
                  대표강의
                </Link>
              </div>
              <div className={styles.imgwrap}>
                <Image
                  src={`https:${teacher.teacherImages}`}
                  alt={teacher.teacherName}
                  width="204"
                  height="294"
                />
              </div>
            </li>
          ))}
        </ul>
      )}

      {data?.GET_TEACHERS[1]?.categoryIdx === 2 && (
        <h3>{data.GET_TEACHERS[1].categoryName}</h3>
      )}

      {data?.GET_TEACHERS[1]?.categoryIdx === 2 && (
        <ul className={styles.teacherListArea}>
          {data.GET_TEACHERS[1].teacher?.map((teacher: any, index: number) => (
            <li key={index}>
              <p className={styles.lectureType}>
                <strong>{teacher.title}</strong>
                <span>{teacher.subTitle}</span>
              </p>
              <p className={styles.teacherName}>
                <span>{teacher.teacherName}</span>
                선생님
              </p>
              <p className={styles.teacherInfo}>{teacher.teacherInfo}</p>
              <div className={styles.teacherLink}>
                <Link href={`/teacher/detail/${index + 1}`}>상세보기</Link>
                <Link
                  href="https://history.hackers.com/?r=history&c=lecture/detail&productIdx=6290"
                  target="_blank"
                >
                  대표강의
                </Link>
              </div>
              <div className={styles.imgwrap}>
                <Image
                  src={`https:${teacher.teacherImages}`}
                  alt={teacher.teacherName}
                  width="204"
                  height="294"
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
