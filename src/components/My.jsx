import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import styled from "styled-components";
import Basic from "../imgs/profile.png";

const My = () => {
  return (
    <>
      <Container>
        <Profile src={Basic}></Profile>
        <Wrapper>
          <Name>이름</Name>
          <Explain>
            엔트리는 우리 학교의 최고의 동아리이며, 학생들의 입학부터 취업까지 도와주는 엄청난 동아리 라고 할 수 있죠
          </Explain>
        </Wrapper>
      </Container>
      <MyPosting>나의 게시물</MyPosting>
    </>
  );
};

export default My;

const Container = styled.div`
  display: flex;
  margin-top: 150px;
  margin-left: 500px;
`;

const Profile = styled.img`
  width: 100px;
  height: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 750px;
  flex-wrap: wrap;
  margin-left: 40px;
  margin-top: 8px;
`;

const Name = styled.div`
  font-size: 27px;
  font-weight: 600;
`;

const Explain = styled.div`
  margin-top: 10px;
  font-size: 19px;
  font-weight: 600;
`;

const MyPosting = styled.div`
  margin-left: 500px;
  margin-top: 60px;
  font-weight: 800;
  font-size: 20px;
`;
