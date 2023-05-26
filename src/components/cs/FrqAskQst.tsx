import React, { useState, useEffect } from 'react';
import styles from "@src/scss/Main.module.scss";
import csStyle from "@src/scss/Cs.module.scss";
import Link from "next/link";

const FrqAskQst = () => {
    let [currentLink, setCurrentLink] = useState<number>(0);
    const fnaList = [

        {
            num: '1',
            title: '해커스한국사 PC 다운로드 수강 방법 안..',
        },
        {
            num: '2',
            title: 'PC 다운로드 서비스 교환 및 환불이 가..',
        },
        {
            num: '3',
            title: '강의 신청전 미리 수강해 볼 수 있나요?..',
        },
        {
            num: '4',
            title: '맥OS 이용자 필독 사항 (강의재생/다운..',
        },
        {
            num: '5',
            title: 'Aqua 플레이어 재생 끊김 및 음성/영..',
        },
        {
            num: '6',
            title: '강의를 신청하려고 합니다. 교재는 따로 ..',
        },
        {
            num: '7',
            title: 'PC 및 모바일 기기에서 이용 가능한 기..',
        },
        {
            num: '8',
            title: '맥어드레스를 초기화하고 싶어요',
        },
        {
            num: '9',
            title: '통합회원 관련 자주묻는 질문!',
        },
        {
            num: '10',
            title: '',
        },
    ]
    const SubTabList = [
        {
            tabIdx: 1,
            tabTiile: '강의 결제 문의',
            tabUrl: '',
        },
        {
            tabIdx: 2,
            tabTiile: '자료 다운로드 문의',
            tabUrl: '',
        },
        {
            tabIdx: 3,
            tabTiile: '교재 문의',
            tabUrl: '',
        },
        {
            tabIdx: 4,
            tabTiile: '환불/환급문의',
            tabUrl: '',
        },
        {
            tabIdx: 5,
            tabTiile: '동영상/사이트 오류',
            tabUrl: '',
        },
        {
            tabIdx: 6,
            tabTiile: '휴강/수강연장/재수강문의',
        },
        {
            tabIdx: 7,
            tabTiile: '학습방법',
            tabUrl: '',
        },
        {
            tabIdx: 8,
            tabTiile: 'PC다운로드 수강',
            tabUrl: '',
        },
        {
            tabIdx: 9,
            tabTiile: '회원정보',
            tabUrl: '',
        },
    ]
    return (
        <section className={`${csStyle.fnaWrap}`}>
            <div className={`${csStyle.subTitle}`}>
                <h3>자주묻는질문</h3>
                <p>회원 분들의 빠른 문제 해결을 위해 자주 묻는 질문들을 모았습니다.</p>
            </div>
            <div className={`${csStyle.bestList}`}>
                <h4>자주 묻는 질문 <b>BEST 10</b></h4>
                <ul>
                    {
                        fnaList.map((fna, i) => {
                            return (
                                <li key={i}>
                                    <em className={`${csStyle.fnaNum}`} >{fna.num}</em>
                                    <Link href="/">{fna.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <ul className={`${csStyle.subTab}`}>
                {
                    SubTabList.map((tab) => {
                        return (
                            <li key={tab.tabIdx}>
                                <Link className={`${currentLink === tab.tabIdx ? csStyle.on : ''}`} href="" onClick={() => { setCurrentLink(tab.tabIdx) }}>{tab.tabTiile}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <QuestionList></QuestionList>
        </section>
    )
}

const QuestionList = () => {
    return (

        <div className={`${csStyle.PostListWrap}`}>
            <table>
                <thead>
                    <tr>
                        <th>번 호</th>
                        <th>구 분</th>
                        <th>제 목</th>
                        <th>작성자</th>
                        <th>날짜</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>

    )
}

export default FrqAskQst;