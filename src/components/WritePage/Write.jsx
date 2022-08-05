import * as S from "./style.jsx";
import { useState } from "react";
import { ReqPosting } from "../../utils/axios.jsx";

const Write = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const submit = () => {
    ReqPosting(title, text)();
  };

  return (
    <S.Container>
      <S.Title
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="제목을 입력해 주세요."
      ></S.Title>
      <S.Detail
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="내용을 입력해 주세요."
      ></S.Detail>
      <S.Posting onClick={submit}>게시하기</S.Posting>
    </S.Container>
  );
};

export default Write;
