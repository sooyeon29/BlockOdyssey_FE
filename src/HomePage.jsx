import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import StockList from "./components/StockList";

const HomePage = () => {
  const [phoneList, setPhoneList] = useState();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products?limit=100`)
      .then((res) => {
        setPhoneList(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(phoneList);

  return (
    <>
      <SearchBox>
        <Search>상품 검색</Search>
        <hr />
        <div>
          <Search>검색</Search>
          <select>
            <option>전체</option>
            <option>상품명</option>
            <option>브랜드</option>
            <option>상품내용</option>
          </select>
          <input type="text" />
          <button>조회</button>
        </div>
      </SearchBox>
      <StockList phoneList={phoneList} />
    </>
  );
};

export default HomePage;

const SearchBox = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 3px 3px 1px rgba(0, 0, 0, 0.1);
  margin: 30px 10px 20px 10px;
  hr {
    border-top: 1px solid darkgray;
    height: 1px;
    width: 100%;
  }
  div {
    display: flex;
    flex-direction: row;
  }
  select {
    width: 120px;
    height: 35px;
    margin: 10px 10px 10px 60px;
    border-radius: 5px;
    border: 1px solid darkgray;
  }
  input {
    width: 350px;
    height: 29px;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid darkgray;
  }
  button {
    width: 60px;
    height: 31px;
    border-radius: 5px;
    margin: 10px;
    color: white;
    background-color: black;
  }
`;

const Search = styled.div`
  padding: 15px;
  font-weight: bold;
`;
