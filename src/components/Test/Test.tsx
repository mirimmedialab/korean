import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import { BsHeadphones } from "react-icons/bs";
import { Timer } from "@/components";
import Image from "next/image";
import { useTts } from "tts-react";
import type { TTSHookProps } from "tts-react";
import { learningData } from "./learningData";
import router from "next/router";

export default function Test() {
  const [show, setShow] = useState<boolean>(false);
  const [idx, setIdx] = useState<number>(0);
  const [finalCount, setFinalCount] = useState<string>();

  function showMeanHandler() {
    setShow(!show);
  }

  const CustomTTSComponent = ({ children }: TTSHookProps) => {
    const selectedVoice = speechSynthesis
      .getVoices()
      .filter((r) => r.voiceURI === "Google US English");
    const { ttsChildren, state, play, stop, pause } = useTts({
      children,
      voice: selectedVoice[0],
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
  }

  function indexRightHandler() {
    setIdx((prevIdx) =>
      prevIdx + 1 > learningData.length - 1
        ? learningData.length - 1
        : prevIdx + 1
    );
    setShow(false);
    if (idx === learningData.length - 1) {
      alert(`테스트가 끝났습니다. ${finalCount}`);
      window.location.href = "/voca-list";
    }
  }

  return (
    <Container>
      <Box>
        <Title>
          <FiChevronLeft
            style={{ width: "35px", height: "35px" }}
            onClick={() => router.push(`/voca-list`)}
          />
          <h1>Part 1</h1>
        </Title>
        <hr />
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
              <h1>{learningData[idx].word}</h1>
              <Mean style={show ? { display: "block" } : { display: "none" }}>
                {learningData[idx].mean}
              </Mean>
            </Voca>
          </ImgWrapper>
          <Controller>
            <Wrapper>
              <Icon>
                <BiCaretLeft onClick={indexLeftHandler} />
              </Icon>
              <Icon>
                <CustomTTSComponent>
                  <h1>{learningData[idx].word}</h1>
                </CustomTTSComponent>
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
  height: 46px;
  line-height: 46px;
  display: flex;
  align-items: center;
  h1 {
    font-size: 20px;
  }
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
