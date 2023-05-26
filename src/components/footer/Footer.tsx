import React, { useCallback, useRef, useState } from 'react';
import Image from "next/image";
import styles from "@src/scss/Footer.module.scss";
import Link from "next/link";
import { getDomain } from "@src/assets/ts/Utils";

function Footer() {

  return (
    <footer className={`${styles.footer}`}>
      <div className={`inner1050`}>
        <strong><Image src="https://gscdn.hackers.co.kr/history/img/common/footer_logo.png" alt="" width="151" height="22" /></strong>
        <div className={`inner1050 flexRow`}>
          <div className={`${styles.footerLeft}`}>
            <ul>
              <li>
                <Link href="https://history.hackers.com">Home</Link>
              </li>
              <li>
                <Link href="http://www.hackers.com/" target="_blank">
                  해커스소개
                </Link>
              </li>
              <li>
                <Link href="https://member.hackers.com/his_terms?service_id=3340" target="_blank">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="https://member.hackers.com/his_policy?service_id=3340" className="point-color" target="_blank">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href={""}>고객센터</Link>
              </li>
              <li>
                <Link href="/?r=history&amp;c=cs/support/hope" target="_blank">
                  불편사항 신고
                </Link>
              </li>
              <li>
                <Link href="/?r=history&amp;c=cs/support/hope" target="_blank">
                  불편사항 신고
                </Link>
              </li>
              <li className={`${styles.isms}`}>
                <Link href="/">
                  {/* href= "/?c=event&amp;mode=common&amp;ajax=1&amp;page=isms_pop" */}
                  {/* onClick="showLayer(450,680,this); return false;" */}
                  <>
                    <Image src="https://gscdn.hackers.co.kr/champ/img/common/icon_isms.png" alt="" width="24" height="23" />
                    <span className={styles.txt}>인터넷 강의 서비스 운영<br/>2020-06-24~2023-06-23</span>
                  </>
                </Link>
              </li>
            </ul>
            <div className={`${styles.address}`}>
              <strong>(주)챔프스터디</strong> | 사업자등록번호 : 120-87-09984
              <br />
              온라인 고객센터 : 02-537-5000 | 이메일: history@hacker.com / history.Hackers.com | FAX : 02-563-0883<br/>
              서울특별시 서초구 강남대로61길 23(서초동 1316-15) 현대성우빌딩 203호ㅣ 원격평생교육시설신고(제 원-140호)ㅣ호스팅 제공자 : ㈜KT<br/>
              대표이사 : 전재윤ㅣ개인정보관리책임자 : 김병철ㅣ통신판매업신고(제 2008-서울서초-0396호)&nbsp;
              <Link href="#" className={`${styles.link}`}>정보조회</Link>ㅣ부가통신사업신고(신고번호 : 013760)
              {/* onClick="window.open('http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1208709984&amp;apv_perm_no=2008321012130200396', 'companyinfo', 'width=500px,height=550px'); return false;"  */}
            </div>
          </div>
          <div className={`${styles.footerRight}`}>
            <Image src="https://gscdn.hackers.co.kr/champ/images/champstudy/common/toss_logo.png" alt="" width="151" height="22" />
            <button type="button" className={`${styles.btnFooter}`}>서비스 가입확인 </button>{/*  onClick="window.open('https://pgweb.uplus.co.kr/ms/escrow/s_escrowYn.do?mertid=champhistory', 'pginfo', 'width=500px,height=550px'); return false;"  */}
            <div className={`${styles.footerSubTxt}`}>
              고객님은 안전거래를 위해 교재(유료)가<br/>
              포함된 상품을 무통장 입금으로 결제하시는<br/>
              경우, 챔프스터디가 가입한 Toss Payments<br/>
              의 구매안전서비스를 이용하실 수 있습니다.<br/>
              토스페이먼츠 결제대금예치업<br/>
              등록번호 : 02-006-00059
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;