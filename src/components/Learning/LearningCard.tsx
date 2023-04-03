import styled from "@emotion/styled";
import {FaRegStar,FaStar} from 'react-icons/fa'
import {HiSpeakerWave} from 'react-icons/hi2'
import React, {useRef, useState} from "react";
import { useTts } from 'tts-react'
import type { TTSHookProps } from 'tts-react'

interface Props {
    seq:number;
    isLearning:boolean;
    isFavorite:boolean;
    word:string;
    mean:string;
    mean2:string;
    audio:string
}
export function LearningCard({seq,isLearning,isFavorite,word,mean2,mean,audio}:Props){
    const [open ,setOpen ] = useState<boolean>(false)
    const audioRef = useRef<HTMLAudioElement >(null)

    const handleOpen = (e:React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        setOpen(prev => !prev)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const handlePlayAudio = async () => {
        // if(audioRef.current){
            // audioRef.current.src = url;
            // audioRef.current?.play().then(r=>console.log('오디오가 실행되었습니다', r));
        // }
    }


    const CustomTTSComponent = ({children}: TTSHookProps) =>{
        const selectedVoice = speechSynthesis.getVoices().filter(r=>r.voiceURI === 'Google US English')
        console.log(speechSynthesis.getVoices())
        const {ttsChildren,state,play,stop,pause} = useTts({
            children,
            voice: selectedVoice[0]
        })

        const handlePlay = (e:React.MouseEvent<HTMLOrSVGElement>) => {
            e.stopPropagation();
            play();
        }

        return<><HiSpeakerWave onClick={handlePlay} /></>
    }

    return (
        <LearningCardContainer>
            <LearningCardSection onClick={handleOpen}>
                <LearningCardWrapper>
                    {/*{isLearning ? <LearningCardBlock >학습</LearningCardBlock> : <LearningCardBlock style={{color:'red'}} >미학습 </LearningCardBlock>}*/}
                    <LearningCardBlock style={{color:'hotpink'}} >#{seq}</LearningCardBlock>
                    <LearningCardBlock>{isFavorite ? <FaStar /> : <FaRegStar /> }</LearningCardBlock>
                </LearningCardWrapper>
                <LearningCardContent>{word}</LearningCardContent>
                <LearningCardWrapper>
                    <div />
                    {/*<audio ref={audioRef}  />*/}
                    <CustomTTSComponent><p>{word}</p></CustomTTSComponent>
                </LearningCardWrapper>
            </LearningCardSection>
            {open && (
                <LearningCardMeanSection>
                    <LearningCardMeanWrapper>
                        <LearningCardMeanContent>{mean}</LearningCardMeanContent>
                    </LearningCardMeanWrapper>
                    <LearningCardMeanWrapper>
                        <LearningCardMeanContent>{mean2}</LearningCardMeanContent>
                    </LearningCardMeanWrapper>
                </LearningCardMeanSection>
            )}
        </LearningCardContainer>
    )
}

const LearningCardContainer = styled.div`
  color:black;
  margin: 12px 0;
`
const LearningCardSection = styled.section`
  padding:8px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 10px 10px 10px 0px;
  background-color: white;
`
const LearningCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const LearningCardBlock = styled.div``

const LearningCardContent = styled.div`
  font-weight: bold;
  font-size: 32px;
  padding: 36px 0px;
  display: flex;
  justify-content: center;
`

const LearningCardMeanSection = styled.section`
  //margin-top: 12px;
  display: flex;
  justify-content: space-between;
  height: 100%;
`
const LearningCardMeanWrapper = styled.div`
  width: 50%;
;
`
const LearningCardMeanContent = styled.div`

  //border-radius: 0 0 8px 8px;
  color:white;
  background-color:hotpink;
  box-shadow: rgba(0, 0, 0, 0.2) 10px 10px 10px 0px;
  padding: 24px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  height:100%;
  box-sizing: border-box;
  word-break: keep-all;
  text-align: center;
`
