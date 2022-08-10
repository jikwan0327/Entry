import styled from "styled-components";

interface Fillprops {
  fill: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  height: 700px;
  border-radius: 8px;
  background-color: white;
`;

export const Title = styled.input`
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

export const Detail = styled.textarea`
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

export const Posting = styled.button<Fillprops>`
  width: 130px;
  height: 40px;
  background-color: ${(props) => (props.fill ? "#5F85BB" : "lightgray")};
  border-radius: 8px;
  color: white;
  border: 0;
  outline: 0;
  font-size: 18px;
  font-family: Noto Sans KR;
  font-weight: 500;
  margin-top: 40px;
`;
