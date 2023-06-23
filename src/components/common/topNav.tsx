import { NAV } from "@src/assets/ts/Utils";
import Link from "next/link";

export default function TopNavi() {
  return (
    <>
      <ol className="sub-navi">
        <li>
          <Link href={NAV.nav1st[1]}>{NAV.nav1st[0]}</Link>
        </li>
        <li>
          <Link href={NAV.nav2nd[1]}>{NAV.nav2nd[0]}</Link>
        </li>
        <li>
          <Link href={NAV.nav3rd[1]}>{NAV.nav3rd[0]}</Link>
        </li>
      </ol>
      <div className="title-wrap">
      <h2 className="title-type">{NAV.subTitle}</h2>
      </div>
    </>
  );
}
