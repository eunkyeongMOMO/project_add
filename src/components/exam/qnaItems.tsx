import {useState} from 'react';
import styles from "@components/exam/Exam.module.scss";

interface Props {
  question : string;
  answer : string;
  onClick: () => void;
}

const QnaItem = ({ question, answer, onClick }:Props) => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((isOpen) => !isOpen);
    onClick(); // call the onClick function prop
  };
  
  return (
    <div className={styles.qnaItem}>
      <div className={styles.qnaButton} onClick={ handleToggle }><em className={styles.icoQ}></em><p>{question}</p><span className={isOpen ? styles.icoArrow : styles.icoArrowOn}></span></div>
      <div className={isOpen ? styles.showAnswer : styles.hideAnswer}><em className={styles.icoA}></em><p>{answer}</p></div>
    </div>
  )
}

export default QnaItem