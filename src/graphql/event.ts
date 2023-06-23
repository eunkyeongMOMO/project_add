import { gql } from "graphql-tag";

export type EventBannerList = {
  categoryIdx: number,
  eventIdx: number,
  title: string,
  subTitle: string,
  startDate: string,
  endDate: string,
  eventImages: string,
  eventLink: string,
}

export type EventListCategory = {
  categoryIdx: number,
  categoryName: string,
  event: EventBannerList[],
};

export type EventListCategorys = {
  totalCnt: number,
  data: EventListCategory[]
};

export const GET_EVENTLIST = gql`
  query {
    GET_EVENTLIST {
      totalCnt
      data
    }
  }
`;
export default GET_EVENTLIST;
