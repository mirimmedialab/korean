import styled from "@emotion/styled";
import { FaRegStar, FaStar } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import React, { useRef, useState } from "react";
import { useTts } from "tts-react";
import type { TTSHookProps } from "tts-react";

interface Props {
  seq: number;
  isLearning: boolean;
  isFavorite: boolean;
  word: string;
  mean: string;
  mean2: string;
  audio: string;
}
export function LearningCard({ seq, isLearning, isFavorite, word, mean2, mean, audio }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handlePlayAudio = async () => {
    // if(audioRef.current){
    // audioRef.current.src = url;
    // audioRef.current?.play().then(r=>console.log('오디오가 실행되었습니다', r));
    // }
  };
  const CustomTTSComponent = ({ children }: TTSHookProps) => {
    const selectedVoice = speechSynthesis.getVoices().filter((r) => r.voiceURI === "Google US English");
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
        <HiSpeakerWave onClick={handlePlay} />
      </>
    );
  };

  return (
    <Div>
      <LearningCardContainer>
        {/* 여기 */}
        <LearningCardSection onClick={handleOpen}>
          <LearningCardWrapper>
            {/*{isLearning ? <LearningCardBlock >학습</LearningCardBlock> : <LearningCardBlock style={{color:'red'}} >미학습 </LearningCardBlock>}*/}
            <LearningCardBlock style={{ color: "hotpink" }}>#{seq}</LearningCardBlock>
            <LearningCardBlock>{isFavorite ? <FaStar /> : <FaRegStar />}</LearningCardBlock>
          </LearningCardWrapper>
          <LearningCardContent>{word}</LearningCardContent>
          <LearningCardWrapper>
            <div />
            {/*<audio ref={audioRef}  />*/}
            <CustomTTSComponent>
              <p>{word}</p>
            </CustomTTSComponent>
          </LearningCardWrapper>
        </LearningCardSection>
        {/*{open && (*/}
        {/* ✅ 오픈 */}
        <LearningCardMeanSection className={open ? "active" : "close"}>
          <LearningCardMeanWrapper>
            <LearningCardMeanContent>{mean}</LearningCardMeanContent>
          </LearningCardMeanWrapper>
          {/*<LearningCardMeanWrapper>*/}
          {/* <LearningCardMeanContent>{mean2}</LearningCardMeanContent> */}
          {/*</LearningCardMeanWrapper>*/}
        </LearningCardMeanSection>
        {/*)}*/}
      </LearningCardContainer>
    </Div>
  );
}

const Div = styled.div``;
const LearningCardContainer = styled.div`
  color: black;
  margin: 8px 0;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  /* box-shadow: rgba(0, 0, 0, 0.2) 10px 10px 10px 0px; */
  border-radius: 16px;
  .active {
    //transform: translate(0,0%);
    height: 78px;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
  }
  .close {
    height: 0;
    overflow: hidden;
    //transform: translate(0,-100%);
    transition: all 0.2s ease-in-out;
  }
  width: 290px;
`;
const LearningCardSection = styled.section`
  position: relative;
  padding: 16px;
  border-radius: 16px;
  background-color: white;
  cursor: pointer;
  z-index: 20;
`;
const LearningCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LearningCardBlock = styled.div``;

const LearningCardContent = styled.div`
  font-weight: bold;
  font-size: 28px;
  padding: 36px 0px;
  display: flex;
  justify-content: center;
`;

const LearningCardMeanSection = styled.section`
  //margin-top: 12px;
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 100%;
  border-radius: 0 0 16px 16px;
  z-index: 10;
`;
const LearningCardMeanWrapper = styled.div`
  width: 100%; ;
`;
const LearningCardMeanContent = styled.div`
  //border-radius: 0 0 8px 8px;
  color: white;
  background-color: hotpink;
  border-radius: 0 0 16px 16px;
  box-shadow: rgba(0, 0, 0, 0.2) 10px 10px 10px 0px;
  padding: 24px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  height: 100%;
  box-sizing: border-box;
  word-break: keep-all;
  text-align: center;
`;
