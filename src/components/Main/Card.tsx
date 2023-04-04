import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MediaCard() {
  const [showModal, setShowModal] = React.useState(false);
  const [showNumModal, setShowNumModal] = React.useState(false);

  const router = useRouter();
  const saveCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetElement = e.target as HTMLElement;
    const innerText = targetElement.innerText;
    localStorage.setItem('category', innerText);
    setShowNumModal(true);
    setShowModal(false);
  };

  const saveWordNum = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetElement = e.target as HTMLElement;
    const innerText = targetElement.innerText;
    localStorage.setItem('number', innerText);
    router.push('/voca-list');
  };
  return (
    <Wrapper>
      <Box onClick={() => setShowModal(true)}>
        <Card sx={{ maxWidth: 280 }}>
          <CardMedia sx={{ height: 140 }} image='/words.jpeg' title='words' />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              영어단어
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              영어단어를 효율적으로 학습할 수 있는 방법이 바로 여기 있습니다!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
      </Box>
      {showModal && (
        <Modalchang>
          <Box className='modal-content'>
            <Typography style={{ fontSize: '20px' }}>카테고리를 선택해주세요</Typography>
            <HiButton variant='contained' color='primary' onClick={saveCategory}>
              일상적인 표현들 Everyday expressions
            </HiButton>
            <HiButton variant='contained' color='primary' onClick={saveCategory}>
              인사 Greeting
            </HiButton>
            <HiButton variant='contained' color='primary' onClick={saveCategory}>
              여행 Travel
            </HiButton>
            <HiButton variant='contained' color='primary' onClick={saveCategory}>
              숫자와 돈 Number and money
            </HiButton>
            <HiButton variant='contained' color='primary' onClick={saveCategory}>
              위치 Location
            </HiButton>
            <HiButton variant='contained' color='primary' onClick={saveCategory}>
              시간과 날짜 Time and date
            </HiButton>
            <HiButton variant='contained' color='error' onClick={() => setShowModal(false)}>
              닫기
            </HiButton>
          </Box>
        </Modalchang>
      )}
      {showNumModal && (
        <Modalchang>
          <Box className='modal-count'>
            <Typography style={{ fontSize: '20px' }}>공부할 단어 개수를 선택해주세요</Typography>
            <HiButton variant='contained' color='primary' onClick={saveWordNum}>
              10
            </HiButton>
            <HiButton variant='contained' color='primary' onClick={saveWordNum}>
              30
            </HiButton>
            <HiButton variant='contained' color='primary' onClick={saveWordNum}>
              50
            </HiButton>
            <HiButton variant='contained' color='primary' onClick={saveWordNum}>
              100
            </HiButton>
            <HiButton variant='contained' color='error' onClick={() => setShowNumModal(false)}>
              닫기
            </HiButton>
          </Box>
        </Modalchang>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 10px;
`;
const Box = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;
const Modalchang = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .modal-content {
    width: 300px;
    height: 380px;
    border-radius: 10px;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .modal-count {
    width: 300px;
    height: 300px;
    border-radius: 10px;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HiButton = styled(Button)`
  width: 100%;
  margin-bottom: 5px;
  &:first-of-type {
    margin-top: 30px;
  }

  &:last-of-type {
    margin-top: 30px;
  }
`;
