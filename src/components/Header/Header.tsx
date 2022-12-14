import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import Swal from "sweetalert2";
import Icon from "../../imgs/icon.png";

const Header = () => {
  const logout = () => {
    localStorage.removeItem("accessToken");
    Swal.fire("로그아웃 되었습니다", "", "info").then(() => {
      window.location.href = "/";
    });
  };

  const [ok, setOk] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
      setOk(true);
    } else {
      setOk(false);
    }
  }, [ok]);

  return (
    <S.Container>
      <S.Circle>
        <S.Img src={Icon} />
      </S.Circle>
      <Link to="/" style={{ textDecoration: "none" }}>
        <S.Logo>Entry DSM</S.Logo>
      </Link>
      {ok ? (
        <S.Wrapper>
          <Link to="/write" style={{ textDecoration: "none" }}>
            <S.SignUp>게시글 작성</S.SignUp>
          </Link>
          <Link to="/my" style={{ textDecoration: "none" }}>
            <S.SignUp>마이페이지</S.SignUp>
          </Link>
          <S.SignUp onClick={logout}>로그아웃</S.SignUp>
        </S.Wrapper>
      ) : (
        <S.Wrapper>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <S.SignUp>회원가입</S.SignUp>
          </Link>
          <S.Line></S.Line>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <S.SignUp>로그인</S.SignUp>
          </Link>
        </S.Wrapper>
      )}
    </S.Container>
  );
};

export default Header;
