import styled from "styled-components";
import * as S from "./loginStyle.jsx";
import { useState, useRef } from "react";
import { ReqLogin } from "../../utils/axios.jsx";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const LogInput = useRef();

  const IdEnter = (e) => {
    if (e.key == "Enter") LogInput.current.focus();
  };

  const PwEnter = (e) => {
    if (e.key == "Enter") console.log(pw);
  };

  const axios = () => {
    ReqLogin(id, pw)();
  };

  return (
    <>
      <S.Container>
        <S.LoginMessage>로그인</S.LoginMessage>
        <S.Wrapper>
          <S.ID>아이디</S.ID>
          <S.IDInput
            onChange={(e) => {
              setId(e.target.value);
            }}
            placeholder="아이디를 입력해주세요."
            onKeyPress={IdEnter}
          ></S.IDInput>
          <S.PW>비밀번호</S.PW>
          <S.PWInput
            type="password"
            onChange={(e) => {
              setPw(e.target.value);
            }}
            placeholder="비밀번호를 입력해주세요."
            onKeyPress={PwEnter}
            ref={LogInput}
          ></S.PWInput>
          <S.Save>
            <S.CheckBox></S.CheckBox>
            <S.SaveID>아이디 저장</S.SaveID>
          </S.Save>
          <S.Confirm onClick={axios}>완료</S.Confirm>
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default Login;
