import { useQuery } from "react-query";
import { graphqlFetcher, QueryKeys } from "@src/assets/ts/queryClient";
import GET_MENU, { Menu, SubMenu } from "@src/graphql/menu";
import Link from "next/link";
import Image from "next/image";
import styles from "@src/scss/Header.module.scss";
import GnbMenu from "./gnbMenu";

function Header() {
  const { data, isLoading, error } = useQuery<any | Menu | unknown | undefined>(
    QueryKeys.MENU,
    () => graphqlFetcher(GET_MENU)
  );
  return (
    <header>
      <div className={styles.headerIn}>
        <div className={styles.hdTop}>
          <ul className={styles.topLink}>
            <li className="on">
              <Link href="/" target="_blank">
                한국사
              </Link>
            </li>
            <li>
              <Link href="https://pass.hackers.com" target="_blank">
                자격증
              </Link>
            </li>
            <li>
              <Link href="https://ejob.hackers.com" target="_blank">
                취업인강
              </Link>
            </li>
            <li>
              <Link href="https://job.hackers.com" target="_blank">
                취업학원
              </Link>
            </li>
            <li>
              <Link href="https://public.hackers.com" target="_blank">
                공기업
              </Link>
            </li>
            <li>
              <Link href="https://champ.hackers.com" target="_blank">
                해커스인강
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.btnBookmark}>
                해커스한국사를 즐겨찾기로 +
              </Link>
            </li>
          </ul>

          <ul className={styles.topSvc}>
            <li>
              <button type="button">로그아웃</button>
            </li>
            <li>
              <Link href="https://myclass.hackers.com/myinfo?service_id=3340">
                나의정보
              </Link>
            </li>
            <li>
              <Link href="/cs">고객센터</Link>
            </li>
            <li>
              <Link href="/cs">해커스에 바란다</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={`${styles.headerBox}`}>
        <div className={`${styles.smartBanner}`}></div>
        <h1>
          <Link href={"/"}>
            <Image
              src="https://gscdn.hackers.co.kr/history/img/common/logo.png"
              alt="해커스 한국사"
              width="165"
              height="25"
              priority
            />
          </Link>
        </h1>
      </div>
      <div className={`${styles.gnb}`}>
        <ul>
          {data?.GNB.map((menuCate1: Menu) => {
            return <GnbMenu {...menuCate1} key={menuCate1.name} />;
          })}
        </ul>
      </div>
    </header>
  );
}

export default Header;
