import styled from "styled-components";

interface Fillprops {
  fill: string;
}

interface SaveIdprops {
  saveId: boolean;
}

export const Container = styled.div`
  height: 550px;
  width: 450px;
  background-color: white;
  border-radius: 12px;
`;

export const LoginMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  font-size: 25px;
  font-weight: 600;
  margin-top: 80px;
`;

export const Wrapper = styled.div`
  margin-left: 70px;
  margin-top: 80px;
`;

export const ID = styled.div`
  color: black;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 20px;
`;

export const IDInput = styled.input`
  margin-top: 10px;
  border: 1px solid darkgray;
  width: 297px;
  height: 35px;
  outline: 0;
  border-radius: 5px;
  padding-left: 10px;
`;

export const PW = styled.div`
  color: black;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 20px;
`;

export const PWInput = styled.input`
  margin-top: 10px;
  border: 1px solid darkgray;
  width: 297px;
  height: 35px;
  outline: 0;
  border-radius: 5px;
  padding-left: 10px;
`;

export const CheckBox = styled.div<SaveIdprops>`
  width: 18px;
  height: 18px;
  border-radius: 50px;
  border: 1px solid darkgray;
  margin-right: 6px;
  background-color: ${(props) => (props.saveId ? "black" : "white")};
`;

export const SaveID = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const Save = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const Confirm = styled.div<Fillprops>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 310px;
  height: 40px;
  background-color: ${(props) => props.fill};
  border-radius: 4px;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
`;

export const Eye = styled.img`
  position: absolute;
  margin-top: 20px;
  margin-left: 280px;
`;
