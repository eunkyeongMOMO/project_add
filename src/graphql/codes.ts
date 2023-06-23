import { gql } from "graphql-tag";

export type Codes = {
  idx: number;
  patternName: string;
  code: string;
  value: string;
};

export const GET_CODES = gql`
  query getCodes($patternName: String!) {
    GET_CODES(patternName: $patternName) {
      idx
      patternName
      code
      value
    }
  }
`;

export default GET_CODES;
