import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import Link from 'next/link';

export default function MediaCard() {
  return (
    <Wrapper>
      <Box>
        <Link href={'/voca-list'} style={{ textDecoration: 'none' }}>
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
        </Link>
      </Box>
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
`;
