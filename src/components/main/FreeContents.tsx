import React, { useState } from "react";
import styles from "@src/scss/Main.module.scss";
import Image from "next/image";

function FreeContents() {
  return (
    <div className={`${styles.inner}`}>
      <h2 className={`${styles.title}`}>무료 콘텐츠</h2>  
      <div className={`flexRow sb`}>
        <button type="button">
          <Image src="https://gscdn.hackers.co.kr/frontend/history/files/banner/66819e258e1c2b8e64d41a65a4110d5e.png" alt="" width="340" height="225" />
        </button>  
        <button type="button">
          <Image src="https://gscdn.hackers.co.kr/frontend/history/files/banner/545fc2e02c408fbb586fd1c00959105a.png" alt="" width="340" height="225" />
        </button>  
        <button type="button">
          <Image src="https://gscdn.hackers.co.kr/frontend/history/files/banner/1410244866ab3c3647e76e30a5b3e292.png" alt="" width="340" height="225" />
        </button>
      </div> 
    </div>
  );
}

export default FreeContents;

