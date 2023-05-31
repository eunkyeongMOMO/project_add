import React from 'react';
import styles from "@components/event/Event.module.scss";

interface Props {
  index : number; // number, string, number[], string[], any
}

const SubTitle = ({index}:Props) => {
  const inputText = [
    "한국사",
    "자격증",
    "기타"
  ];
  const num = [9, 13, 34]
  
  return <h3 className={styles.subTitle}>{inputText[index]}<span>({num[index]})</span></h3>
}

export default SubTitle