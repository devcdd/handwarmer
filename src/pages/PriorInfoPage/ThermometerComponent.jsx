import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Thermometer from "react-thermometer-component";
import { RootState } from "../../store";

// 스타일드 컴포넌트로 Thermometer를 감싸서 마진 값을 설정합니다.
const ThermometerWrapper = styled.div`
  margin-bottom: 33px;
`;

const ThermometerComponent = () => {
  // 여자측 온도와 남자측 온도를 가져옴
  const femaleTemperature = useSelector(
    (state: RootState) => state.femaleTemperature
  );
  const maleTemperature = useSelector(
    (state: RootState) => state.maleTemperature
  );

  // 현재 선택된 성별에 따라 온도 값을 선택함
  const gender = useSelector((state: RootState) => state.gender);
  const selectedTemperature =
    gender === "female" ? femaleTemperature : maleTemperature;

  return (
    <ThermometerWrapper>
      <Thermometer
        theme="light"
        value={selectedTemperature}
        max={100}
        format="°C"
        size="large"
        height={300}
      />
    </ThermometerWrapper>
  );
};

export default ThermometerComponent;
