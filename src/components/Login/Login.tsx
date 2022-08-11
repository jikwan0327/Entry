import styled from "styled-components";
import * as S from "./loginStyle";
import React, { useState, useRef, useEffect } from "react";
import { ReqLogin } from "../../utils/axios";
import Eye from "../../imgs/eye.png";
import Eyeoff from "../../imgs/eyeoff.png";
import Check from "../../imgs/check.png";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [fill, setFill] = useState(false);
  const [eye, setEye] = useState(false);
  const [saveId, setSaveId] = useState(false);

  const LogInput: any = useRef();

  const IdEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") LogInput.current.focus();
  };

  const PwEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") axios();
  };

  const axios = () => {
    ReqLogin(id, pw)();
  };

  const HandleInput = () => {
    {
      id && pw.length >= 1 ? setFill(true) : setFill(false);
    }
  };

  useEffect(() => {
    HandleInput();
  }, [id, pw]);

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
          <S.Eye onClick={() => setEye(!eye)} src={eye ? Eyeoff : Eye}></S.Eye>
          <S.PWInput
            type={eye ? "text" : "password"}
            onChange={(e) => {
              setPw(e.target.value);
            }}
            placeholder="비밀번호를 입력해주세요."
            onKeyPress={PwEnter}
            ref={LogInput}
          ></S.PWInput>
          <S.Save>
            <S.CheckBox
              id="checkbox"
              type="checkbox"
              onClick={() => {
                setSaveId(!saveId);
              }}
              saveId={saveId}
            ></S.CheckBox>
            {saveId ? (
              <S.CheckImg
                onClick={() => {
                  setSaveId(!saveId);
                }}
                src={Check}
              ></S.CheckImg>
            ) : (
              ""
            )}
            <S.SaveID>아이디 저장</S.SaveID>
          </S.Save>
          <S.Confirm onClick={axios} fill={fill ? "#5F85BB" : "lightgray"}>
            완료
          </S.Confirm>
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default Login;
