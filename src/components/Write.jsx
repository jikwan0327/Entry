import styled from "styled-components";

const Write = () => {
    return (
        <Container>
            <Title placeholder="제목을 입력해 주세요."></Title>
            <Detail placeholder="내용을 입력해 주세요."></Detail>
            <Posting>게시하기</Posting>
        </Container>
    );
};

export default Write;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1000px;
    height: 700px;
    border-radius: 8px;
    background-color: white;
`;

const Title = styled.input`
    width: 800px;
    height: 40px;
    border: 0;
    outline: 0;
    background-color: #f9f9f9;
    color: normal gray;
    border-radius: 8px;
    border: 1px solid lightgray;
    padding-left: 10px;
    margin-top: 80px;
    font-size: 16px;
`;

const Detail = styled.textarea`
    width: 800px;
    height: 400px;
    border: 0;
    outline: 0;
    background-color: #f9f9f9;
    color: normal gray;
    border-radius: 8px;
    border: 1px solid lightgray;
    padding-left: 10px;
    padding-top: 10px;
    margin-top: 35px;
    font-size: 16px;
    color: normal gray;
`;

const Posting = styled.button`
    width: 130px;
    height: 40px;
    background-color: lightgray;
    background-color: #e0e0e0;
    border-radius: 8px;
    color: white;
    border: 0;
    outline: 0;
    font-size: 18px;
    font-family: Noto Sans KR;
    font-weight: 500;
    margin-top: 40px;
`;
