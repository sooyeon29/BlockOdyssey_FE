import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const MainPage = () => {
  const [phoneList, setPhoneList] = useState();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products?limit=100`)
      .then((res) => {
        console.log(res.data.products);
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
      <TotalData>검색된 데이터 : {Object.keys(phoneList).length}건</TotalData>
      <Product>
        <List>
          <Category>
            <th>상품번호</th>
            <th>상품명</th>
            <th>브랜드</th>
            <th>상품내용</th>
            <th>가격</th>
            <th>평점</th>
            <th>재고</th>
          </Category>

          {phoneList.map((phone) => {
            return (
              <Category key={phone.id}>
                <td>{phone.id}</td>
                <td>{phone.title}</td>
                <td>{phone.brand}</td>
                <td>{phone.description.substring(0, 40)}...</td>
                <td>{phone.price}</td>
                <td>{phone.rating}</td>
                <td>{phone.stock}</td>
              </Category>
            );
          })}
        </List>
      </Product>
    </>
  );
};

export default MainPage;

const SearchBox = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 3px 3px 1px rgba(0, 0, 0, 0.1);
  margin: 20px 10px;
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
    height: 30px;
    margin: 10px 10px 10px 60px;
  }
  input {
    width: 350px;
    height: 30px;
    margin: 10px;
  }
  button {
    width: 60px;
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

const TotalData = styled.div`
  margin: 30px 10px;
`;
const Product = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 3px 3px 1px rgba(0, 0, 0, 0.1);
  margin: 20px 10px;
  padding: 30px 20px;
`;
const List = styled.table`
  margin: auto;
  width: 100%;
`;
const Category = styled.tr`
  th {
    border-bottom: 1px solid darkgray;
  }
  td {
    text-align: center;
    padding: 20px 10px;
    border-bottom: 1px solid darkgray;
  }
`;
