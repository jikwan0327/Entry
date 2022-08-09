import styled from "styled-components";
import Header from "../components/Header/Header";
import My from "../components/MyPage/My";
import MyTable from "../components/Table/MyTable";

const MyPage = () => {
  return (
    <>
      <Header></Header>
      <My></My>
      <Wrapper>
        <MyTable></MyTable>
      </Wrapper>
    </>
  );
};

export default MyPage;

const Wrapper = styled.div`
  margin-top: 20px;
`;
