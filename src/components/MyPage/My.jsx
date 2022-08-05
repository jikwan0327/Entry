import Basic from "../../imgs/profile.png";
import * as S from "./style.jsx";

const My = () => {
  return (
    <>
      <S.Container>
        <S.Profile src={Basic}></S.Profile>
        <S.Wrapper>
          <S.Name>이름</S.Name>
          <S.Explain>
            엔트리는 우리 학교의 최고의 동아리이며, 학생들의 입학부터 취업까지 도와주는 엄청난 동아리 라고 할 수 있죠
          </S.Explain>
        </S.Wrapper>
      </S.Container>
      <S.MyPosting>나의 게시물</S.MyPosting>
    </>
  );
};

export default My;
