import { QueryKeys, graphqlFetcher } from "@src/assets/ts/queryClient";
import styles from "@src/scss/FreeLecture.module.scss";
import Layout from "@src/components/freeLecture/layout";
import GET_BANNERS, { Banners } from "@src/graphql/banner";
import { useQuery } from "react-query";
import BoardView from "@src/components/freeLecture/boardView";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context;
    return {
        props: {
            query,
        },
    };
};

export type QueryType = {
    no?: number;
    type?: any;
    number?: number;
    title: string;
    name?: string;
    day: any;
    views: number;
    url?: any;
};

export default function BoardList({ query }: any) {
    const { data, isLoading, error } = useQuery<Banners | unknown | undefined>(
        QueryKeys.BANNERS,
        () => graphqlFetcher(GET_BANNERS, { category1: "free_lecture" })
    );
    const [detailPost, setDetailPost] = useState<any | QueryType>({});
    const router = useRouter();

    useEffect(() => {
        const post: any = router.query.boardData;
        const detailPostInfo: any = JSON.parse(post);
        setDetailPost(detailPostInfo);
    }, [router.query.boardData]);
    console.log(detailPost);

    return (
        <div className={`${styles.inner}`}>
            <Layout name="기출문제 다운로드" state={4} />
            <BoardView
                title={detailPost.title}
                name={detailPost.name}
                day={detailPost.day}
                views={detailPost.views}
            />
        </div>
    );
}
