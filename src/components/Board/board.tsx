import React, { useEffect, useState } from "react";
import * as S from "./style";
import axios from "axios";
import Swal from "sweetalert2";

const URL = "https://freshman.entrydsm.hs.kr";

interface Locationprops {
  location: any;
}

const Board = ({ location }: Locationprops) => {
  const [title, setTitle] = useState("제목");
  const [poster, setPoster] = useState("게시자");
  const [content, setContent] = useState("엔트리 프론트엔드 인턴 게시판 상세보기 디자인입니다.");
  const [isMine, setIsMine] = useState(false);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
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
    } else {
      const getInfo = () => {
        axios.get(`${URL}/posts/${location.state.data}`).then((res) => {
          let data = res.data;
          setContent(data.content);
          setPoster(data.name);
          setTitle(data.title);
        });
      };
      getInfo();
    }
  }, []);

  const Delete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "삭제하시면 다시는 게시물을 보실 수 없습니다",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${URL}/posts/${location.state.data}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
          })
          .then(() => {
            Swal.fire("삭제 성공", "게시글이 삭제되었습니다", "success").then(() => {
              window.location.href = "/";
            });
          })
          .catch(() => {
            Swal.fire("삭제 실패", "게시글을 삭제하지 못했습니다", "error").then(() => {
              window.location.href = "/";
            });
          });
      }
    });
  };

  const EditBtn = () => {
    setEdit(true);
  };

  const Edit = () => {
    if (title == "" || content == "") {
      Swal.fire("warning", "내용을 입력하세요", "warning");
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
          Swal.fire("수정 성공", "수정이 완료되었습니다", "success").then(() => {
            window.location.href = "/";
          });
        })
        .catch(() => {
          Swal.fire("수정 실패", "오류", "error").then(() => {
            window.location.href = "/";
          });
        });
    }
  };

  return (
    <S.Background>
      <S.Container>
        <S.Header>
          {edit ? (
            <S.TitleInput
              type="text"
              onChange={(e: React.FormEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)}
              value={title}
            ></S.TitleInput>
          ) : (
            <S.Title>{title}</S.Title>
          )}
          <S.PostMan>{poster}</S.PostMan>
        </S.Header>
        {edit ? (
          <S.BodyInput
            type="text"
            value={content}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setContent(e.currentTarget.value);
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
