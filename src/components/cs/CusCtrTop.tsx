import React, { useState, useEffect } from 'react';
import styles from "@src/scss/Main.module.scss";
import csStyle from "@src/scss/Cs.module.scss";
import Link from "next/link";

// const data = [
//     {
//         title: 'cs',
//         titleKr: '고객센터',
//         children: [
//             '자주묻는질문',
//             '1:1 문의하기',
//             '영상 문제해결'
//         ]    
//     },
//     {
//         title: 'notice',
//         titleKr: '고객지원',
//         children: [
//             '공지사항',
//             '해커스한국사에 바란다',
//             '학습프로그램 다운로드'
//         ]    
//     },
//     {
//         title: 'event',
//         titleKr: '수강생혜택',
//         children: [
//             '진행중인 이벤트',
//             '제휴 할인업체',
//         ]    
//     },
//     {
//         title: 'service',
//         titleKr: '사이트이용안내',
//         children: [
//             'PC 다운로드 수강 서비스',
//             '쿠폰/포인트 이용안내',
//             '콘텐츠불법사용금지안내',
//         ]    
//     },
// ]
function CusCtrTop({}) {
    const [currentTab, setCurrentTab] = useState<string>('cs');
    const [currentLink, setCurrentLink] = useState<number>(0);
    const cTab = (tab: string) => {
        setCurrentTab(tab);
    }
    const cLink = (link: number) => {
        setCurrentLink(link);
    }
 
   
    return (

        <div className={`${csStyle.csTopWrap}`}>
            <ol className={`${csStyle.topNavi}`}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/cs">고객센터</Link></li>
                {/* {
                    listName === 0 ? <li><Link href={csTabList[listName].menuUrl}>{csTabList[listName].menuName}</Link></li> : ''
                } */}
            </ol>
            <h2 className={`${styles.title}`}>고객센터</h2>
            <div className={`${csStyle.quickConsult}`}>
                <dl>
                    <dt className={`${csStyle.qTitle}`}>빠른 상담 안내</dt>
                    <dd>1:1 게시판에 문의내역을 남겨주시면, 빠르게 답변을 받아 보실 수 있습니다.</dd>
                </dl>
                <Link className={`${csStyle.qBtn}`} href="">1:1 빠른상담 바로가기 &#62;</Link>
            </div>
            <ul className={`${csStyle.tabWrap}`}>
                <li>
                    <Link className={`${csStyle.tabTitle} ${currentTab === 'cs' ? csStyle.on : ''}`} href="/cs" onClick={() => { cLink(0); cTab('cs') }}>고객센터</Link>
                    <ul>
                        <li><Link href="/cs" className={`${currentLink === 0 ? csStyle.on : ''}`} onClick={() => {
                            cLink(0)
                            cTab('cs')
                        }}>자주묻는질문</Link></li>
                        <li><Link href="/cs/inquiry/write/" className={`${currentLink === 1 ? csStyle.on : ''}`} onClick={() => {
                            cLink(1)
                            cTab('cs')
                        }}>1:1 문의하기</Link></li>
                        <li><Link href="" className={`${currentLink === 2 ? csStyle.on : ''}`} onClick={() => {
                            cLink(2)
                            cTab('cs')
                        }}>영상 문제해결</Link></li>
                    </ul>
                </li>
                <li>
                    <Link className={`${csStyle.tabTitle}  ${currentTab === 'notice' ? csStyle.on : ''}`} href="" onClick={() => { cLink(3); cTab('notice') }}>고객지원</Link>
                    <ul>
                        <li><Link href="/cs/notice/notice" className={`${currentLink === 3 ? csStyle.on : ''}`} onClick={() => {
                            cLink(3)
                            cTab('notice')
                        }}>공지사항</Link></li>
                        <li><Link href="" className={`${currentLink === 4 ? csStyle.on : ''}`} onClick={() => {
                            cLink(4)
                            cTab('notice')
                        }}>해커스한국사에 바란다</Link></li>
                        <li><Link href="" className={`${currentLink === 5 ? csStyle.on : ''}`} onClick={() => {
                            cLink(5)
                            cTab('notice')
                        }}>학습프로그램 다운로드</Link></li>
                    </ul>
                </li>
                <li>
                    <Link className={`${csStyle.tabTitle}  ${currentTab === 'event' ? csStyle.on : ''}`} href="" onClick={() => { cLink(6); cTab('event') }}>수강생혜택</Link>
                    <ul>
                        <li><Link href="" className={`${currentLink === 6 ? csStyle.on : ''}`} onClick={() => {
                            cLink(6)
                            cTab('event')
                        }}>진행중인 이벤트</Link></li>
                        <li><Link href="" className={`${currentLink === 7 ? csStyle.on : ''}`} onClick={() => {
                            cLink(7)
                            cTab('event')
                        }}>제휴할인업체</Link></li>
                    </ul>
                </li>
                <li>
                    <Link className={`${csStyle.tabTitle}  ${currentTab === 'service' ? csStyle.on : ''}`} href="" onClick={() => { cLink(8); cTab('service') }}>사이트이용안내</Link>
                    <ul>
                        <li><Link href="" className={`${currentLink === 8 ? csStyle.on : ''}`} onClick={() => {
                            cLink(8)
                            cTab('service')
                        }}>PC 다운로드 수강 서비스</Link></li>
                        <li><Link href="" className={`${currentLink === 9 ? csStyle.on : ''}`} onClick={() => {
                            cLink(9)
                            cTab('service')
                        }}>쿠폰/포인트 이용안내</Link></li>
                        <li><Link href="" className={`${currentLink === 10 ? csStyle.on : ''}`} onClick={() => {
                            cLink(10)
                            cTab('service')
                        }}>콘텐츠불법사용금지안내</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default CusCtrTop;