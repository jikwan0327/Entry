import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Table from "../components/Table/Table";
import { Helmet } from "react-helmet";

const MainPage = () => {
  return (
    <Container>
      <Helmet>
        <title>Entry DSM</title>
      </Helmet>
      <Header></Header>
      <PostList>게시물 목록</PostList>
      <Table></Table>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const PostList = styled.div`
  font-family: Noto Sans KR;
  font-size: 32px;
  font-weight: 700;
  line-height: 46px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 130px;
  margin-left: 23%;
  margin-bottom: 50px;
`;
