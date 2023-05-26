import { gql } from "graphql-tag";

export type Banner = {
  uid: string;
  category1: string;
  category2: string;
  title: string;
  description: string;
  imgUrl: string;
  imgAlt: string;
  target: string;
  linkUrl: string;
  linkTitle: string;
  regDate: string;
};

export type Banners = {
  GET_BANNERS: Banner[];
};

/**
 * category1 : 'main', category2?: 'big'
 * category1 : 'lecture', category2?: 'top'
 * category1 : 'teacher', category2?: 'top'
 * category1 : 'free_lecture', category2?: 'top'
 */
export const GET_BANNERS = gql`
  query getBanners($category1: String!, $category2: String) {
    GET_BANNERS(category1: $category1, category2: $category2) {
      _id
      category1
      category2
      title
      description
      imgUrl
      imgAlt
      target
      linkUrl
      linkTitle
    }
  }
`;
export default GET_BANNERS;
