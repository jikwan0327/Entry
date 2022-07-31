import styled from "styled-components";

const Tabel = () => {
    const N = 10;
    let no = new Array(N).fill(0);
    return (
        <Container>
            <Tables>
                <TabelHead>
                    <HeadNumber>No</HeadNumber>
                    <HeadTitle>제목</HeadTitle>
                </TabelHead>
                {no.map((no, index) => (
                    <TableBody>
                        <BodyNum key={index}>{index + 1}</BodyNum>
                        <BodyTitle>{no}s</BodyTitle>
                    </TableBody>
                ))}
            </Tables>
            <Btns>
                <LeftBtn>&lt;</LeftBtn>
                <NumBtn>1</NumBtn>
                <RightBtn>&gt;</RightBtn>
            </Btns>
        </Container>
    );
};

export default Tabel;

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const Tables = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    width: 1000px;
    height: 600px;
`;

const TabelHead = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1000px;
    height: 40px;
    border-top: 3px solid black;
    border-bottom: 3px solid black;
`;

const HeadNumber = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    font-size: 17px;
    font-weight: 500;
`;

const HeadTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 870px;
    font-size: 17px;
    font-weight: 600;
`;

const TableBody = styled.div`
    display: flex;
    justify-content: center;
    width: 1000px;
    height: 40px;
    border-bottom: 1px solid #cccccc;
`;

const BodyNum = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    color: #5f5f5f;
    border-right: 1px solid #cccccc;
`;

const BodyTitle = styled.div`
    display: flex;
    align-items: center;
    width: 870px;
    padding-left: 50px;
    color: #5f5f5f;
`;

const Btns = styled.div``;

const LeftBtn = styled.button`
    all: unset;
    margin-right: 10px;
`;

const RightBtn = styled.button`
    all: unset;
    margin-right: 10px;
`;

const NumBtn = styled.button`
    all: unset;
    margin-right: 10px;
`;
