import React from "react";
import styles from "@src/scss/Book.module.scss";
import BookDownload from "@src/components/book/download";
import BookLayout from "@src/components/book/layout";

function download() {
  return (
    <div className={styles.inner}>
      <BookLayout state={0}/>
      <BookDownload />
    </div>
  );
}

export default download;
