import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 150px;
  justify-content: center;
  margin-right: 40px;
`;

export const ImgWrapper = styled.div`
  margin-right: 790px;
`;

export const Hover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
  border-radius: 50px;
  position: absolute;
  width: 70px;
  height: 70px;
  margin-right: 790px;
  background-color: rgb(0, 0, 0, 0.4);
`;

export const Profile = styled.img`
  width: 70px;
  height: 70px;
  max-width: 70px;
  max-height: 70px;
  min-width: 70px;
  min-height: 70px;
  border-radius: 500px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 750px;
  flex-wrap: wrap;
  margin-left: 40px;
  margin-top: 8px;
`;

export const Wrapper2 = styled.div`
  display: flex;
`;

export const Wrapper3 = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.div`
  font-size: 27px;
  font-weight: 600;
`;

export const Explain = styled.div`
  margin-top: 10px;
  font-size: 19px;
  font-weight: 600;
`;

export const MyPosting = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 820px;
  margin-top: 30px;
  font-weight: 800;
  font-size: 20px;
`;

export const EditImg = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 15px;
`;

export const Confrim = styled.button`
  border-radius: 100px;
  width: 85px;
  height: 35px;
  border: 0;
  outline: 0;
  background-color: #5f85bb;
  color: white;
  font-size: 15px;
  font-weight: 600;
`;

export const EditName = styled.input`
  width: 100px;
  height: 30px;
  border: 0;
  outline: 0;
  border-bottom: 1px solid darkgray;
  font-size: 16px;
`;

export const EditExplain = styled.textarea`
  width: 800px;
  height: 42px;
  border: 0;
  border: 1px solid darkgray;
  border-radius: 8px;
  padding-left: 10px;
  padding-top: 5px;
  margin-top: 8px;
`;
