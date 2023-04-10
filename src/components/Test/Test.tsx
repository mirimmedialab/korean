import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import { BsHeadphones } from "react-icons/bs";
// import { Timer } from "@/components";
import { Timer } from "../Timer";
import Image from "next/image";
import { useTts } from "tts-react";
import type { TTSHookProps } from "tts-react";
import { learningData } from "./learningData";
import router from "next/router";
import { IoIosArrowBack } from "react-icons/io";
import {data5, data6} from "@/components/Learning/koreanData";

export const category = "category";

export default function Test() {
  const [show, setShow] = useState<boolean>(false);
  let [idx, setIdx] = useState<number>(0);
  const [finalCount, setFinalCount] = useState<string>();
  const [answerCount, setAnswerCount] = useState<number>(0);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  let category: string | null = (localStorage.getItem("category") as string).trim();
  let num: string | null = localStorage.getItem("number");
  let level = localStorage.getItem('level');

  let data = [];

  if(level === '5'){
    //@ts-ignore
    data = data5
  }
  else{
    //@ts-ignore
    data = data6
  }


  if (num !== null) {
    var no = parseInt(num);
  }

  switch (category) {
    case "명사 noun":
      category = "noun";
      break;
    case "동사 verb":
      category = "verb";
      break;
    case "형용사 adjective":
      category = "adjective";
      break;
    case "부사 adverb":
      category = "adverb";
      break;
  }

  function showMeanHandler() {
    setShow(!show);
  }

  const CustomTTSComponent = ({ children }: TTSHookProps) => {
    const selectedVoice = speechSynthesis
      .getVoices()
      .filter((r) => r.voiceURI === "유나");
    const { ttsChildren, state, play, stop, pause } = useTts({
      children,
      voice: selectedVoice[0],
      rate: 0.8
    });

    const handlePlay = (e: React.MouseEvent<HTMLOrSVGElement>) => {
      e.stopPropagation();
      play();
    };

    return (
      <>
        <BsHeadphones onClick={handlePlay} />
      </>
    );
  };

  function indexLeftHandler() {
    setIdx((prevIdx) => (prevIdx - 1 < 0 ? 0 : prevIdx - 1));
    setShow(false);
    setIsChecked(false);
  }

  // function indexRightHandler() {
  //   setIdx((prevIdx) =>
  //     prevIdx + 1 > learningData[0][category].length - 1
  //       ? learningData[0][category].length - 1
  //       : prevIdx + 1
  //   );
  //   setShow(false);
  //   if (idx === learningData[0][category].length - 1) {
  //     alert(`테스트가 끝났습니다.
  //     소요시간 : ${finalCount}
  //     정답갯수 : ${answerCount}`);
  //     window.location.href = "/voca-list";
  //   }
  //   setIsChecked(false);
  // }

  function indexRightHandler() {
    setIdx((prevIdx) => (prevIdx + 1 > no - 1 ? no - 1 : prevIdx + 1));
    setShow(false);
    if (idx === no - 1) {
      alert(`테스트가 끝났습니다.
      소요시간 : ${finalCount}
      정답갯수 : ${answerCount}`);
      window.location.href = "/voca-list";
    }
    setIsChecked(false);
  }

  function handleBack() {
    router.push(`/voca-list`);
  }

  function answerCheck() {
    setAnswerCount(answerCount + 1);
    setIsChecked(!isChecked);
  }

  // @ts-ignore
  return (
    <Container>
      <Box>
        <Title>
          <IoIosArrowBack
            style={{
              fontSize: "24px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={handleBack}
          />
          <LearningListHeaderTypo>첫 단원</LearningListHeaderTypo>
        </Title>
        <Section>
          <Timer setFinalCount={setFinalCount} />
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
              {/*@ts-ignore*/}
              <h1>{data[0][category][idx].word}</h1>
              <Mean style={show ? { display: "flex" } : { display: "none" }}>
                {/*@ts-ignore*/}
                {data[0][category][idx].mean}
                <br />
              </Mean>
            </Voca>{" "}
            <CheckBox style={show ? { display: "flex" } : { display: "none" }}>
              정답체크
              <input
                type="checkbox"
                checked={isChecked}
                onChange={answerCheck}
              />
            </CheckBox>
          </ImgWrapper>
          <Controller>
            <Wrapper>
              <Icon>
                <BiCaretLeft
                  style={{ cursor: "pointer" }}
                  onClick={indexLeftHandler}
                />
              </Icon>
              <Icon>
                <CustomTTSComponent>
                  {/*@ts-ignore*/}
                  <h1>{data[0][category][idx].word}</h1>
                </CustomTTSComponent>
              </Icon>
              <Icon>
                <BiCaretRight
                  style={{ cursor: "pointer" }}
                  onClick={indexRightHandler}
                />
              </Icon>
            </Wrapper>

            <ShowMean onClick={showMeanHandler}>뜻 보이기</ShowMean>
          </Controller>
        </Section>
      </Box>
    </Container>
  );
}

const LearningListHeaderTypo = styled.div`
  font-size: 20px;
  height: 24px;
  margin-left: 4px;
  display: flex;
  align-items: center;
`;
const Container = styled.div`
  background-color: white;
  padding-bottom: 20px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
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
  height: 270px;

  margin: 20px 0;

  h1 {
    font-size: 28px;
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

const Mean = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
const Button = styled.button``;
const CheckBox = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  font-size: 18px;
`;
