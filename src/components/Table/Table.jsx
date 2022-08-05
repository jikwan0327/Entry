import * as S from "./style.jsx";
import { ReqPostLists } from "../../utils/axios.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

let URL = "https://freshman.entrydsm.hs.kr";

const Table = () => {
  const [list, setList] = useState([]);
  const [currentNum, setCurrnetNum] = useState(1);
  let arr = Array.from({ length: parseInt(list.length / 10) + 1 }, () => 0);

  useEffect(() => {
    const getLists = () => {
      axios.get(`${URL}/posts/lists`).then((res) => {
        setList(res.data.post_list);
      });
    };
    getLists();
  }, []);

  return (
    <S.Container>
      <S.Tables>
        <S.TabelHead>
          <S.HeadNumber>No</S.HeadNumber>
          <S.HeadTitle>제목</S.HeadTitle>
        </S.TabelHead>
        {list.map((no, index) => (
          <S.TableBody>
            <S.BodyNum key={index}>{index + 1}</S.BodyNum>
            <Link to="/board" style={{ textDecoration: "none" }} state={{ data: no.id }}>
              <S.BodyTitle>{no.title}</S.BodyTitle>
            </Link>
          </S.TableBody>
        ))}
      </S.Tables>
      <S.Btns>
        <S.LeftBtn
          onClick={() => {
            if (currentNum !== 1) setCurrnetNum(currentNum - 1);
          }}
        >
          &lt;
        </S.LeftBtn>
        {arr.map((num, index) => (
          <S.NumBtn
            style={currentNum - 1 === index ? { color: "#5F85BB" } : { color: "black" }}
            onClick={() => {
              setCurrnetNum(index + 1);
            }}
            key={index}
          >
            {index + 1}
          </S.NumBtn>
        ))}
        <S.RightBtn
          onClick={() => {
            if (currentNum !== arr.length) setCurrnetNum(currentNum + 1);
          }}
        >
          &gt;
        </S.RightBtn>
      </S.Btns>
    </S.Container>
  );
};

export default Table;
