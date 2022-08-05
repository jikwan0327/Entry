import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Tables = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 800px;
  height: 540px;
  margin-right: 120px;
`;

export const TabelHead = styled.div`
  display: flex;
  justify-content: center;
  width: 1000px;
  height: 40px;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
`;

export const HeadNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  font-size: 17px;
  font-weight: 500;
`;

export const HeadTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 870px;
  font-size: 17px;
  font-weight: 600;
`;

export const TableBody = styled.div`
  display: flex;
  justify-content: center;
  width: 1000px;
  height: 43px;
  border-bottom: 1px solid #cccccc;
`;

export const BodyNum = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  color: #5f5f5f;
  border-right: 1px solid #cccccc;
`;

export const BodyTitle = styled.div`
  display: flex;
  align-items: center;
  width: 870px;
  padding-left: 50px;
  color: #5f5f5f;
`;

export const Btns = styled.div`
  margin-left: 130px;
`;

export const LeftBtn = styled.button`
  all: unset;
  margin-right: 10px;
`;

export const RightBtn = styled.button`
  all: unset;
  margin-right: 10px;
`;

export const NumBtn = styled.button`
  all: unset;
  margin-right: 10px;
`;
