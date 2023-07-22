// Temperature.tsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setTemperature } from "../../store";

const Temperature: React.FC = () => {
  const dispatch = useDispatch();
  const temperature = useSelector((state: RootState) => state.temperature);

  const handleTemperatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTemperature(Number(e.target.value)));
  };

  const handleNextClick = () => {
    alert("TEST");
  };

  return (
    <div>
      <input
        type="range"
        min={0}
        max={100}
        value={String(temperature)}
        onChange={handleTemperatureChange}
        className="w-64"
      />
      <p className="text-xl mt-4">{temperature}°C</p>
      <button
        className="bg-pink-300 hover:bg-pink-400 font-semibold text-white py-2 px-4 rounded mt-4"
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default Temperature;
