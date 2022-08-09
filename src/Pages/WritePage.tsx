import styled from "styled-components";
import Header from "../components/Header/Header";
import Write from "../components/WritePage/Write";

const WritePage = () => {
  return (
    <Container>
      <Header></Header>
      <Write></Write>
    </Container>
  );
};

export default WritePage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #e0e0e0;
`;
