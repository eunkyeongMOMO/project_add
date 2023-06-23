import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

export type PropsType = {
  state:any
}

const Tab = styled.div`
  width: 1050px;
  margin: 0 auto;

  h1 {
    font-size: 24px;
    padding: 20px 0;
  }
  .tab_btn {
    display: flex;
    justify-content: cener;
    align-items: center;
  }
  .tab_btn li {
    width: 33.33%;
    box-sizing: border-box;
    border: 1px solid #979797;
   
    text-align: center;
    cursor: pointer;
  }
  .tab_btn li a {
    display:block;
    width:100%;
    line-height: 45px;
    font-size: 17px;
    color: #979797;
  }
  .tab_btn li a.on {
    background: #2d2d2d;
    color: #fff;
  }
`;
const BookLayout = (props:PropsType) => {
  const [tabCurrent, setTabCurrent] = useState(props.state);
  const tabHandler = (i: any) => {
    setTabCurrent(i);
  };

  const tabData = [
    {
      idx: 0,
      tabBtn: "교재 자료 다운로드",
      tabUrl: "/book/download",
    },
    {
      idx: 1,
      tabBtn: "추록/정오표",
      tabUrl: "/book/errata",
    },
    {
      idx: 2,
      tabBtn: "교재구매",
      tabUrl: "/book/buyBooks",
    },
  ];
   
  return (
    <Tab>
      <h1>교재/자료</h1>
      <ul className="tab_btn">
        {tabData.map((tab: any, index: number) => (
          <li key={tab.idx}>
            <Link
              href={tab.tabUrl}
              className={tabCurrent === index ? "on" : ""}
              onClick={() => tabHandler(tab.idx)}
            >
              {tab.tabBtn}
            </Link>
          </li>
        ))}
      </ul>
    </Tab>
  );
};

export default BookLayout;
