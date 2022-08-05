import styled from "styled-components";
import Header from "../components/Header/Header.jsx";
import Login from "../components/Login/Login.jsx";
import { ReqLogin } from "../utils/axios.jsx";
import { useState } from "react";

const LoginPage = () => {
  return (
    <Container>
      <Header></Header>
      <Login></Login>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  min-width: 100vh;
  background-color: #e0e0e0;
  overflow-x: hidden;
  overflow-y: hidden;
`;
