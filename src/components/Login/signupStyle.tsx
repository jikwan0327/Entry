import styled from "styled-components";

interface Fillprops {
  fill: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 600px;
  width: 450px;
  background-color: white;
`;

export const Wrapper = styled.div`
  width: 300px;
`;

export const SignUpMessage = styled.div`
  color: black;
  font-family: Noto Sans KR;
  font-size: 31px;
  font-weight: 700;
  line-height: 46px;
  text-align: left;
  margin-top: 45px;
`;

export const Name = styled.div`
  color: black;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 20px;
`;

export const NameInput = styled.input`
  margin-top: 10px;
  border: 1px solid darkgray;
  width: 300px;
  height: 35px;
  outline: 0;
  border-radius: 5px;
  padding-left: 10px;
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
  width: 300px;
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
  width: 300px;
  height: 35px;
  outline: 0;
  border-radius: 5px;
  padding-left: 10px;
`;

export const PWAgain = styled.div`
  color: black;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 20px;
`;

export const PWAgainInput = styled.input`
  margin-top: 10px;
  border: 1px solid darkgray;
  width: 300px;
  height: 35px;
  outline: 0;
  border-radius: 5px;
  padding-left: 10px;
`;

export const ConfirmBtn = styled.div<Fillprops>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 314px;
  height: 40px;
  margin-top: 30px;
  font-size: 18px;
  border-radius: 4px;
  background-color: ${(props) => props.fill};
  font-family: Noto Sans KR;
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
