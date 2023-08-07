import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";

const Score = () => {
  const [localMaleTemperature, setLocalMaleTemperature] = useLocalStorage(
    "maleTemperature", // 키 값 수정
    "50" // 초기 온도값 설정
  );

  const [localFemaleTemperature, setLocalFemaleTemperature] = useLocalStorage(
    "femaleTemperature", // 키 값 수정
    "50" // 초기 온도값 설정
  );

  const [totalScore, setTotalScore] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const maleTemp = Number(localMaleTemperature);
    const femaleTemp = Number(localFemaleTemperature);

    setTotalScore((prev) => {
      return Math.floor(
        (maleTemp + femaleTemp) / (0.1 * Math.abs(maleTemp - femaleTemp || 1))
      ); // 0으로 나누는 경우를 방지
    });
  }, [localMaleTemperature, localFemaleTemperature]); // useEffect 의존성 배열 수정

  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-4xl font-bold mb-5 text-center">
          자, 그러면 게임을 시작해볼까요?
        </div>
        <button
          className="bg-transparent hover:bg-pink-200 font-semibold text-black py-2 px-4 border border-pink-300 hover:border-transparent rounded"
          onClick={() => {
            navigate("/play");
          }}
        >
          게임 시작하기
        </button>
      </div>
    </div>
  );
};

export default Score;
