import Image from "next/image";
// import { Image } from "@/components/Image";
import styled from "@emotion/styled";

export const Loading = () => {
  return (
    <LoadingContainor>
      {/* <Image src="/assets/images/example.gif" alt="loading" width={500} height={500} /> */}
      <Image
        src="https://cdn.discordapp.com/attachments/1079706164994002944/1092635106172211301/ezgif.com-gif-maker.gif"
        alt="example"
        width={300}
        height={300}
      />
      <LoadingTitle>나만의 영단어장</LoadingTitle>
    </LoadingContainor>
  );
};

const LoadingContainor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoadingTitle = styled.p`
  font-size: 24px;
`;
