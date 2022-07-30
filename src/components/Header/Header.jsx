import { Link } from "react-router-dom";
import styled from "styled-components";
import * as S from "./style.jsx";

const Header = () => {
    return (
        <S.Container>
            <S.Circle></S.Circle>
            <S.Entry></S.Entry>
            <S.Entry1></S.Entry1>
            <S.Entry2></S.Entry2>
            <S.Entry3></S.Entry3>
            <Link to="/">
                <S.Logo>Entry DSM</S.Logo>
            </Link>
            <Link to="/signup">
                <S.SignUp>회원가입</S.SignUp>
            </Link>
            <S.Line></S.Line>
            <Link to="/login">
                <S.Login>로그인</S.Login>
            </Link>
        </S.Container>
    );
};

export default Header;
