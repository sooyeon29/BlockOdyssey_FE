import { useState } from "react";
import styled from "styled-components";

const Pagination = ({ totalPosts, limit, page, setPage }) => {
  const numPages = Math.ceil(totalPosts / limit);
  const [currPage, setCurrPage] = useState(page);
  let firstNum = currPage - (currPage % 10) + 1;
  let lastNum = currPage - (currPage % 10) + 10;
  //console.log({"currPage is":currPage, "firsNum is" : firstNum, "page is" : page})

  return (
    <PageSection>
      <ButtonWrap>
        <Button
          onClick={() => {
            setPage(page - 1);
            setCurrPage(page - 2);
          }}
          disabled={page === 1}
        >
          &lt;
        </Button>
        <Button
          onClick={() => setPage(firstNum)}
          aria-current={page === firstNum ? "page" : null}
        >
          {firstNum}
        </Button>
        {Array(9)
          .fill()
          .map((_, i) => {
            if (i <= 7) {
              return (
                <Button
                  border="true"
                  key={i + 1}
                  onClick={() => {
                    setPage(firstNum + 1 + i);
                  }}
                  aria-current={page === firstNum + 1 + i ? "page" : null}
                >
                  {firstNum + 1 + i}
                </Button>
              );
            } else if (i >= 8) {
              return (
                <Button
                  border="true"
                  key={i + 1}
                  onClick={() => setPage(lastNum)}
                  aria-current={page === lastNum ? "page" : null}
                >
                  {lastNum}
                </Button>
              );
            }
          })}
        <Button
          onClick={() => {
            setPage(page + 1);
            setCurrPage(page);
          }}
          disabled={page === numPages}
        >
          &gt;
        </Button>
      </ButtonWrap>
    </PageSection>
  );
};

export default Pagination;

const PageSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const ButtonWrap = styled.div`
  margin: 20px auto;
`;
const Button = styled.button`
  margin: 3px;
  background-color: transparent;
  border: 0.5px solid gray;
  border-radius: 3px;
  &:focus {
    background-color: darkgray;
  }
`;
