import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Thermometer from "react-thermometer-component";
import { RootState } from "../../store";

// 스타일드 컴포넌트로 Thermometer를 감싸서 마진 값을 설정합니다.
const ThermometerWrapper = styled.div`
  margin: 20px;
`;

const ThermometerComponent = () => {
  const temperature = useSelector((state: RootState) => state.temperature);

  return (
    <ThermometerWrapper>
      <Thermometer
        theme="light"
        value={temperature}
        max="100"
        format="°C"
        size="large"
        height="300"
      />
    </ThermometerWrapper>
  );
};

export default ThermometerComponent;
