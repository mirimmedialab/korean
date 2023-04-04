import styled from '@emotion/styled';
import React from 'react';
import { Datepicker, DatepickerEvent } from '@meinefinsternis/react-horizontal-date-picker';
import { enUS } from 'date-fns/locale';
import Image from 'next/image';
import Sponge from 'public/sponge.webp';
import Card from '@/components/Main/Card';

export function Main() {
  const [date, setDate] = React.useState<{
    endValue: Date | null;
    startValue: Date | null;
    rangeDates: Date[] | null;
  }>({
    startValue: null,
    endValue: null,
    rangeDates: [],
  });

  const handleChange = (d: DatepickerEvent) => {
    const [startValue, endValue, rangeDates] = d;
    setDate((prev) => ({ ...prev, endValue, startValue, rangeDates }));
  };

  return (
    <MainContainer>
      <Box>
        <Header>
          <Logo>나만의 영어 단어장</Logo>
          <Setting>⋯</Setting>
        </Header>
        <FriendList>
          <Friend>스</Friend>
          <Next>&gt;</Next>
        </FriendList>
        <Profile>
          <Image
            src={Sponge}
            alt='profile'
            width={'40'}
            height={'40'}
            style={{ marginRight: '15px', borderRadius: '50%', objectFit: 'cover' }}
          ></Image>{' '}
          <Nickname>스폰지밥</Nickname>
        </Profile>
        <Datepicker onChange={handleChange} locale={enUS} startValue={null} endValue={null} />
        <Card />
      </Box>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background-color: #ffff;
  height: 100vh;
  max-width: 1024px;
  margin: 0 auto;
  padding: 10px;
`;
const Box = styled.div`
  padding: 15px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 15px;
`;
const Setting = styled.div`
  text-align: center;
  width: 24px;
  height: 24px;
  background-color: #ececec;
  padding-top: 2px;
  border-radius: 50%;
  cursor: pointer;
`;
const FriendList = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
const Friend = styled.div`
  text-align: center;
  line-height: 36px;
  width: 36px;
  height: 36px;
  border: 2px solid #b6d1ff;
  border-radius: 50%;
  margin-right: 5px;
  cursor: pointer;
`;
const Next = styled.div`
  text-align: center;
  line-height: 36px;
  width: 36px;
  height: 36px;
  background-color: #ececec;
  border-radius: 50%;
  cursor: pointer;
`;
const Profile = styled.div`
  width: 240px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
const Nickname = styled.span`
  font-size: 18px;
  font-weight: 500;
`;
const ButtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: #b6d1ff;
  border: none;
  outline: none;
  margin-top: 15px;
`;
