import styled from "styled-components";

function SignUp() {
    return (
        <Container>
            <Wrapper>
                <SignUpMessage>회원가입</SignUpMessage>
                <Name>이름</Name>
                <NameInput placeholder="이름을 입력해주세요"></NameInput>
                <ID>아이디</ID>
                <IDInput placeholder="아이디를 입력해주세요."></IDInput>
                <PW>비밀번호</PW>
                <PWInput placeholder="비밀번호를 입력해주세요."></PWInput>
                <PWAgain>비밀번호 확인</PWAgain>
                <PWAgainInput placeholder="비밀번호를 한번 더 입력해주세요."></PWAgainInput>
                <ConfirmBtn>확인</ConfirmBtn>
            </Wrapper>
        </Container>
    );
}

export default SignUp;

const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 600px;
    width: 450px;
    background-color: white;
`;

const Wrapper = styled.div`
    width: 300px;
`;

const SignUpMessage = styled.div`
    color: black;
    font-family: Noto Sans KR;
    font-size: 31px;
    font-weight: 700;
    line-height: 46px;
    text-align: left;
    margin-top: 45px;
`;

const Name = styled.div`
    color: black;
    font-family: Noto Sans KR;
    font-size: 18px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 20px;
`;

const NameInput = styled.input`
    margin-top: 10px;
    border: 1px solid darkgray;
    width: 300px;
    height: 35px;
    outline: 0;
    border-radius: 5px;
    padding-left: 10px;
`;

const ID = styled.div`
    color: black;
    font-family: Noto Sans KR;
    font-size: 18px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 20px;
`;

const IDInput = styled.input`
    margin-top: 10px;
    border: 1px solid darkgray;
    width: 300px;
    height: 35px;
    outline: 0;
    border-radius: 5px;
    padding-left: 10px;
`;

const PW = styled.div`
    color: black;
    font-family: Noto Sans KR;
    font-size: 18px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 20px;
`;

const PWInput = styled.input`
    margin-top: 10px;
    border: 1px solid darkgray;
    width: 300px;
    height: 35px;
    outline: 0;
    border-radius: 5px;
    padding-left: 10px;
`;

const PWAgain = styled.div`
    color: black;
    font-family: Noto Sans KR;
    font-size: 18px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 20px;
`;

const PWAgainInput = styled.input`
    margin-top: 10px;
    border: 1px solid darkgray;
    width: 300px;
    height: 35px;
    outline: 0;
    border-radius: 5px;
    padding-left: 10px;
`;

const ConfirmBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 314px;
    height: 40px;
    margin-top: 30px;
    font-size: 18px;
    border-radius: 4px;
    background-color: lightgray;
    font-family: Noto Sans KR;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
`;
