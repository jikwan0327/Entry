import { useEffect, useState } from "react";
import * as S from "./style.jsx";
import axios from "axios";
import { ReqDelete, ReqEditPost } from "../../utils/axios.jsx";

const URL = "https://freshman.entrydsm.hs.kr";

const Board = ({ location }) => {
  const [title, setTitle] = useState("제목");
  const [poster, setPoster] = useState("게시자");
  const [content, setContent] = useState("엔트리 프론트엔드 인턴 게시판 상세보기 디자인입니다.");
  const [isMine, setIsMine] = useState(false);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const getLoginInfo = () => {
      axios
        .get(`${URL}/posts/${location.state.data}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
        })
        .then((res) => {
          let data = res.data;
          setIsMine(data.is_mine);
          setContent(data.content);
          setPoster(data.name);
          setTitle(data.title);
        });
    };
    getLoginInfo();
  }, []);

  useEffect(() => {
    const getInfo = () => {
      axios.get(`${URL}/posts/${location.state.data}`).then((res) => {
        let data = res.data;
        setContent(data.content);
        setPoster(data.name);
        setTitle(data.title);
      });
    };
    getInfo();
  }, []);

  const Delete = () => {
    axios
      .delete(`${URL}/posts/${location.state.data}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
      })
      .then(() => {
        alert("게시글이 삭제되었습니다");
        window.location.href = "/";
      });
  };

  const EditBtn = () => {
    setEdit(true);
  };

  const Edit = () => {
    if (title == "" || content == "") {
      alert("내용을 입력하세요");
    } else {
      let id = location.state.data;
      axios
        .patch(
          URL + `/posts/${id}`,
          { title, content },
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
          }
        )
        .then(() => {
          alert("수정이 완료되었습니다");
          window.location.href = "/";
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <S.Background>
      <S.Container>
        <S.Header>
          {edit ? (
            <S.TitleInput type="text" onChange={(e) => setTitle(e.target.value)} value={title}></S.TitleInput>
          ) : (
            <S.Title>{title}</S.Title>
          )}
          <S.PostMan>{poster}</S.PostMan>
        </S.Header>
        {edit ? (
          <S.BodyInput
            type="text"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></S.BodyInput>
        ) : (
          <S.Body>{content}</S.Body>
        )}
      </S.Container>
      <S.BtnContainer>
        {edit ? (
          <S.EditBtn style={{ marginLeft: 170 }} onClick={Edit}>
            수정완료
          </S.EditBtn>
        ) : (
          <>
            {isMine ? <S.EditBtn onClick={Delete}>삭제하기</S.EditBtn> : ""}
            {isMine ? <S.EditBtn onClick={EditBtn}>수정하기</S.EditBtn> : ""}
          </>
        )}
      </S.BtnContainer>
    </S.Background>
  );
};

export default Board;
