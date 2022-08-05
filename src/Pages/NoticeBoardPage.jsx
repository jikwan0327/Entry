import styled, { ServerStyleSheet } from "styled-components";
import Header from "../components/Header/Header";
import Board from "../components/Board/board";
import { useLocation } from "react-router-dom";

const NoticeBoardPage = () => {
  let location = useLocation();

  return (
    <Container>
      <Header></Header>
      <Board location={location}></Board>
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
