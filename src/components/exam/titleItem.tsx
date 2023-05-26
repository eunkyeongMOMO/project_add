import React, { useState } from 'react';
import styles from "@components/exam/Exam.module.scss";

interface Props{
  index: number;
}

const TitleItem = ({index}:Props) => {
  const inputText = [
    "한능검 소개",
    "고객센터"
  ];
  
  return <h2 className={styles.title}>{inputText[index]}</h2>
}

export default TitleItem