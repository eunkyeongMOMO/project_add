import BookLayout from "@src/components/book/layout";
import styles from "@src/scss/BuyBooks.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function BuyBooks() {
  const booksData = [
    {
      imgUrl:
        "http://gscdn.hackers.co.kr/hackers/files/bookmanager/3391e75a27619e63ae591afb0bb825c7.jpg",
      subject: "해커스 한국사능력검정시험 2주 합격 심화(1·2·3급)(6판)",
      author: "해커스 한국사 연구소",
      publisher: "챔프스터디",
      date: "2022-12-19",
      summary:
        '스토리로 쉽게 이해하고 마인드맵으로 오래 기억하여 누구나 쉽게 한능검 2주 합격!\n1. 스토리와 마인드맵으로 쉽고 빠르게 합격!\n2. [시대 누적 기출 테스트]로 이미 학습한 시대의 개념까지 까먹지 않고 오래 기억!\n3. "상세한 문제풀이+오답 분석+약점 보완"까지 한 번에 다 되는 만능 첨삭 해설!\n4. 반복 학습 체계를 통해 "빈출 키워드"와 "시대별 핵심 개념"이 저절로 암기!\n5. [실력 점검 기출 모의고사]로 문제풀이 실력을 점검하고 실전 감각을 극대화!\n6. 시험 직전, [빈출주제 TOP5로 끝내는 합격직행노트]로 고득점!\n7. [한눈에 흐름 잡는 한능검 빈출 연표]를 통해 시대별 빈출 흐름을 집중 학습!',
      beforePrice: 22000,
      afterPrice: 19800,
    },
    {
      imgUrl:
        "http://gscdn.hackers.co.kr/hackers/files/bookmanager/3391e75a27619e63ae591afb0bb825c7.jpg",
      subject: "해커스 한국사능력검정시험 2주 합격 심화(1·2·3급)(6판)",
      author: "해커스 한국사 연구소",
      publisher: "챔프스터디",
      date: "2022-12-19",
      summary:
        '스토리로 쉽게 이해하고 마인드맵으로 오래 기억하여 누구나 쉽게 한능검 2주 합격!\n1. 스토리와 마인드맵으로 쉽고 빠르게 합격!\n2. [시대 누적 기출 테스트]로 이미 학습한 시대의 개념까지 까먹지 않고 오래 기억!\n3. "상세한 문제풀이+오답 분석+약점 보완"까지 한 번에 다 되는 만능 첨삭 해설!\n4. 반복 학습 체계를 통해 "빈출 키워드"와 "시대별 핵심 개념"이 저절로 암기!\n5. [실력 점검 기출 모의고사]로 문제풀이 실력을 점검하고 실전 감각을 극대화!\n6. 시험 직전, [빈출주제 TOP5로 끝내는 합격직행노트]로 고득점!\n7. [한눈에 흐름 잡는 한능검 빈출 연표]를 통해 시대별 빈출 흐름을 집중 학습!',
      beforePrice: 22000,
      afterPrice: 19800,
    },
    {
      imgUrl:
        "http://gscdn.hackers.co.kr/hackers/files/bookmanager/3391e75a27619e63ae591afb0bb825c7.jpg",
      subject: "해커스 한국사능력검정시험 2주 합격 심화(1·2·3급)(6판)",
      author: "해커스 한국사 연구소",
      publisher: "챔프스터디",
      date: "2022-12-19",
      summary:
        '스토리로 쉽게 이해하고 마인드맵으로 오래 기억하여 누구나 쉽게 한능검 2주 합격!\n1. 스토리와 마인드맵으로 쉽고 빠르게 합격!\n2. [시대 누적 기출 테스트]로 이미 학습한 시대의 개념까지 까먹지 않고 오래 기억!\n3. "상세한 문제풀이+오답 분석+약점 보완"까지 한 번에 다 되는 만능 첨삭 해설!\n4. 반복 학습 체계를 통해 "빈출 키워드"와 "시대별 핵심 개념"이 저절로 암기!\n5. [실력 점검 기출 모의고사]로 문제풀이 실력을 점검하고 실전 감각을 극대화!\n6. 시험 직전, [빈출주제 TOP5로 끝내는 합격직행노트]로 고득점!\n7. [한눈에 흐름 잡는 한능검 빈출 연표]를 통해 시대별 빈출 흐름을 집중 학습!',
      beforePrice: 22000,
      afterPrice: 19800,
    },
    {
      imgUrl:
        "http://gscdn.hackers.co.kr/hackers/files/bookmanager/3391e75a27619e63ae591afb0bb825c7.jpg",
      subject: "해커스 한국사능력검정시험 2주 합격 심화(1·2·3급)(6판)",
      author: "해커스 한국사 연구소",
      publisher: "챔프스터디",
      date: "2022-12-19",
      summary:
        '스토리로 쉽게 이해하고 마인드맵으로 오래 기억하여 누구나 쉽게 한능검 2주 합격!\n1. 스토리와 마인드맵으로 쉽고 빠르게 합격!\n2. [시대 누적 기출 테스트]로 이미 학습한 시대의 개념까지 까먹지 않고 오래 기억!\n3. "상세한 문제풀이+오답 분석+약점 보완"까지 한 번에 다 되는 만능 첨삭 해설!\n4. 반복 학습 체계를 통해 "빈출 키워드"와 "시대별 핵심 개념"이 저절로 암기!\n5. [실력 점검 기출 모의고사]로 문제풀이 실력을 점검하고 실전 감각을 극대화!\n6. 시험 직전, [빈출주제 TOP5로 끝내는 합격직행노트]로 고득점!\n7. [한눈에 흐름 잡는 한능검 빈출 연표]를 통해 시대별 빈출 흐름을 집중 학습!',
      beforePrice: 22000,
      afterPrice: 19800,
    },
  ];

  return (
    <div className={styles.inner}>
      <BookLayout state={2} />
      <ul className={styles.searchWrap}>
        <li>
          <p className={styles.bookTotal}>
            교재 검색결과 총 <span>{booksData.length}건</span>
          </p>
        </li>
        <li>
          <select>
            <option value="한국사능력검정">한국사능력검정</option>
          </select>
          <select>
            <option value="전체">전체</option>
            <option value="기본 (4-6급)">기본 (4-6급)</option>
            <option value="고급 (1-3급)">고급 (1-3급)</option>
            <option value="심화 (1-3급)">심화 (1-3급)</option>
          </select>
        </li>
      </ul>
      <ul className={styles.bookList}>
        {booksData.map((book: any, index: number) => (
          <li key={index}>
            <Image
              className={`${styles.bookImg}`}
              src={book.imgUrl}
              alt={book.subject}
              width="150"
              height="200"
            />
            <div className={styles.textBox}>
              <p className={styles.title}>{book.subject}</p>
              <p className={styles.info}>
                <span>저자 : {book.author}</span>
                <span>출판사 : {book.publisher}</span>
                <span>출간일 : {book.date}</span>
              </p>
              <p className={styles.summary}>
                스토리로 쉽게 이해하고 마인드맵으로 오래 기억하여 누구나 쉽게
                한능검 2주 합격!
                <br />
                1. 스토리와 마인드맵으로 쉽고 빠르게 합격!
                <br />
                2. [시대 누적 기출 테스트]로 이미 학습한 시대의 개념까지 까먹지
                않고 오래 기억!
                <br />
                {/* 3."상세한 문제풀이+오답 분석+약점 보완"까지 한 번에 다 되는 만능 */}
                첨삭 해설!
                {/* <br /> 4. 반복 학습 체계를 통해 "빈출 키워드"와 "시대별 핵심 */}
                {/* 개념"이 저절로 암기! */}
                <br />
                5. [실력 점검 기출 모의고사]로 문제풀이 실력을 점검하고 실전
                감각을 극대화!
                <br />
                6. 시험 직전, [빈출주제 TOP5로 끝내는 합격직행노트]로 고득점!
                <br />
                7. [한눈에 흐름 잡는 한능검 빈출 연표]를 통해 시대별 빈출 흐름을
                집중 학습!
              </p>
            </div>
            <div className={styles.priceWrap}>
              <p className={styles.beforePrice}>
                {book.beforePrice.toLocaleString()}원
              </p>
              <p className={styles.afterPrice}>
                {book.afterPrice.toLocaleString()}원
              </p>
              <p className={styles.discountPrice}>
                ({(book.beforePrice / (book.beforePrice - book.afterPrice))}
                %할인↓)
              </p>
            </div>
            <div className={styles.btnBox}>
              <button type="button">교재소개 &gt;</button>
              <button type="button">교재구매 &gt;</button>
              <button type="button">장바구니</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
