import * as S from "./style";
import { useState, useEffect } from "react";
import { ReqPosting } from "../../utils/api";

const Write = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [fill, setFill] = useState(false);

  const submit = () => {
    ReqPosting(title, text)();
  };

  const Handle = () => {
    {
      text && title.length >= 1 ? setFill(true) : setFill(false);
    }
  };

  useEffect(() => {
    Handle();
  }, [title, text]);

  return (
    <S.Container>
      <S.Title
        onChange={(e: any) => {
          setTitle(e.target.value);
        }}
        placeholder="제목을 입력해 주세요."
      ></S.Title>
      <S.Detail
        onChange={(e: any) => {
          setText(e.target.value);
        }}
        placeholder="내용을 입력해 주세요."
      ></S.Detail>
      <S.Posting fill={fill} onClick={submit}>
        게시하기
      </S.Posting>
    </S.Container>
  );
};

export default Write;
