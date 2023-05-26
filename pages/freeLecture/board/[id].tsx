import { QueryKeys, graphqlFetcher } from "@src/assets/ts/queryClient";
import GET_BANNERS, { Banners } from "@src/graphql/banner";
import GET_TEACHER, { Teachers } from "@src/graphql/teacher";
import { useQuery } from "react-query";

export default function Ex01() {
  // const { data, isLoading, error } = useQuery<Teachers | unknown | undefined>(
  //   QueryKeys.TEACHERS,
  //   () => graphqlFetcher(GET_TEACHER)
  // );

  // console.log(data.GET_TEACHER[0].categoryName);
  // return <div>{data.GET_TEACHER[0].categoryName}</div>;

  const { data, isLoading, error } = useQuery<Banners | unknown | undefined>(
    QueryKeys.BANNERS,
    () => graphqlFetcher(GET_BANNERS, { category1: "free_lecture" })
  );

  console.log(data);
  return <h1>게시판 내용</h1>;
}
