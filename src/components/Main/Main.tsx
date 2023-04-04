import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { Datepicker, DatepickerEvent } from '@meinefinsternis/react-horizontal-date-picker';
import { enUS } from 'date-fns/locale';
import ReactHorizontalDatePicker from 'react-horizontal-strip-datepicker';
import DatePicker from 'react-horizontal-datepicker';
import 'react-horizontal-strip-datepicker/dist/ReactHorizontalDatePicker.css';
import Image from 'next/image';
import LogoMirim from 'public/logo.png';
import Card from '@/components/Main/Card';
import dayjs from 'dayjs';
import { Loading } from '@/components/Loading';

export function Main() {
  const [date, setDate] = React.useState<{
    endValue: Date | null;
    startValue: Date | null;
    rangeDates: Date[] | null;
    startDate: Date;
  }>({
    startValue: null,
    endValue: null,
    rangeDates: [],
    startDate: dayjs().toDate(),
  });
  const [open, setOpen] = React.useState(true);

  const handleChange = (d: DatepickerEvent) => {
    const [startValue, endValue, rangeDates] = d;
    setDate((prev) => ({ ...prev, endValue, startValue, rangeDates }));
  };

  React.useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }, []);

  return (
    <MainContainer>
      <Box>
        <Header>
          <Logo>나만의 영어 단어장</Logo>
        </Header>

        <Profile>
          <Image
            src={LogoMirim}
            alt='profile'
            width={'60'}
            height={'60'}
            style={{ borderRadius: '50%', objectFit: 'cover' }}
          ></Image>{' '}
          <Nickname>미림미디어랩</Nickname>
        </Profile>
        <Datepicker onChange={handleChange} locale={enUS} startValue={dayjs().toDate()} endValue={null} />
        <Card />
      </Box>
      {open && (
        <SplashWapper>
          <Loading />
        </SplashWapper>
      )}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  position: relative;
  background-color: #ffff;
  height: 100vh;
  max-width: 1024px;
  margin: 0 auto;
  padding: 10px;
`;
const Box = styled.div`
  /* width: 360px; */
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

const SplashWapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 10000;
  top: 0;
  left: 0;
`;
