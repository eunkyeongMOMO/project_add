import { graphql, rest } from "msw";
import GET_LECTURES from "../graphql/lecture";
import GET_MENU from "../graphql/menu";

const mockLectures = Array.from({ length: 5 }).map((_, i) => ({
  idx: Math.floor(Math.random() * 1000),
  icon: {
    isBest: true,
    isNew: true,
    isEvent: true,
    isNote: true,
  },
  title: `임시강의 ${i + 1} 번째 타이틀`,
  description: `★임시강의 ${i + 1} 번째 설명문구★`,
  description2: `▶임시강의 ${i + 1} 번째 설명문구2◀`,
  period: 100,
  totalNum: 54,
  useMobile: true,
  usePc: true,
  sampleLecture:
    "https://class.hackers.com/HLec/intro.php?ServiceID=3340&productIdx=6290&lec_idx=2014&ls_idx=51033",
  bookUrl:
    "https://gscdn.hackers.co.kr/hackers/files/bookmanager/ae95361e446bab42f3102edd2433b36b.jpg",
  price: 214900,
  sellingPrice: 128800,
  couponPrice: 128800,
  eventPrice: 128800,
  point: 445,
}));

const mockCate = Array.from({ length: 4 }).map((_, i) => ({
  cateIdx: i + 1,
  cateImg:
    "https://history.hackers.com/files/history/teacher/intro/0003978887//1625186319_a3c031f87b06f96f0af210c46e6e3a2d.png",
  cateTitle: `임시강의 ${i + 1}그룹 카테고리 타이틀`,
  cateSubTitle: `임시강의 ${i + 1}그룹 카테고리 서브타이틀`,
  cateDescription: `임시강의 ${i + 1}그룹 카테고리 설명문구1`,
  cateDescription1: `임시강의 ${i + 1}그룹 카테고리 설명문구2`,
  cateDescription2: `임시강의 ${i + 1}그룹 카테고리 설명문구3`,
  items: mockLectures,
}));

const mockMenu = {
  GNB: [
    {
      name: "수강신청",
      link: "/lecture",
      sub: [
        {
          name: "2주합격 풀패스반",
          link: "https://history.hackers.com/?r=history&c=event&evt_id=22120600",
          sub: null,
        },
        { name: "단과강의", link: "/lecture", sub: null },
      ],
    },
    {
      name: "스타강사",
      link: "/teacher",
      sub: [
        { name: "김승범 선생님", link: "/teacher/detail/1", sub: null },
        { name: "이명호 선생님", link: "/teacher/detail/2", sub: null },
        { name: "연미정 선생님", link: "/teacher/detail/3", sub: null },
      ],
    },
    {
      name: "한능검정보",
      link: "/exam",
      sub: [
        { name: "시험소개", link: "/exam", sub: null },
        { name: "시험일정", link: "/exam#content02", sub: null },
        { name: "시험꿀팁", link: "/exam#content03", sub: null },
        { name: "자주묻는질문", link: "/exam#content04", sub: null },
      ],
    },
    {
      name: "무료컨텐츠",
      link: "/freeLecture",
      sub: [
        { name: "한국사 무료강의", link: "/freeLecture", sub: null },
        { name: "기출문제 다운로드", link: "/freeLecture/download", sub: null },
      ],
    },
    {
      name: "교재/자료",
      link: "/book/download",
      sub: [
        { name: "교재자료 다운로드", link: "/book/download", sub: null },
        { name: "추록/정오표", link: "/book/knowledge", sub: null },
        { name: "교재구매", link: "/book/purchase", sub: null },
      ],
    },
    {
      name: "합격/수강후기",
      link: "/review/pass",
      sub: [
        { name: "합격후기", link: "/review/pass", sub: null },
        { name: "수강후기", link: "/review/lecture", sub: null },
      ],
    },
    { name: "이벤트", link: "/event", sub: null },
  ],
};

//핸들러 정의
export const handlers = [
  //강의리스트
  graphql.query(GET_LECTURES as any, (req, res, ctx) => {
    return res(
      ctx.data({
        total: 20,
        lectures: mockCate,
      })
    );
  }),
  //메뉴
  graphql.query(GET_MENU as any, (req, res, ctx) => {
    return res(ctx.data(mockMenu));
  }),
];
