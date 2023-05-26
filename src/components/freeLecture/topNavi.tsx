import styles from "@src/scss/FreeLecture.module.scss";
import Link from "next/link";
export type PropsType = {
  name: string;
};

export default function TopNavi(props: PropsType) {
  return (
    <div className={styles.topNavi}>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/freeLecture"}>무료컨텐츠</Link>
        </li>
        <li>{props.name}</li>
      </ul>
    </div>
  );
}
