import styles from "@src/scss/FreeLecture.module.scss";
import Layout from "@src/components/freeLecture/layout";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Pagination from "@src/components/freeLecture/pagination";



export type boardType = {
  no: number;
  type: string;
  number: number;
  title: string;
  name: string;
  day: any;
  views: number;
  url: any;
};

export default function ProblemExtraction() {
  const boardData = [
    {
      no: 1,
      type: "",
      number: 123,
      title: "[제1회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board1",
    },
    {
      no: 2,
      type: "",
      number: 123,
      title: "[제2회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board2",
    },
    {
      no: 3,
      type: "",
      number: 123,
      title: "[제3회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board3",
    },
    {
      no: 4,
      type: "",
      number: 123,
      title: "[제4회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board4",
    },
    {
      no: 5,
      type: "",
      number: 123,
      title: "[제5회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board5",
    },
    {
      no: 6,
      type: "",
      number: 123,
      title: "[제6회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board6",
    },
    {
      no: 7,
      type: "",
      number: 123,
      title: "[제7회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board7",
    },
    {
      no: 8,
      type: "",
      number: 123,
      title: "[제8회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board8",
    },
    {
      no: 9,
      type: "",
      number: 123,
      title: "[제9회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board9",
    },
    {
      no: 10,
      type: "",
      number: 123,
      title: "[제10회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board10",
    },
    {
      no: 11,
      type: "",
      number: 123,
      title: "[제11회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board11",
    },
    {
      no: 12,
      type: "",
      number: 123,
      title: "[제12회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board12",
    },
    {
      no: 13,
      type: "",
      number: 123,
      title: "[제13회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board13",
    },
    {
      no: 14,
      type: "",
      number: 123,
      title: "[제14회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board14",
    },
    {
      no: 15,
      type: "",
      number: 123,
      title: "[제15회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board15",
    },
    {
      no: 16,
      type: "",
      number: 123,
      title: "[제16회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board16",
    },
    {
      no: 18,
      type: "",
      number: 123,
      title: "[제18회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board17",
    },
    {
      no: 19,
      type: "",
      number: 123,
      title: "[제19회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board17",
    },
    {
      no: 20,
      type: "",
      number: 123,
      title: "[제20회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board17",
    },
    {
      no: 21,
      type: "",
      number: 123,
      title: "[제21회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board17",
    },
    {
      no: 22,
      type: "",
      number: 123,
      title: "[제22회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board17",
    },
    {
      no: 23,
      type: "",
      number: 123,
      title: "[제23회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board17",
    },
    {
      no: 24,
      type: "",
      number: 123,
      title: "[제24회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board17",
    },
    {
      no: 25,
      type: "",
      number: 123,
      title: "[제25회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board17",
    },
    {
      no: 26,
      type: "",
      number: 123,
      title: "[제26회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board17",
    },
    {
      no: 27,
      type: "",
      number: 123,
      title: "[제27회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board17",
    },
    {
      no: 28,
      type: "",
      number: 123,
      title: "[제28회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board17",
    },
    {
      no: 29,
      type: "notice",
      number: 123,
      title: "[제29회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board17",
    },
    {
      no: 30,
      type: "notice",
      number: 123,
      title: "[제30회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board17",
    },
    {
      no: 31,
      type: "notice",
      number: 123,
      title: "[제32회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board17",
    },
    {
      no: 33,
      type: "notice",
      number: 123,
      title: "[제33회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board17",
    },
    {
      no: 34,
      type: "notice",
      number: 123,
      title: "[제34회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board17",
    },
    {
      no: 35,
      type: "notice",
      number: 123,
      title: "[제35회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: 123,
      url: "/freeLecture/download/board17",
    },

  ];

  const [boardOption, setBoardOption] = useState("전체");
  const selectOption = (e: any) => {
    setBoardOption(e.target.value);
    console.log(e.target.value);
  };

  const [boardSearch, setBoardSearch] = useState('');
  const searchBtn = (e:any) => {
    setBoardSearch(e.target.value)
  }

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page * -limit);

  return (
    <div className={`${styles.inner}`}>
      <Layout name="기출문제 다운로드" state={4} />
      <div className={styles.boardSelect}>
        <select name="boardList" onChange={selectOption}>
          <option value="제목">제목</option>
          <option value="내용">내용</option>
          <option value="제목 + 내용">제목 + 내용</option>
        </select>
        <input type="text" />
        <button type="button">검색</button>
      </div>
      <div className={`${styles.boardWrap}`}>
        <table>
          <colgroup>
            <col width="9%" />
            <col />
            <col width="12%" />
            <col width="12%" />
            <col width="9%" />
          </colgroup>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {/* 공지사항 */}
            {boardData
              .slice(0, boardData.length)
              .reverse()
              .map((board: any, index: number) =>
                board.type == "notice" ? (
                  <tr
                    key={board.no}
                    className={board.type == "notice" ? `${styles.notice}` : ""}
                  >
                    <td>
                      <span
                        className={
                          board.type == "notice"
                            ? `${styles.icon} ${styles.speak}`
                            : ""
                        }
                      >
                        {board.no}
                      </span>
                    </td>
                    <td className="t_l">
                      <Link
                        href={{
                          pathname: board.url,
                          query: {
                            boardData: JSON.stringify(board),
                          },
                        }}
                        as={board.url}
                      >
                        {board.title}
                        <span
                          className={`${styles.icon} ${styles.file}`}
                        ></span>
                        <span className={`${styles.icon} ${styles.new}`}></span>
                      </Link>
                    </td>
                    <td> {board.name}</td>
                    <td> {board.day}</td>
                    <td> {board.views}</td>
                  </tr>
                ) : null
              )}

            {/* 게시글 */}
            {boardData
              .slice(offset-limit,offset).reverse()
              .map((board: any, index: number) =>
                board.type == "" ? (
                  <tr
                    className={board.type == "notice" ? `${styles.notice}` : ""}
                    key={board.no}
                  >
                    <td>
                      <span
                        className={
                          board.type == "notice"
                            ? `${styles.icon} ${styles.speak}`
                            : ""
                        }
                      >
                        {board.no}
                      </span>
                    </td>
                    <td className="t_l">
                      <Link
                        href={{
                          pathname: board.url,
                          query: {
                            boardData: JSON.stringify(board),
                          },
                        }}
                        as={board.url}
                      >
                        {board.title}
                        <span
                          className={`${styles.icon} ${styles.file}`}
                        ></span>
                        <span className={`${styles.icon} ${styles.new}`}></span>
                      </Link>
                    </td>
                    <td> {board.name}</td>
                    <td> {board.day}</td>
                    <td> {board.views}</td>
                  </tr>
                ) : null
              )}
          </tbody>
        </table>
      </div>
      <Pagination
        total={boardData.filter((boardData:any)=>boardData.type=="").length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
      <Link href="http://localhost:3000/freeLecture" target="blank">
        <Image
          className={`${styles.bottomBnr}`}
          src="https://gscdn.hackers.co.kr/history/img/banner/banner_220812_3.jpg"
          alt="배너"
          width="1050"
          height="150"
        />
      </Link>
    </div>
  );
}
