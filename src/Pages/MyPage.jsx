import styled from "styled-components";
import Header from "../components/Header/Header";
import My from "../components/MyPage/My";
import Table from "../components/Table/Table";

const MyPage = () => {
  return (
    <>
      <Header></Header>
      <My></My>
      <Wrapper>
        <Table></Table>
      </Wrapper>
    </>
  );
};

export default MyPage;

const Wrapper = styled.div`
  margin-top: 20px;
`;
