import React, { useState } from "react";
import styles from "@src/scss/Main.module.scss";
import Image from "next/image";

function Event() {
  return (
    <div className={`${styles.inner}`}>
      <h2 className={`${styles.title}`}>해커스 BEST 이벤트</h2>  
      <div className={`flexRow sb`}>  
        <button type="button">
          <Image src="https://todoproject-cdn.teamcode88.com/2023/5/1683866284262_qwqqw.jpg" alt="" width="556" height="340" />
        </button>
        <button type="button">
          <Image src="https://gscdn.hackers.co.kr/frontend/history/files/banner/1327eed6b3597a8ebcb0f4e2a6e8c0df.png" alt="" width="223" height="340" />
        </button>
        <button type="button">
          <Image src="https://gscdn.hackers.co.kr/frontend/history/files/banner/1327eed6b3597a8ebcb0f4e2a6e8c0df.png" alt="" width="223" height="340" />
        </button>
      </div> 
    </div>
  );
}

export default Event;

