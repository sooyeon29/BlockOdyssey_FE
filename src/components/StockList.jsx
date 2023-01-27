import styled from "styled-components";

const StockList = ({ phoneList, mySearch }) => {
  console.log(window.location.pathname);
  console.log(window.location.search);

  return (
    <>
      <TotalData>
        검색된 데이터 :{" "}
        {phoneList === undefined ? "" : Object.keys(phoneList).length}건
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
            {mySearch === undefined &&
              phoneList?.map((phone) => {
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
