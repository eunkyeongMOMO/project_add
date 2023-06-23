import { gql } from "graphql-tag";

export type Counsel = {
    idx: number;
    memberIdx: number;
    memberId: string;
    memberName: string;
    memberTel: string;
    memberEmail: string;
    serviceName: string;
    counselType: string;
    title: string;
    content: string;
    answerStatus: string;
    answerContent: string;
    answerDatetime: string;
    regDatetime: string;
  };

export type CounselSearchInputType = {
    memberIdx: number;
    serviceCode: string;
    answerStatusCode: string;
}

export const GET_COUNSELS = gql`
query getCounsels($params: CounselSearchInputType!, $page: Float!) {
  GET_COUNSELS(params: $params, page: $page) {
    totalCnt
    totalPage
    pageBlock
    data {
      idx
      memberIdx
      memberId
      memberName
      memberTel
      memberEmail
      serviceName
      counselType
      title
      content
      answerStatus
      answerContent
      answerDatetime
      regDatetime
    }
  }
}
`;

export type CounselInputType = {
  memberIdx: number;
  memberId: string;
  memberName: string;
  memberTel: string;
  memberEmail: string;
  serviceCode: string;
  counselCode: string;
  title: string;
  content: string;
}
export const CREATE_COUNSEL = gql`
mutation CreateCounsel($params: CounselInputType!) {
  createCounsel(input: $params) {
    idx
  }
}
`;


export type CounselUpdateInputType = {
  serviceCode: string;
  counselCode: string;
  title: string;
  content: string;
}
export const UPDATE_COUNSEL = gql`
mutation UpdateCounsel($idx: Float!, $params: CounselInputType!) {
  updateCounsel(idx: $idx, input: $params) {
    idx
  }
}
`;

export const DELETE_COUNSEL = gql`
mutation DeleteCounsel($idx: Float!) {
  deleteCounsel(idx: $idx) {
    idx
  }
}
`;

export default GET_COUNSELS;
