import { useQuery } from "react-query";
import { graphqlFetcher, QueryKeys } from "@src/assets/ts/queryClient";
import { GET_LECTURES, Lecture, Lectures } from "@src/graphql/lecture";
import TeacherBanner from "@src/components/teacher/banner";
import LectureCate from "@src/components/lecture/cate";

const LectureList = () => {
  const { data, isLoading, error } = useQuery<any | Lectures | unknown | undefined>(
    QueryKeys.LECTURES,
    () => graphqlFetcher(GET_LECTURES)
  );
  
  return (
    <div className={`inner1050`}>
      <ol className="sub-navi">
        <li>Home</li>
        <li>수강신청</li>
      </ol>
      <div className="title-wrap">
        <h2 className="title-type">수강신청</h2>
      </div>
      <TeacherBanner />
      <div className="lecture-search-result">
        <p className="result-text">
          총 <span className="point-color">{data?.total}개</span>의 강좌가
          검색되었습니다.
        </p>
      </div>
      {data?.lectures.map((lecture: Lecture) => {
        return <LectureCate {...lecture} key={lecture.cateIdx} />;
      })}
    </div>
  );
};

export default LectureList;
