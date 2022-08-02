import styled, { ServerStyleSheet } from "styled-components";
import Header from "../components/Header/Header";
import Board from "../components/board";

const NoticeBoardPage = () => {
  return (
    <Container>
      <Header></Header>
      <Board></Board>
    </Container>
  );
};

export default NoticeBoardPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
