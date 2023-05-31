import React from "react";
import teacherData from "@src/components/teacher/TeacherList.json";
import MoviePlayer from "@src/components/players/MoviePlayer";

type TeacherProps = {
  teacherListIdx: any;
};
function TeacherBestLect({ teacherListIdx }: TeacherProps) {
  return (
    <MoviePlayer
      autoPlay={true}
      url={teacherData[teacherListIdx].teacherDetailVideo}
    />
  );
}

export default React.memo(TeacherBestLect);
