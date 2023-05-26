import teacherData from "@src/components/teacher/TeacherList.json";
import MoviePlayer from "@src/components/players/MoviePlayer";

type TeacherProps = {
  teacherListIdx: any;
};
export default function TeacherBestLect({ teacherListIdx }: TeacherProps) {
  return (
    <MoviePlayer
      autoPlay={true}
      url={teacherData[teacherListIdx].teacherDetailVideo}
    />
  );
}
