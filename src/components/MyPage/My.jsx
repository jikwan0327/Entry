import axios from "axios";
import Basic from "../../imgs/profile.png";
import * as S from "./style.jsx";
import { useEffect, useState, useRef } from "react";
import editProfile from "../../imgs/editprofile.png";
import Hover from "../../imgs/HoverEdit.png";
import { ReqEditMyPage } from "../../utils/axios";

const URL = "https://freshman.entrydsm.hs.kr";

const My = () => {
  const [name, setName] = useState("이름");
  const [content, setContent] = useState();
  const [img, setImg] = useState(Basic);
  const [hover, setHover] = useState(false);
  const [edit, setEdit] = useState(false);
  const fileInput = useRef(null);

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
          setContent(data.introduce);
        });
    };
    getMyInfo();
  }, []);

  const Edit = () => {
    setEdit(true);
    setHover(false);
  };

  const CEdit = () => {
    setEdit(false);
    ReqEditMyPage(img, name, content);
  };

  const onChange = (e) => {
    if (e.target.files[0]) {
      setImg(e.target.files[0]);
    } else {
      setImg(Basic);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <S.Container>
        <input type="file" onChange={onChange} style={{ display: "none" }} accept="image/*" ref={fileInput} />
        {edit ? (
          <S.Profile src={img} onClick={() => fileInput.current.click()}></S.Profile>
        ) : (
          <S.Profile src={img}></S.Profile>
        )}
        <S.Wrapper>
          {edit ? (
            <>
              <S.Wrapper3>
                <S.EditName
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></S.EditName>
                <S.Confrim onClick={CEdit}>완료</S.Confrim>
              </S.Wrapper3>
              <S.EditExplain
                placeholder="자기소개"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              ></S.EditExplain>
            </>
          ) : (
            <>
              <S.Wrapper2>
                <S.Name>{name}</S.Name>
                <S.EditImg
                  onMouseOver={() => setHover(true)}
                  onMouseOut={() => setHover(false)}
                  onClick={Edit}
                  src={hover ? Hover : editProfile}
                />
              </S.Wrapper2>
              <S.Explain>{content}</S.Explain>
            </>
          )}
        </S.Wrapper>
      </S.Container>
      <S.MyPosting>나의 게시물</S.MyPosting>
    </>
  );
};

export default My;
