import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

export function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 설정된 시간 간격마다 setInterval 콜백이 실행된다.
    const id = setInterval(() => {
      // 타이머 숫자 1씩 증가
      setCount((count) => count + 1);
    }, 1000);

    return () => clearInterval(id);
    // 카운트 변수가 바뀔때마다 useEffecct 실행
  }, [count]);

  const minute = Math.floor(count / 60); // 분 계산
  const second = count % 60; // 초 계산

  return (
    <Container>
      {minute.toString().padStart(2, "0")}:{second.toString().padStart(2, "0")}
    </Container>
  );
}

const Container = styled.div`
  color: red;
  font-size: 20px;
  margin-top: 10px;
`;
