import styles from "@src/scss/TeacherDetail.module.scss";
import teacherData from "@src/components/teacher/TeacherList.json";

type TeacherProps = {
  teacherListIdx: any;
};
export default function TeacherProfile({ teacherListIdx }: TeacherProps) {
  return (
    <pre className={styles.teacherProfile}>
      {teacherData[teacherListIdx].teacherDetailProfile}
    </pre>
  );
}
