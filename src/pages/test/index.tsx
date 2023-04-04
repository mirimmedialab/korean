import styled from "@emotion/styled";
import { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import { BsHeadphones } from "react-icons/bs";
import { Timer } from "@/components";
import Image from "next/image";
import {IoIosArrowBack} from "react-icons/io";
import {useRouter} from "next/router";

export default function Test() {
  const [show, setShow] = useState<boolean>(false);
  const [idx, setIdx] = useState<number>(0);

  const array = [
    { word: "Mad", mean: "미친, 정신이상인" },
    { word: "Upset", mean: "화난, 속상한" },
    { word: "Crazy", mean: "미친, 정신 나간" },
  ];

  function showMeanHandler() {
    setShow(!show);
    console.log("클릭");
    console.log(show);
  }

  function indexLeftHandler() {
    setIdx((prevIdx) => (prevIdx - 1 < 0 ? 0 : prevIdx - 1));
    setShow(false);
  }

  function indexRightHandler() {
    setIdx((prevIdx) =>
      prevIdx + 1 > array.length - 1 ? array.length - 1 : prevIdx + 1
    );
    setShow(false);
  }

  const router = useRouter()

  const handleBack = () => {
    router.replace('/voca-list')
  }

  return (
    <Container>
      <Box>
        <Title>
          <IoIosArrowBack  style={{fontSize:'24px' , display:'flex' , alignItems:'center'}} onClick={handleBack}  />
          <LearningListHeaderTypo>Part 1</LearningListHeaderTypo>
        </Title>
        <Section>
          <Timer />
          <ImgWrapper>
            <Image
              alt="사진"
              width={360}
              height={250}
              style={{
                position: "absolute",
                top: "10%",
                left: "-0%",
              }}
              src={`https://cdn.discordapp.com/attachments/1092315426643529748/1092362861810044979/note.png`}
            ></Image>
            <Voca>
              <h1>{array[idx].word}</h1>
              <Mean style={show ? { display: "block" } : { display: "none" }}>
                {array[idx].mean}
              </Mean>
            </Voca>
          </ImgWrapper>
          <Controller>
            <Wrapper>
              <Icon>
                <BiCaretLeft onClick={indexLeftHandler} />
              </Icon>
              <Icon>
                <BsHeadphones />
              </Icon>
              <Icon>
                <BiCaretRight onClick={indexRightHandler} />
              </Icon>
            </Wrapper>

            <ShowMean onClick={showMeanHandler}>뜻 보이기</ShowMean>
          </Controller>
        </Section>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  padding-bottom: 20px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LearningListHeaderTypo = styled.div`
  font-size: 20px;
  height: 24px;
  margin-left: 4px;
`

const Box = styled.div`
  max-width: 1024px;
  width: 100%;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  //height: 46px;
  //line-height: 46px;
  //display: flex;
  //align-items: center;
  //h1 {
  //  font-size: 20px;
  //}

  display: flex;
  align-items: center;
  padding: 12px 4px;
  border-bottom: 1px solid #cccccc;
`;
const ImgWrapper = styled.div`
  position: relative;
  width: 360px;
`;
const Voca = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 200;

  /* background: url("https://cdn.discordapp.com/attachments/1092315426643529748/1092362861810044979/note.png") */
  /* no-repeat center; */
  /* background-size: cover; */

  /* width: 100%; */
  height: 300px;

  margin: 20px 0;

  h1 {
    font-size: 30px;
  }

  p {
    font-size: 18px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  font-size: 30px;
  gap: 50px;
`;

const Icon = styled.div`
  cursor: pointer;
`;

const Controller = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 30px 0;
  gap: 30px;

  color: rgb(52, 152, 219);
`;
const ShowMean = styled.div`
  display: flex;
  cursor: pointer;
`;

const Mean = styled.div``;
