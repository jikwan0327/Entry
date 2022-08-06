import axios from "axios";
import Basic from "../../imgs/profile.png";
import * as S from "./style.jsx";
import { useEffect, useState } from "react";
import editProfile from "../../imgs/editprofile.png";

const URL = "https://freshman.entrydsm.hs.kr";

const My = () => {
  const [name, setName] = useState("이름");

  useEffect(() => {
    const getMyInfo = () => {
      axios
        .get(`${URL}/users/mypage`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
        })
        .then((res) => {
          console.log(res.data);
          let data = res.data;
          setName(data.name);
        });
    };
    getMyInfo();
  }, []);

  return (
    <>
      <S.Container>
        <S.Profile src={Basic}></S.Profile>
        <S.Wrapper>
          <S.Name>{name}</S.Name>
          <S.EditImg src={editProfile} />
          <S.Explain>
            엔트리는 우리 학교의 최고의 동아리이며, 학생들의 입학부터 취업까지 도와주는 엄청난 동아리 라고 할 수 있죠
          </S.Explain>
        </S.Wrapper>
      </S.Container>
      <S.MyPosting>나의 게시물</S.MyPosting>
    </>
  );
};

export default My;
