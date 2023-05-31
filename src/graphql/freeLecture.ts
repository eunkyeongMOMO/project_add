import { gql } from "graphql-tag";

export type FreeLecture = {
  idx: number;
  cateIdx: number;
  videoType: string;
  videoUrl: string;
  thumbUrl: string;
  lectureName: string;
  teacherIdx: number;
  teacherName: string;
  isBest: boolean;
  regDate: string;
};

type FreeLectureList = {
  cateIdx: number;
  cateTitle: string;
  items: [FreeLecture];
};

export type FreeLectureListType = {
  bestFreeLectures: [FreeLecture];
  freeLectures: [FreeLectureList];
};

export type FreeLectures = {
  GET_FREE_LECTURES: FreeLectureListType;
};


export const GET_FREE_LECTURES = gql`
  query {
    GET_FREE_LECTURE_LIST {
      bestFreeLectures {
        idx
        cateIdx
        videoType
        videoUrl
        thumbUrl
        teacherName
        teacherIdx
        lectureName
      }
      freeLectures {
        cateIdx
        cateTitle
        items {
          lectureName
          teacherIdx
        }
      }
    }
  }
`;
export default GET_FREE_LECTURES;
