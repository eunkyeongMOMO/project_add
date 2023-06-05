import { gql } from "graphql-tag";

export type Teacher = {
  categoryIdx: number;
  categoryName: string;
  teacher: [
    {
      categoryIdx: number;
      teacherIdx: number;
      title: string;
      subTitle: string;
      teacherName: string;
      teacherImages: string;
      teacherInfo?: string;
      movieLink?: string;
    }
  ];
};

export type Teachers = {
  Teachers: Teacher[];
};

export const GET_TEACHERS = gql`
  query {
    GET_TEACHERS {
      categoryIdx
      categoryName
      teacher {
        categoryIdx
        teacherIdx
        title
        subTitle
        teacherName
        teacherImages
        teacherInfo
        movieLink
      }
    }
  }
`;
export default GET_TEACHERS;

/**
  # mutation {
#   createTeacherCategory(input: {
#     categoryIdx: 2
#     categoryName: "공무원 한국사"
#   }){
#     categoryIdx
#   }
# }

query {
  GET_TEACHER{
    categoryIdx
    categoryName
    teacher{
      categoryIdx
      teacherIdx
			title
      teacherName
      teacherImages
      teacherInfo
      movieLink
    }
  }
}

# mutation {
#   createTeacherCategoryList (input :{
#     categoryIdx: 2
#     teacherIdx: 180
#     title: "한국사"
#     subTitle: "만점으로 이끄는 전략적인 강의"
#     teacherName: "이명호"
#     teacherImages: "//gscdn.hackers.co.kr/pass/img/teacher_info/teacher-ysk.png"
#     teacherInfo: "//gscdn.hackers.co.kr/pass/img/teacher_info/teacher-lmh.png"
#     movieLink: ""
#   }),
#   {
#     categoryIdx
#   }
# }

 */
