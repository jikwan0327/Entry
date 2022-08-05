import { useEffect, useState } from "react";
import styled from "styled-components";
import * as S from "./style.jsx";
import axios from "axios";

const URL = "https://freshman.entrydsm.hs.kr";

const Board = ({ location }) => {
  const [title, setTitle] = useState("제목");
  const [poster, setPoster] = useState("게시자");
  const [content, setContent] = useState("엔트리 프론트엔드 인턴 게시판 상세보기 디자인입니다.");
  const [isMine, setIsMine] = useState(false);

  useEffect(() => {
    const getInfo = () => {
      axios.get(`${URL}/posts/${location.state.data}`).then((res) => {
        console.log(res.data);
        let data = res.data;
        setIsMine(data.is_mine);
        setContent(data.content);
        setPoster(data.name);
        setTitle(data.title);
      });
    };
    getInfo();
  }, []);

  return (
    <S.Background>
      <S.Container>
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.PostMan>{poster}</S.PostMan>
        </S.Header>
        <S.Body>{content}</S.Body>
      </S.Container>
      {isMine ? <S.EditBtn>수정하기</S.EditBtn> : ""}
    </S.Background>
  );
};

export default Board;
