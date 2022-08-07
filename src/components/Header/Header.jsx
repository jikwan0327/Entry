import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as S from "./style.jsx";

const Header = () => {
  const logout = () => {
    localStorage.removeItem("accessToken");
    alert("로그아웃 되었습니다");
    window.location.href = "/";
  };

  const [ok, setOk] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
      setOk(true);
    } else {
      setOk(false);
    }
  }, [ok]);

  return (
    <S.Container>
      <S.Circle></S.Circle>
      <S.Entry></S.Entry>
      <S.Entry1></S.Entry1>
      <S.Entry2></S.Entry2>
      <S.Entry3></S.Entry3>
      <Link to="/">
        <S.Logo>Entry DSM</S.Logo>
      </Link>
      {ok ? (
        <S.Wrapper>
          <Link to="/write" style={{ textDecoration: "none" }}>
            <S.SignUp>게시글 작성</S.SignUp>
          </Link>
          <Link to="/my" style={{ textDecoration: "none" }}>
            <S.SignUp>마이페이지</S.SignUp>
          </Link>
          <S.SignUp onClick={logout}>로그아웃</S.SignUp>
        </S.Wrapper>
      ) : (
        <S.Wrapper>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <S.SignUp>회원가입</S.SignUp>
          </Link>
          <S.Line></S.Line>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <S.SignUp>로그인</S.SignUp>
          </Link>
        </S.Wrapper>
      )}
    </S.Container>
  );
};

export default Header;
