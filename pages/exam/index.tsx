import React, { useState } from "react";
import styles from "@components/exam/Exam.module.scss";
import Image from "next/image";
import MoviePlayer from "@src/components/players/MoviePlayer";
import Link from "next/link";
import TitleItem from "@components/exam/titleItem"
import SubTitleItem from "@components/exam/subTitleItem"
import QnaList from "@components/exam/qnaList"
import AnchorTab from "@src/components/exam/anchorTab"

function Index() {
  const [tab, setTab] = useState(0);
  const [showMovie, setShowMovie] = useState(false);
  const [movieUrl, setMovieUrl] = useState("");  

  const toggleMovie = () => {
    setShowMovie(!showMovie);
  };

  const handleMovieUrl = (url: string) => {
    setMovieUrl(url);
  };
  return (
    <>
      <div className={styles.content}>
        <div className={styles.inner}>
          {/* 영상 */}
          {showMovie && (
            <div className={styles.moviePopup}>
              <div className={styles.bg} onClick={toggleMovie}></div>
              <div className={styles.inner}>
                <MoviePlayer url={movieUrl} />
              </div>
            </div>
          )}
          <TitleItem index={0}/>{/* 한능검 소개 */}
          <div className={styles.banner}>
            <Image src="https://gscdn.hackers.co.kr/history/img/exam_info/img_exam_info.jpg" alt="" width="1050" height="300" />
          </div>
          
          {/* 탭 */}
          <AnchorTab />

          <button type="button"
            className={`${styles.popUpBtn} mt_30`}
            onClick={() => {
              toggleMovie();
              handleMovieUrl(
                "https://www.youtube.com/embed/HNk-TSPlyvc"
              );
            }}>
            <Image src="https://i.ytimg.com/vi/HNk-TSPlyvc/maxresdefault.jpg" alt="" width="1050" height="591" />
          </button>

          <SubTitleItem index={0}/>{/* 평가등급 */}
          <div className={styles.tableWrap} id="intro">
            <table>
              <thead>
                <tr>
                  <th>시험구분</th>
                  <th>심화</th>
                  <th>기본</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th rowSpan={3}>인증등급</th>
                  <td>1급(80점 이상)</td>
                  <td>4급(80점 이상)</td>
                </tr>
                <tr>
                  <td>2급(70급~79점)</td>
                  <td>5급(70점~79점)</td>
                </tr>
                <tr>
                  <td>3급(60점~69점)</td>
                  <td>6급(60점~69점)</td>
                </tr>
                <tr>
                  <th>문항 수 (객관식)</th>
                  <td>50문항 (5지 택 1)</td>
                  <td>50문항 (4지 택 1)</td>
                </tr>
              </tbody>
            </table>
            <p className={styles.subTxt}>6개 등급 (1급~6급)
            <br/>급수별 합격 점수에 따라 인증 등급이 달라집니다.</p>
          </div>

          <SubTitleItem index={1}/>{/* 자격증 활용도 */}
          <div className={styles.tableWrap}>
            <Image src="https://gscdn.hackers.co.kr/history/img/exam_info/v2/img_exam_use.jpg" alt="" width="1050" height="591" />
          </div>

          <SubTitleItem index={2}/>{/* 응시료 */}
          <div className={styles.tableWrap}>
            <table>
              <colgroup>
                <col width="20%"/>
                <col/>
                <col/>
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">시험종류</th>
                  <th scope="col">심화</th>
                  <th scope="col">기본</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.firstCell}>인증등급</td>
                  <td>1,2,3급</td>
                  <td>4,5,6급</td>
                </tr>
                <tr>
                  <td className={styles.firstCell}>응시료</td>
                  <td>22,000원</td>
                  <td>18,000원</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <SubTitleItem index={3}/>{/* 응시방법 */}
          <div className={styles.banner}>
            <p className={styles.nTxt}>국사편찬위원회 홈페이지에서 회원가입 <span className={styles.green}>▶</span> 원서접수기간에 맞춰 원수 접수 클릭 <span className={styles.green}>▶</span> 기본정보와 시험종류 및 시험장 선택(증명사진 필요) <span className={styles.green}>▶</span> 응시료 결제 <span className={styles.green}>▶ 원서접수 완료</span></p>
            <p className={styles.subTxt}>※ 국사편찬위원회 홈페이지
            <br/>http://www.historyexam.go.kr/main/mainPage.do</p>
          </div>
          <button type="button"
            className={styles.popUpBtn}
            onClick={() => {
              toggleMovie();
              handleMovieUrl(
                "https://www.youtube.com/embed/qqUFeT-Bnew"
              );
            }}>
            <Image src="https://i.ytimg.com/vi/qqUFeT-Bnew/maxresdefault.jpg" alt="" width="1040" height="585" />
          </button>
          
          <SubTitleItem index={4}/><span className={styles.titGreen}>연6회 시행</span>
          {/* 시험 일정 */}
          <div className={styles.tableWrap} id="schedule">
            <table>
                <colgroup>
                  <col width="15%"/>
                  <col width="45%"/>
                  <col width="20%"/>
                  <col />
                </colgroup>
              <thead>
                <tr>
                  <th>구분</th>
                  <th>접수기간</th>
                  <th>시험일정</th>
                  <th>합격자 발표일</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>제 63회</th>
                  <td>2023년 01월 10일(화) 10:00 ~ 2023년 01월 17일(화) 18:00</td>
                  <td className={styles.green}>2023년 02월 11일(토)</td>
                  <td>2023년 02월 24일(금)</td>
                </tr>
                <tr>
                  <th>제 64회</th>
                  <td>2023년 03월 20일(월) 10:00 ~ 2023년 03월 27일(월) 18:00</td>
                  <td className={styles.green}>2023년 04월 15일(토)</td>
                  <td>2023년 04월 28일(금)</td>
                </tr>
                <tr>
                  <th>제 65회</th>
                  <td>2023년 05월 22일(월) 10:00 ~ 2023년 05월 29일(월) 18:00</td>
                  <td className={styles.green}>2023년 06월 17일(토)</td>
                  <td>2023년 06월 30일(금)</td>
                </tr>
                <tr>
                  <th>제 66회</th>
                  <td>2023년 07월 17일(월) 10:00 ~ 2023년 07월 24일(월) 18:00</td>
                  <td className={styles.green}>2023년 08월 13일(일)</td>
                  <td>2023년 08월 25일(금)</td>
                </tr>
                <tr>
                  <th>제 67회</th>
                  <td>2023년 09월 18일(월) 10:00 ~ 2023년 09월 25일(월) 18:00</td>
                  <td className={styles.green}>2023년 10월 21일(토)</td>
                  <td>2023년 11월 03일(금)</td>
                </tr>
                <tr>
                  <th>제 68회</th>
                  <td>2023년 11월 06일(월) 10:00 ~ 2023년 11월 13일(월) 18:00</td>
                  <td className={styles.green}>2023년 12월 02일(토)</td>
                  <td>2023년 12월 15일(금)</td>
                </tr>
              </tbody>
            </table>
            <p className={styles.subTxt}>합격자발표 방법: 응시자가 홈페이지에 직접 접속하여 성적 조회 및 성적 통지서, 인증서 출력(정부24 가능)
            <br/>※ 별도의 성적통지서, 인증서를 발급하지 않음</p>
          </div>

          <SubTitleItem index={5}/>{/* 접수 취소 기간 및 취소시 환불안내 */}
          <div className={styles.tableWrap}>
            <table>
              <colgroup>
                <col width="15%"/>
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>구분</th>
                  <th>접수 취소 기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>제 63회</th>
                  <td>2023년 01월 10일(화) 10:00 ~ 2023년 01월 30일(월) 18:00</td>
                </tr>
                <tr>
                  <th>제 64회</th>
                  <td>2023년 03월 20일(월) 10:00 ~ 2023년 04월 03일(월) 18:00</td>
                </tr>
                <tr>
                  <th>제 65회</th>
                  <td>2023년 05월 22일(월) 10:00 ~ 2023년 06월 05일(월) 18:00</td>
                </tr>
                <tr>
                  <th>제 66회</th>
                  <td>2023년 07월 17일(월) 10:00 ~ 2023년 07월 31일(월) 18:00</td>
                </tr>
                <tr>
                  <th>제 67회</th>
                  <td>2023년 09월 18일(월) 18:00 ~ 2023년 10월 06일(금) 00:00</td>
                </tr>
                <tr>
                  <th>제 68회</th>
                  <td>2023년 11월 06일(월) 10:00 ~ 2023년 11월 20일(월) 18:00</td>
                </tr>
              </tbody>
            </table>
            <p className={styles.subTxt}>* 입금 및 환불은 은행 마감시간 전까지 가능합니다. 은행 마감 시간은 각 은행 별로 다를 수 있습니다.
            <br/>원서접수 취소 기간 내 2주 후부터는 50% 환불만 가능하므로 유의바랍니다. (취소기간 마지막 주 화요일 13:00~ 일요일 18:00)</p>
          </div>
          
          <SubTitleItem index={6}/>{/* 시험 시간 */}
          <div className={styles.tableWrap} id="tips">
            <table>
              <colgroup>
                <col width="25%"/>
                <col width="25%"/>
                <col width="25%"/>
                <col width="25%"/>
              </colgroup>
              <thead>
                <tr>
                  <th>시험종류</th>
                  <th>시험 시간</th>
                  <th>내용</th>
                  <th>소요시간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={4} className={styles.rightBorder}>심화</td>
                  <td>10:00~10:10</td>
                  <td>오리엔테이션(시험시 주의 사항)</td>
                  <td>10분</td>
                </tr>
                <tr>
                  <td>10:00~10:15</td>
                  <td>신분증 확인(감독관)</td>
                  <td>5분</td>
                </tr>
                <tr>
                  <td>10:15~10:20</td>
                  <td>문제지 배부 및 파본 검사</td>
                  <td>5분</td>
                </tr>
                <tr>
                  <td>10:20~11:40</td>
                  <td>시험 실시(50문항)</td>
                  <td>80분</td>
                </tr>
                <tr>
                  <td rowSpan={4} className={styles.rightBorder}>기본</td>
                  <td>10:00~10:10</td>
                  <td>오리엔테이션(시험시 주의 사항)</td>
                  <td>10분</td>
                </tr>
                <tr>
                  <td>10:00~10:15</td>
                  <td>신분증 확인(감독관)</td>
                  <td>5분</td>
                </tr>
                <tr>
                  <td>10:15~10:20</td>
                  <td>문제지 배부 및 파본 검사</td>
                  <td>5분</td>
                </tr>
                <tr>
                  <td>10:20~11:30</td>
                  <td>시험 실시(50문항)</td>
                  <td>70분</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.infoBox}>
            <em>주의</em>&nbsp; 입실 시간: 08:30부터 09:59까지 <span>&nbsp;|&nbsp;</span> 퇴실 시간: 종료 15분 전까지는 퇴실 불가 <span>*코로나 19로 인하여 퇴실 시간 변경가능</span>
          </div>
          
          <SubTitleItem index={7}/>{/* 준비물 */}
          <div className={styles.tableWrap}>
            <p className={styles.nTxt}>수험표, 신분증(초등생 제외), 컴퓨터용 싸인펜, 수정테이프 등.
            <br/>본인 확인을 위해 수험표와 한국사능력검정시험 인정 신분증을 반드시 소지.</p>
          </div>
            <div className={styles.infoBox}>
              <em>주의</em>
              <ul>
                <li>수정테이프 사용에 대한 책임은 응시자에게 있음</li>
                <li>신분증 미지참의 경우 시험응시 불가</li>
                <li>수험표에 본인 얼굴이 아니거나 본인 여부를 정확히 식별할 수 없는 사진을 첨부한 경우에는 시험 응시 불가</li>
              </ul>
            </div>
          <div className={styles.tableWrap}>
            <table>
              <colgroup>
                <col width="25%"/>
                <col/>
              </colgroup>
              <thead>
                <tr>
                  <th>구분</th>
                  <th>신분증</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <th className={styles.rightBorder}>초등학생</th>
                <td className={styles.tl}>수험표</td>
              </tr>
              <tr>
                <th className={styles.rightBorder}>중,고등학생</th>
                <td className={styles.tl}>주민등록증(발급신청확인서), 기간만료 전의 여권, 사진 부착된 (국외)학생증, 청소년증(발급신청확인서), 장애인등록증
                (복지카드), 학교생활기록부(인적사항이 포함된 1면만을 활용하며, 학교장 직인 반드시 포함), 재학증명서(사진, 성명,
                생년월일, 학교장 직인 반드시 포함), 한국사능력검정시험 신분 확인 증명서</td>
              </tr>
              <tr>
                <th className={styles.rightBorder}>일반인<br/>(대학생, 군인 포함)</th>
                <td className={styles.tl}>주민등록증(발급신청확인서), 기간만료 전의 여권, 장애인등록증(복지카드), 공무원증, 한국사능력검정시험 신분 확인
                증명서(군인만 해당), 국가유공자증</td>
              </tr>
              <tr>
                <th className={styles.rightBorder}>재외국민</th>
                <td className={styles.tl}>재외국민 등록증, 기간만료 전의 여권</td>
              </tr>
              <tr>
                <th className={styles.rightBorder}>외국인</th>
                <td className={styles.tl}>외국인 등록증, 기간만료 전의 여권, 국내 거소 신고증</td>
              </tr>
              </tbody>
            </table>
            <p className={styles.subTxt}>* 모든 신분증은 유효기간 내의 것만 인정</p>
          </div>

          <SubTitleItem index={8}/>{/* 자주묻는질문 */}
          <div id="qna">
            <QnaList />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;