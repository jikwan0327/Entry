import styled from "styled-components";
import Header from "../components/Header/Header";
import Tabel from "../components/Tabel";

const MainPage = () => {
    return (
        <Container>
            <Header></Header>
            <PostList>게시물 목록</PostList>
            <Tabel></Tabel>
        </Container>
    );
};

export default MainPage;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    min-width: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
`;

const PostList = styled.div`
    font-family: Noto Sans KR;
    font-size: 32px;
    font-weight: 700;
    line-height: 46px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 130px;
    margin-left: 400px;
`;
