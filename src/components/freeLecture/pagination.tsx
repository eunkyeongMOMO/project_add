import styles from "@src/scss/FreeLecture.module.scss";
import styled from "styled-components";

export type PagerType = {
  total: any;
  limit: number;
  page: number;
  setPage: any;
};

const PagingWrap = styled.div`
  margin : 0 auto;
  text-align :center;

`

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 0 7px;
  margin: 0 auto;
  font-size: 1rem;

  &.active {
    color: #fff;
    background: #2fa753;
  }

  &[disabled] {
    cursor: revert;
    transform: revert;
  }
`;

export default function Pagination(props:PagerType) {
  const numPages = Math.ceil(props.total / props.limit);
  return (
    <PagingWrap>
      <Button onClick={() => props.setPage(1)} disabled={props.page === 1}>
        &lt; &lt;
      </Button>
      <Button
        onClick={() => props.setPage(props.page - 1)}
        disabled={props.page === 1}
      >
        &lt;
      </Button>
      {Array(numPages)
        .fill([])
        .map((_, i) => (
          <Button
            key={i + 1}
            onClick={() => props.setPage(i + 1)}
            className={props.page === i + 1 ? "active" : ""}
          >
            {i + 1}
          </Button>
        ))}
      <Button
        onClick={() => props.setPage(props.page + 1)}
        disabled={props.page === numPages}
      >
        &gt;
      </Button>
      <Button
        onClick={() => props.setPage(numPages)}
        disabled={props.page === numPages}
      >
        &gt; &gt;
      </Button>
    </PagingWrap>
  );
  
}
