import styled from "styled-components";

const Board = () => {
    return (
        <>
            <Container>
                <Header>
                    <Title>제목</Title>
                    <PostMan>게시자</PostMan>
                </Header>
                <Body>엔트리 프론트엔드 인턴 게시판 상세보기 디자인입니다.</Body>
            </Container>
            <EditBtn>수정하기</EditBtn>
        </>
    );
};

export default Board;

const Container = styled.div`
    display: flex;
    width: 900px;
    height: 600px;
    flex-direction: column;
    padding-right: 40px;
    border-bottom: 2px solid black;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    width: 900px;
    height: 30px;
    border-top: 2px solid black;
    border-bottom: 1px solid lightgray;
`;

const Title = styled.div``;

const PostMan = styled.div``;

const Body = styled.div`
    padding: 30px;
`;

const EditBtn = styled.button`
    position: absolute;
    border: 0;
    outline: 0;
    background-color: #5f85bb;
    width: 110px;
    height: 45px;
    color: white;
    border-radius: 100px;
    top: 820px;
    right: 555px;
    font-size: 15px;
    font-family: Noto Sans KR;
    font-weight: 600;
`;
