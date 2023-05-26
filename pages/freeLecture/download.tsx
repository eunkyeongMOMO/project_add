import styles from "@src/scss/FreeLecture.module.scss";
import Layout from "@src/components/freeLecture/layout";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function ProblemExtraction() {
  const boardData = [
    {
      no: 1,
      type: "",
      number: "123",
      title: "[제1회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: "123",
      url: "/freeLecture/board/1",
    },
    {
      no: 2,
      type: "",
      number: "123",
      title: "[제2회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: "123",
      url: "/freeLecture/board/1",
    },
    {
      no: 3,
      type: "",
      number: "123",
      title: "[제3회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: "123",
      url: "/freeLecture/board/1",
    },
    {
      no: 4,
      type: "",
      number: "123",
      title: "[제4회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: "123",
      url: "/freeLecture/board/1",
    },
    {
      no: 5,
      type: "",
      number: "123",
      title: "[제5회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: "123",
      url: "/freeLecture/board/1",
    },
    {
      no: 6,
      type: "",
      number: "123",
      title: "[제6회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: "123",
      url: "/freeLecture/board/1",
    },
    {
      no: 7,
      type: "",
      number: "123",
      title: "[제7회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: "123",
      url: "/freeLecture/board/1",
    },
    {
      no: 8,
      type: "",
      number: "123",
      title: "[제8회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: "123",
      url: "/freeLecture/board/1",
    },
    {
      no: 9,
      type: "",
      number: "123",
      title: "[제9회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: "123",
      url: "/freeLecture/board/1",
    },
    {
      no: 10,
      type: "",
      number: "123",
      title: "[제10회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: "123",
      url: "/freeLecture/board/1",
    },
    {
      no: 11,
      type: "notice",
      number: "123",
      title: "[제11회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: "123",
      url: "/freeLecture/board/1",
    },
    {
      no: 12,
      type: "notice",
      number: "123",
      title: "[제12회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: "123",
      url: "/freeLecture/board/1",
    },
    {
      no: 13,
      type: "notice",
      number: "123",
      title: "[제13회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: "123",
      url: "/freeLecture/board/1",
    },
    {
      no: 14,
      type: "notice",
      number: "123",
      title: "[제14회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: "123",
      url: "/freeLecture/board/1",
    },
    {
      no: 15,
      type: "notice",
      number: "123",
      title: "[제15회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: "123",
      url: "/freeLecture/board/1",
    },
    {
      no: 16,
      type: "notice",
      number: "123",
      title: "[제16회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: "123",
      url: "/freeLecture/board/1",
    },
    {
      no: 17,
      type: "notice",
      number: "123",
      title: "[제17회] 한국사능력검정시험 심화 정답 및 해설",
      name: "해커스한국사",
      day: "2023-04-15",
      views: "123",
      url: "/freeLecture/board/1",
    },
  ];

  const [boardType, setBoardType] = useState("전체");
  const selectBoard = (e: any) => {
    setBoardType(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className={`${styles.inner}`}>
      <Layout name="기출문제 다운로드" state={4} />
      <div className={styles.boardSelect}>
        <select name="boardList" onChange={selectBoard}>
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
            {boardData.reverse().map((board: any, index: number) =>
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
                    <Link href={board.url}>
                      {board.title}
                      <span className={`${styles.icon} ${styles.file}`}></span>
                      <span className={`${styles.icon} ${styles.new}`}></span>
                    </Link>
                  </td>
                  <td> {board.name}</td>
                  <td> {board.day}</td>
                  <td> {board.views}</td>
                </tr>
              ) : null
            )}

            {boardData.map((board: any, index: number) =>
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
                    <Link href={board.url}>
                      {board.title}
                      <span className={`${styles.icon} ${styles.file}`}></span>
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
      <div className={`${styles.boarPaging}`}>
        <Link href="/">&lt;&lt;</Link>
        <Link href="/">&lt;</Link>
        <Link href="/" className={styles.on}>
          1
        </Link>
        <Link href="/">2</Link>
        <Link href="/">3</Link>
        <Link href="/">4</Link>
        <Link href="/">5</Link>
        <Link href="/">&gt;</Link>
        <Link href="/">&gt;&gt;</Link>
      </div>

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
