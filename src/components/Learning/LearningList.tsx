import React from "react";
import styled from "@emotion/styled";
import { IoIosArrowBack } from "react-icons/io";
// import { learningData } from "@/components/Learning/data";
import { learningData } from "../Learning/data";
// import { LearningCard } from "@/components/Learning/LearningCard";
import { LearningCard } from "./LearningCard";
import { useRouter } from "next/router";
import {data5, data6} from "@/components/Learning/koreanData";

export default function LearningList() {
  const router = useRouter();

  const handleBack = () => {
    router.replace("/voca-list");
  };

  let category: string | null = localStorage.getItem("category") as string;
  let num: string | null = localStorage.getItem("number");
  let level = localStorage.getItem('level')

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

  let data =[];
  if(level === '5'){
    // @ts-ignore
    data= data5[0][category];
  }
  else{
    // @ts-ignore
    data = data6[0][category]
  }

  return (
    <LearningListContainer>
      <LearningListHeader>
        <IoIosArrowBack style={{ fontSize: "24px", display: "flex", alignItems: "center" }} onClick={handleBack} />
        <LearningListHeaderTypo>첫 단원</LearningListHeaderTypo>
      </LearningListHeader>
      <LearningListBody>
        {data.slice(0, num).map((r : any) => (
          <LearningCard
            key={r.seq}
            seq={r.seq}
            isLearning={r.isLearning}
            isFavorite={r.isFavorite}
            word={r.word}
            mean={r.mean}
            mean2={r.mean2}
            audio={r.audio}
          />
        ))}
      </LearningListBody>
    </LearningListContainer>
  );
}

const LearningListContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: auto;
`;
const LearningListHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 12px 4px;
  border-bottom: 1px solid #cccccc;
`;
const LearningListHeaderTypo = styled.div`
  font-size: 20px;
  height: 24px;
  margin-left: 4px;
`;

const LearningListBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  /* border: 1px solid red; */
  padding: 20px;
  /* margin-right: 10px; */
`;
