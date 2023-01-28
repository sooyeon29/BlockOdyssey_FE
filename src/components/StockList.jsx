import styled from "styled-components";

const StockList = ({ phoneList, limit, offset }) => {
  // console.log(window.location.pathname);
  // console.log(window.location.search);
  const selectBox = window.location.pathname.split("/", 2)[1];
  console.log(selectBox, "분류선택!");
  const selectWord = window.location.search.split("=", 2)[1];
  console.log(selectWord, "검색단어");
  console.log(phoneList, "리스트");

  const searchList = phoneList?.filter((phone) => {
    if (selectWord === undefined) return phone;
    if (selectBox === "title" && phone.title.indexOf !== -1)
      return phone.title.toLowerCase().includes(selectWord);
    if (selectBox === "brand" && phone.brand.indexOf !== -1)
      return phone.brand.toLowerCase().includes(selectWord);
    if (selectBox === "description" && phone.description.indexOf !== -1)
      return phone.description.toLowerCase().includes(selectWord);
  });
  console.log(searchList, "검색결과리스트");

  const postsData = (posts) => {
    if (posts) {
      const result = posts.slice(offset, offset + limit);
      return result;
    }
  };

  const showList = postsData(searchList);

  return (
    <>
      <TotalData>
        검색된 데이터 :
        {phoneList === undefined ? "" : Object.keys(searchList).length}건
      </TotalData>
      <Product>
        <List>
          <thead>
            <Category>
              <th>상품번호</th>
              <th>상품명</th>
              <th>브랜드</th>
              <th>상품내용</th>
              <th>가격</th>
              <th>평점</th>
              <th>재고</th>
            </Category>
          </thead>
          <tbody>
            {showList?.map((show) => {
              return (
                <Category key={show.id}>
                  <td>{show.id}</td>
                  <td>{show.title}</td>
                  <td>{show.brand}</td>
                  <td>{show.description.substring(0, 40)}...</td>
                  <td>{show.price}</td>
                  <td>{show.rating}</td>
                  <td>{show.stock}</td>
                </Category>
              );
            })}
          </tbody>
        </List>
      </Product>
    </>
  );
};

export default StockList;

const TotalData = styled.div`
  margin: 30px 10px;
  font-weight: bold;
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
