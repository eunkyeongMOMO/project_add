import {useState} from 'react';
import QnaItem from "@components/exam/qnaItems"
import styles from "@components/exam/Exam.module.scss";

const QnaList = () => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((isOpen) => !isOpen);
  };

  return (
    <div className={styles.faqWrap}>
      <ul>
        <li>
          <QnaItem 
          question="한국사능력검정시험의 유효기간이 궁금해요." 
          answer="국사편찬위원회에서 정한 유효기간은 따로 없습니다. 인증서 유효 기간은 인증서를 요구하는 각 기관에서 별도로 정하기 때문에 각 기관의 기준을 확인하셔야 합니다." 
          onClick={handleToggle} />
        </li>
        <li>
          <QnaItem 
          question="한국사능력검정시험의 시험범위가 궁금해요." 
          answer="한국사능력검정시험의 범위는 선사시대부터 현대까지 전 범위입니다." 
          onClick={handleToggle} />
        </li>
      </ul>
    </div>
    
  )
}

export default QnaList