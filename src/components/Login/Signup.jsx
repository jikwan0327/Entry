import { useState } from "react";
import styled from "styled-components";
import * as S from "./signupStyle";
import { ReqSignUp } from "../../utils/axios";

function SignUp() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [APw, setAPw] = useState("");
  const [fill, setFill] = useState(false);

  const axios = () => {
    if (name == "" || id == "" || pw == "" || APw == "") {
      alert("입력하세요");
    } else {
      if (pw === APw) {
        ReqSignUp(id, pw, name)();
      } else {
        alert("비밀번호가 일치하지 않습니다");
      }
    }
  };

  const allFill = (key) => {
    if (name !== "" && id !== "" && pw !== "" && APw !== "") {
      setFill(true);
    }
    if (name == "" || id == "" || pw == "" || APw == "") {
      setFill(false);
    }
    if (key == "") {
      setFill(false);
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.SignUpMessage>회원가입</S.SignUpMessage>
        <S.Name>이름</S.Name>
        <S.NameInput
          onChange={(e) => {
            setName(e.target.value);
            allFill(e.target.value);
          }}
          placeholder="이름을 입력해주세요"
        ></S.NameInput>
        <S.ID>아이디</S.ID>
        <S.IDInput
          onChange={(e) => {
            setId(e.target.value);
            allFill(e.target.value);
          }}
          placeholder="아이디를 입력해주세요."
        ></S.IDInput>
        <S.PW>비밀번호</S.PW>
        <S.PWInput
          onChange={(e) => {
            setPw(e.target.value);
            allFill(e.target.value);
          }}
          placeholder="비밀번호를 입력해주세요."
        ></S.PWInput>
        <S.PWAgain>비밀번호 확인</S.PWAgain>
        <S.PWAgainInput
          onChange={(e) => {
            setAPw(e.target.value);
            allFill(e.target.value);
          }}
          placeholder="비밀번호를 한번 더 입력해주세요."
        ></S.PWAgainInput>
        <S.ConfirmBtn fill={fill ? "#5F85BB" : "lightgray"} onClick={axios}>
          확인
        </S.ConfirmBtn>
      </S.Wrapper>
    </S.Container>
  );
}

export default SignUp;
