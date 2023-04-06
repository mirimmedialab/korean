import Image from "next/image";
import styled from "@emotion/styled";

export const Loading = () => {
  return (
    <LoadingContainor>
        <ImageWapper>
                <Image
                    src="https://cdn.discordapp.com/attachments/1079706164994002944/1092635106172211301/ezgif.com-gif-maker.gif"
                    alt="example"
                    width={360}
                    height={360}
                />
        </ImageWapper>
      <LoadingTitle>나만의 한국어 단어장 로딩중 ...</LoadingTitle>
    </LoadingContainor>
  );
};

const LoadingContainor = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: white;
`;
const LoadingTitle = styled.p`
  position: relative;
  font-size: 24px;
  color: black;
`;

const ImageWapper= styled.div`
  margin: 0 auto;
  width: fit-content;
    
`