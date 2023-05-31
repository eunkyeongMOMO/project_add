import React from 'react';
import styles from "@components/exam/Exam.module.scss";

interface Props {
  index : number; // number, string, number[], string[], any
}

const SubTitleItem = ({index}:Props) => {
  const inputText = [
    "평가등급",
    "자격증 활용도",
    "응시료",
    "응시방법",
    "시험 일정",
    "접수 취소 기간 및 취소시 환불안내",
    "시험 시간",
    "준비물",
    "자주 묻는 질문"
  ];
    
  return <h3 className={styles.subTitle}>{inputText[index]}</h3>
}

export default SubTitleItem