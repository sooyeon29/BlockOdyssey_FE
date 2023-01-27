import axios from "axios";
import { async } from "q";
import { useEffect, useState } from "react";
import styled from "styled-components";
import StockList from "./components/StockList";
import useInput from "./hooks/useInput";

const HomePage = () => {
  const [phoneList, setPhoneList] = useState();
  const [myOption, setMyOption] = useState();
  const [searchWord, setSearchWord] = useState();
  const [mySearch, setMySearch] = useState();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products?limit=100`)
      .then((res) => {
        setPhoneList(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(phoneList);
  console.log(myOption, typeof myOption);
  console.log(searchWord);

  const mySearchHandler = (e) => {
    e.preventDefault();
    if (myOption === undefined) alert("검색필터를 선택해주세요");
    setMySearch({ filter: myOption, forSearch: searchWord });
  };

  console.log(mySearch);
  if (mySearch !== undefined)
    window.location.href = mySearch.filter + "?mySearch=" + mySearch.forSearch;

  return (
    <>
      <SearchBox onSubmit={mySearchHandler}>
        <Search>상품 검색</Search>
        <hr />
        <div>
          <Search>검색</Search>
          <select
            onChange={(e) => setMyOption(e.target.value)}
            value={mySearch?.filter}
          >
            <option value="all">전체</option>
            <option value="title">상품명</option>
            <option value="brand">브랜드</option>
            <option value="description">상품내용</option>
          </select>
          <input
            required
            type="text"
            onChange={(e) => setSearchWord(e.target.value)}
            value={mySearch?.searchWord}
          />
          <button>조회</button>
        </div>
      </SearchBox>
      <StockList phoneList={phoneList} mySearch={mySearch} />
    </>
  );
};

export default HomePage;

const SearchBox = styled.form`
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
