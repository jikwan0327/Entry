import React, { useEffect, useState } from "react";
import * as S from "./signupStyle";
import { ReqSignUp } from "../../utils/api";
import Eye from "../../imgs/eye.png";
import Eyeoff from "../../imgs/eyeoff.png";
import Swal from "sweetalert2";

function SignUp() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [APw, setAPw] = useState("");
  const [fill, setFill] = useState(false);
  const [eye, setEye] = useState(false);
  const [aEye, setAEye] = useState(false);

  const axios = () => {
    if (name == "" || id == "" || pw == "" || APw == "") {
      Swal.fire("warning", "입력하세요", "warning");
    } else {
      if (pw === APw) {
        ReqSignUp(id, pw, name)();
      } else {
        Swal.fire("비밀번호 오류", "비밀번호가 일치하지 않습니다", "warning");
      }
    }
  };

  const Handler = () => {
    {
      id && pw && name && APw.length >= 1 ? setFill(true) : setFill(false);
    }
  };

  useEffect(() => {
    Handler();
  }, [id, name, pw, APw]);

  const PWEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      axios();
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.SignUpMessage>회원가입</S.SignUpMessage>
        <S.Name>이름</S.Name>
        <S.NameInput
          onChange={(e: any) => {
            setName(e.target.value);
          }}
          placeholder="이름을 입력해주세요"
        ></S.NameInput>
        <S.ID>아이디</S.ID>
        <S.IDInput
          onChange={(e: any) => {
            setId(e.target.value);
            console.log(e);
          }}
          placeholder="아이디를 입력해주세요."
        ></S.IDInput>
        <S.PW>비밀번호</S.PW>
        <S.Eye onClick={() => setEye(!eye)} src={eye ? Eyeoff : Eye}></S.Eye>
        <S.PWInput
          type={eye ? "text" : "password"}
          onChange={(e: any) => {
            setPw(e.target.value);
          }}
          placeholder="비밀번호를 입력해주세요."
        ></S.PWInput>
        <S.PWAgain>비밀번호 확인</S.PWAgain>
        <S.Eye onClick={() => setAEye(!aEye)} src={aEye ? Eyeoff : Eye}></S.Eye>
        <S.PWAgainInput
          type={aEye ? "text" : "password"}
          required
          onChange={(e: any) => {
            setAPw(e.target.value);
          }}
          placeholder="비밀번호를 한번 더 입력해주세요."
          onKeyPress={PWEnter}
        ></S.PWAgainInput>
        <S.ConfirmBtn fill={fill ? "#5F85BB" : "lightgray"} onClick={axios}>
          확인
        </S.ConfirmBtn>
      </S.Wrapper>
    </S.Container>
  );
}

export default SignUp;
