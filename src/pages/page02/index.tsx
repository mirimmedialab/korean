import {Box, Container, Typography} from "@mui/material";
import styled from '@emotion/styled';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Page02() {
  return (
    <EmergencyBox>
      <Page02Container>
        <TitleSection>
          <FiChevronLeft style={{marginTop: '12px', fontSize: '1.7rem', lineHeight: '50px', fontWeight: '800'}}/>
          <Typography sx={{fontWeight: '800', fontSize: '1.5rem', lineHeight: '50px', marginLeft: '15px'}}>
            오늘의 영단어
          </Typography>
        </TitleSection>
        {[...Array(7)].map((value, index) => (
          <ListSection key={index}>
            <ListStatusBox>
              <Typography sx={{fontSize: '15px', lineHeight: '25px', ml: '5px'}}>미학습</Typography>
            </ListStatusBox>
            <ListTitleBox>
              <Typography sx={{fontSize: '25px', lineHeight: '40px', ml: '5px', width: '91%'}}>Part {index + 1}</Typography>
              <FiChevronRight style={{marginTop: '6px', fontSize: '1.7rem', fontWeight: '800', justifyContent:'flex-end'}}/>
            </ListTitleBox>
            <ListProgressWrap sx={{mt: '-5px'}}>
              <ListProgressBox>
                <ListProgressBar/>
              </ListProgressBox>
              <ListProgressString>
                <Typography sx={{fontSize: '11px', lineHeight: '20px', ml: '5px'}}>학습률: 0 / 121</Typography>
              </ListProgressString>
            </ListProgressWrap>
          </ListSection>
        ))}


    </Page02Container>
  </EmergencyBox>

  )
}
const EmergencyBox = styled(Box)`
  max-width: 1024px;
  min-width: 360px;
  display: flex;
  flex-direction: column;
`

const Page02Container = styled(Box)`
  //width: 100%;
  //max-width: 1024px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const TitleSection = styled(Box)`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  border-bottom: 2px solid #bebebe;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
`
const ListSection = styled(Box)`
  width: 90%;
  height: 100px;
  box-sizing: border-box;
  //border: 1px solid #d6d6d6;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px #d6d6d6;
  padding: 3px;
  
`
const ListStatusBox = styled(Box)`
  width: 100%;
  height: 25%;
  color: hotpink;
`
const ListTitleBox = styled(Box)`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
`

const ListProgressWrap = styled(Box)`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
`

const ListProgressBox = styled(Box)`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  vertical-align: center;

  @media (min-width: 800px) {
    width: 85%;
  }
`

const ListProgressBar = styled(Box)`
  width: 98%;
  height: 90%;
  box-sizing: border-box;
  border: 2px solid pink;
  border-radius: 5px;
`

const ListProgressString = styled(Box)`
  width: 30%;
  height: 100%;
  @media (min-width: 800px) {
    width: 15%;
  }
`
