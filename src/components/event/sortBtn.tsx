import React, { useEffect, useRef, useState } from 'react';
import styles from "@components/event/Event.module.scss";

interface Props {
  index : number;
}

const SortBtn = () => {

  return  (
    <>
      <div className={styles.sortWrap}>
        <button>최신순</button>
        <button>마감임박순</button>
      </div>
    </>
  )
}

export default SortBtn;