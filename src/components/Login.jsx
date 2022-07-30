import styled from "styled-components";

const Login = () => {
    return (
        <>
            <Container>
                <LoginMessage>로그인</LoginMessage>
                <Wrapper>
                    <ID>아이디</ID>
                    <IDInput placeholder="아이디를 입력해주세요."></IDInput>
                    <PW>비밀번호</PW>
                    <PWInput placeholder="비밀번호를 입력해주세요."></PWInput>
                    <Save>
                        <CheckBox></CheckBox>
                        <SaveID>아이디 저장</SaveID>
                    </Save>
                    <Confirm>완료</Confirm>
                </Wrapper>
            </Container>
        </>
    );
};

export default Login;

const Container = styled.div`
    height: 550px;
    width: 450px;
    background-color: white;
    border-radius: 12px;
`;

const LoginMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    font-size: 25px;
    font-weight: 600;
    margin-top: 80px;
`;

const Wrapper = styled.div`
    margin-left: 70px;
    margin-top: 80px;
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
    width: 297px;
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
    width: 297px;
    height: 35px;
    outline: 0;
    border-radius: 5px;
    padding-left: 10px;
`;

const CheckBox = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 50px;
    border: 1px solid darkgray;
    margin-right: 6px;
`;

const SaveID = styled.div`
    font-size: 18px;
    font-weight: 500;
`;

const Save = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`;

const Confirm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    width: 310px;
    height: 40px;
    background-color: lightgray;
    border-radius: 4px;
    font-family: Noto Sans KR;
    font-size: 18px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
`;
