import React, { useEffect, useRef, useState } from 'react';
import styles from "@components/event/Event.module.scss";

const TitleTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  useEffect(() => {
    
  })

  return (
    <div className={styles.titleTab}>
      <ul>
        <li className={styles.on}><a href="#history">한국사</a></li>
        <li><a href="#pass">자격증</a></li>
        <li><a href="#etc">기타</a></li>
      </ul>
    </div>
  )
}

export default TitleTab