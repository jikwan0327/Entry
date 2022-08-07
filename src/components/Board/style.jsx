import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  width: 900px;
  height: 520px;
  flex-direction: column;
  padding-right: 40px;
  border-bottom: 2px solid black;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 900px;
  height: 30px;
  border-top: 2px solid black;
  border-bottom: 1px solid lightgray;
`;

export const Title = styled.div``;

export const PostMan = styled.div``;

export const TitleInput = styled.input`
  outline: 0;
  padding: 10px;
`;

export const BodyInput = styled.input`
  outline: 0;
  margin-left: 30px;
  margin-top: 30px;
  padding-bottom: 400px;
`;

export const Body = styled.div`
  padding: 30px;
  outline: 0;
`;

export const EditBtn = styled.button`
  margin-left: 30px;
  border: 0;
  outline: 0;
  background-color: #5f85bb;
  width: 110px;
  height: 45px;
  color: white;
  border-radius: 100px;
  font-size: 15px;
  font-family: Noto Sans KR;
  margin-top: 50px;
  font-weight: 600;
`;
export const BtnContainer = styled.div`
  margin-left: 660px;
`;
