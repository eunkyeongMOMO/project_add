import { gql } from "graphql-tag";

export type Faq = {
  idx: number,
  subject: string,
  content: string,
  isUse: boolean,
  regDate: string,
};

export type Faqs = {
  GET_FAQ_LIST: Faq[];
};

export const GET_FAQ_LIST = gql`
  query {
    GET_FAQ_LIST {
      idx
      subject
      content
      isUse
      regDate
    }
  }
`;
export default GET_FAQ_LIST;
