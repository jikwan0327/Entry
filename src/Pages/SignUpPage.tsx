import styled from "styled-components";
import Header from "../components/Header/Header";
import SignUp from "../components/Login/Signup";

function SignUpPage() {
  return (
    <Container>
      <Header />
      <SignUp />
    </Container>
  );
}

export default SignUpPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  min-width: 100vh;
  background-color: #e0e0e0;
  overflow-x: hidden;
  overflow-y: hidden;
`;
