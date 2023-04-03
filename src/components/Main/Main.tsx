import styled from '@emotion/styled';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export function Main() {
  const [actualDate, setActualDate] = React.useState(new Date());

  return (
    <MainContainer>
      <Header>
        <Logo>Voca voca</Logo>
        <Setting>⋯</Setting>
      </Header>
      <FriendList>
        <Friend>닉</Friend>
        <Next>&gt;</Next>
      </FriendList>
      <Profile></Profile>
      <Calendar
        locale='ko'
        onChange={() => setActualDate(new Date())}
        value={actualDate}
        formatDay={(locale, date) => dayjs(date).format('DD')}
      />
      {/* <h1>
        {new Date(actualDate).toLocaleDateString('ko', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </h1> */}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background-color: #ffff;
  width: 360px;
  height: 100vh;
  padding: 10px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
`;
const Setting = styled.div`
  text-align: center;
  width: 24px;
  height: 24px;
  background-color: #ececec;
  padding-top: 2px;
  border-radius: 50%;
`;
const FriendList = styled.div`
  display: flex;
`;
const Friend = styled.div`
  text-align: center;
  line-height: 36px;
  width: 36px;
  height: 36px;
  border: 2px solid #b6b9ff;
  border-radius: 50%;
  margin-right: 5px;
`;
const Next = styled.div`
  text-align: center;
  line-height: 36px;
  width: 36px;
  height: 36px;
  background-color: #ececec;
  border-radius: 50%;
`;
const Profile = styled.div``;
