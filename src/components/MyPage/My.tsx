import axios from "axios";
import Basic from "../../imgs/profile.png";
import * as S from "./style";
import { useEffect, useState, useRef } from "react";
import editProfile from "../../imgs/editprofile.png";
import Hover from "../../imgs/HoverEdit.png";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const BASE_URL = "https://freshman.entrydsm.hs.kr";

const My = () => {
  const [name, setName] = useState("이름");
  const [content, setContent] = useState("자기소개");
  const [img, setImg] = useState("");
  const [sendImg, setSendImg] = useState(Basic);
  const [hover, setHover] = useState(false);
  const [edit, setEdit] = useState(false);
  const fileInput: any = useRef(null);
  const [lastImg, setLastImg] = useState();
  const [imgHover, setImgHover] = useState(false);

  useEffect(() => {
    const getMyInfo = () => {
      axios
        .get(`${BASE_URL}/users/mypage`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
        })
        .then((res) => {
          console.log(res.data);
          let data = res.data;
          setName(data.name);
          if (data.introduce !== null) {
            setContent(data.introduce);
          }
          if (data.profile_url !== null) {
            setImg(data.profile_url);
          } else {
            setImg(Basic);
          }
        });
    };
    getMyInfo();
  }, []);

  const Edit = () => {
    setEdit(true);
    setHover(false);
  };

  const uploadImg = async (img: string) => {
    const formData = new FormData();
    formData.append("image", img);
    await axios
      .post(`${BASE_URL}/images`, formData, {
        headers: {
          "Content-Type": `multipart/form-data; `,
        },
      })
      .then((res) => {
        setImg(res.data.image_url);
      });
  };

  const CEdit = async () => {
    await axios
      .patch(
        `${BASE_URL}/users/mypage`,
        {
          profile_image_url: img,
          name: name,
          introduce: content,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    setEdit(false);
  };

  const onChange = async (e: any) => {
    if (e.target && e.target.files[0]) {
      setSendImg(e.target.files[0]);
    } else {
      setSendImg(Basic);
      return;
    }
    const reader: any = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    uploadImg(e.target.files[0]);
  };

  return (
    <>
      <S.Container>
        <input type="file" onChange={onChange} style={{ display: "none" }} accept="image/*" ref={fileInput} />
        {imgHover ? <S.Hover>프로필 수정</S.Hover> : ""}
        {edit ? (
          <S.Profile
            src={img}
            onMouseOver={() => setImgHover(true)}
            onMouseOut={() => setImgHover(false)}
            onClick={() => fileInput.current.click()}
            style={{ filter: imgHover ? "opacity(0.3) brightness(50%)" : "" }}
          ></S.Profile>
        ) : (
          <S.Profile src={img}></S.Profile>
        )}
        <S.Wrapper>
          {edit ? (
            <>
              <S.Wrapper3>
                <S.EditName
                  value={name}
                  onChange={(e: any) => {
                    setName(e.target.value);
                  }}
                ></S.EditName>
                <S.Confrim onClick={CEdit}>완료</S.Confrim>
              </S.Wrapper3>
              <S.EditExplain
                placeholder="자기소개"
                value={content}
                onChange={(e: any) => {
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
