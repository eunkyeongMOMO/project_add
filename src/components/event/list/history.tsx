import React, {useState, useEffect} from 'react';
import Image from "next/image";
import styles from "@components/event/Event.module.scss";
import { useQuery } from "react-query";
import { QueryKeys, graphqlFetcher } from "@src/assets/ts/queryClient";
import GET_EVENTLIST, { EventBannerList, EventListCategory, EventListCategorys } from "@src/graphql/event";

const { data: EventBannerItem } = useQuery<
any | EventBannerList | unknown | undefined
>(QueryKeys.EVT_BNR_LIST, () => graphqlFetcher(GET_EVENTLIST));