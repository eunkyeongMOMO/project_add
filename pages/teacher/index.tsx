import React from "react";
import styles from "@src/scss/Teacher.module.scss";
import TeacherBreadcrumb from "@src/components/teacher/breadcrumb";
import TeacherBanner from "@src/components/teacher/banner";
import TeacherList from "@src/components/teacher/list";

function index() {
  return (
    <div className={styles.teacherWrap}>
      <TeacherBreadcrumb />
      <div className={`${styles.teacherTitle}`}>
        <h2>스타강사</h2>
      </div>
      <TeacherBanner />
      <TeacherList />
    </div>
  );
}

export default index;
