import React, { useState } from 'react';
import styles from '@src/scss/Main.module.scss';

function Teacher() {
  return (
    <>
      <div className={`${styles.inner}`}>
        <h2 className={`${styles.title} ${styles.highlight}`}>해커스한국사 선생님</h2>
        <ul className={`${styles.teacher}`}>
          <li>
            <button type="button" className={`${styles.ksb}`}></button>
          </li>
          <li>
            <button type="button" className={`${styles.ajy}`}></button>
          </li>
          <li>
            <button type="button" className={`${styles.lmh}`}></button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Teacher;