import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 7.5%;
  left: 0px;
  top: 0px;
  background-color: #5f85bb;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5%;
  height: 65%;
  /* white */
  background: #ffffff;
  border-radius: 50%;
  margin-left: 20%;
`;

export const Img = styled.img`
  width: 50%;
  height: 50%;
`;

export const Logo = styled.div`
  /* Entry DSM */
  display: flex;
  align-items: center;
  width: 200px;
  height: 29px;
  top: 25px;
  margin-left: 10px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 1.2vw;
  line-height: 29px;
  color: #ffffff;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 32%;
  width: 350px;
  min-width: 350px;
`;

export const SignUp = styled.div`
  margin-left: 10px;
  height: 23px;
  margin-right: 18px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #ffffff;
  border-radius: nullpx;
  font-family: Noto Sans KR;
  font-size: 1vw;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  &:hover {
    text-decoration: underline;
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 26.67px;
  left: 1476px;
  top: 27px;
  margin-right: 10px;
  background: #ffffff;
`;
