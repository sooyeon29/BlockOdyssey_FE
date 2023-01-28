import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import StockList from "./components/StockList";
import Pagination from "./components/Pagination";

const HomePage = () => {
  const [phoneList, setPhoneList] = useState();
  const [myOption, setMyOption] = useState();
  const [searchWord, setSearchWord] = useState();
  const [mySearch, setMySearch] = useState();
  const [row, setRow] = useState(10);
  const [page, setPage] = useState(1);
  const limit = 10;
  const offset = (page - 1) * limit;
  console.log(parseInt(row), "처음선택전숫자!!!!!!!!!!!!");
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

  const postsData = (posts) => {
    if (posts) {
      let result = posts.slice(offset, offset + limit);
      return result;
    }
  };

  const mySearchHandler = (e) => {
    e.preventDefault();
    if (myOption === undefined) alert("검색필터를 선택해주세요");
    setMySearch({ filter: myOption, forSearch: searchWord });
  };

  console.log(mySearch);
  if (mySearch !== undefined)
    window.location.href = mySearch.filter + "?mySearch=" + mySearch.forSearch;
  console.log(phoneList?.length, "길이");
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
      <StockList phoneList={postsData(phoneList)} />
      <div>페이지당 행</div>
      <select onChange={(e) => setRow(e.target.value)}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
      <Pagination
        limit={limit}
        page={page}
        totalPosts={phoneList?.length}
        setPage={setPage}
        selectRow={phoneList?.length / parseInt(row)}
      />
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
