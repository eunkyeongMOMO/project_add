import styles from "@src/scss/Teacher.module.scss";
import { useRouter } from "next/router";

export default function TeacherBreadcrumb(){
  const router = useRouter();
  return(
    <div className={styles.breadcrumb}>
        <button type="button" onClick={() => router.push("/")}>Home</button>
        <span>&gt;</span>
        <button type="button" onClick={() => router.push("/teacher")}>스타강사</button>
    </div>
  )

}