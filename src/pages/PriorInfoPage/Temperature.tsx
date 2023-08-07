import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  RootState,
  setFemaleTemperature,
  setMaleTemperature,
  setGender,
} from "../../store";
import { useNavigate } from "react-router-dom";
import { useLocalStorage, useSessionStorage } from "usehooks-ts";

const Temperature: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const gender = useSelector((state: RootState) => state.gender);
  const femaleTemperature = useSelector(
    (state: RootState) => state.femaleTemperature
  );
  const maleTemperature = useSelector(
    (state: RootState) => state.maleTemperature
  );

  const [localMaleTemperature, setLocalMaleTemperature] = useLocalStorage(
    "maleTemperature", // 키 값 수정
    "50" // 초기 온도값 설정
  );

  const [localFemaleTemperature, setLocalFemaleTemperature] = useLocalStorage(
    "femaleTemperature", // 키 값 수정
    "50" // 초기 온도값 설정
  );

  /*
  useEffect(() => {
    if (localMaleTemperature !== null && localFemaleTemperature !== null) {
      const result = window.confirm(
        "이전에 입력하신 설정값이 발견되었습니다, 그대로 사용하시겠습니까?"
      );
      if (result) {
        navigate("/main");
      } else {
      }
    }
  }, []); // 픽스 예정
  */

  const handleTemperatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const temperatureValue = Number(e.target.value);

    if (gender === "female") {
      dispatch(setFemaleTemperature(temperatureValue));
      setLocalFemaleTemperature(temperatureValue.toString());
    } else if (gender === "male") {
      dispatch(setMaleTemperature(temperatureValue));
      setLocalMaleTemperature(temperatureValue.toString());
    }
  };

  const handleNextClick = () => {
    if (gender === "male") {
      dispatch(setGender("female")); // Change gender to female
    } else if (gender === "female") {
      navigate("/main");
    }
  };

  const handleBeforeClick = () => {
    dispatch(setGender("male"));
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold">
        {gender === "female" ? "여성분" : "남성분"} 차례입니다 !
      </h2>
      <input
        type="range"
        min={0}
        max={100}
        value={String(
          gender === "female" ? femaleTemperature : maleTemperature
        )}
        onChange={handleTemperatureChange}
        className="w-64 mt-4"
        style={{ backgroundColor: "red", color: "red" }}
      />
      <p className="text-2xl font-bold mt-4 mb-4">
        {gender === "female" ? femaleTemperature : maleTemperature}°C
      </p>
      <div className="flex space-x-4">
        {gender === "female" && (
          <button
            className="bg-pink-300 hover:bg-pink-400 text-white py-2 px-4 rounded mt-4 w-24"
            onClick={handleBeforeClick}
          >
            Before
          </button>
        )}
        <button
          className="bg-pink-300 hover:bg-pink-400 text-white py-2 px-4 rounded mt-4 w-24"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Temperature;
