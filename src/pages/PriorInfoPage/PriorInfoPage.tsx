// PriorInfoPage.tsx
import React, { useState } from "react";
import Temperature from "./Temperature";
import Thermometer from "./ThermometerComponent";

const PriorInfoPage = () => {
  const [isGenderSelected, setIsGenderSelected] = useState(false);
  const [relationshipScore, setRelationshipScore] = useState(0);
  const [selectedTemperature, setSelectedTemperature] = useState<number | null>(
    null
  );

  const selectGender = () => {
    setIsGenderSelected(true);
  };

  const rateRelationship = (score: number) => {
    setRelationshipScore(score);
  };

  const handleTemperatureSelected = (temperature: number) => {
    setSelectedTemperature(temperature);
  };

  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center h-screen">
        {!isGenderSelected && (
          <div>
            <div className="text-4xl font-bold mb-5 text-center">
              친해지고 싶은 상대방이 이성인가요? 동성인가요?
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-transparent hover:bg-pink-200 font-semibold text-black py-4 px-8 border border-pink-300 hover:border-transparent rounded mr-4"
                onClick={selectGender}
              >
                이성
              </button>
              <button
                className="bg-transparent hover:bg-pink-200 font-semibold text-black py-4 px-8 border border-pink-300 hover:border-transparent rounded"
                onClick={selectGender}
              >
                동성
              </button>
            </div>
          </div>
        )}
        {isGenderSelected && selectedTemperature === null && (
          <>
            <p className="text-4xl font-bold text-center">
              상대방과 나의 온도를
            </p>
            <p className="text-4xl font-bold mb-5 text-center">매겨보세요 !</p>
            <Thermometer />
            <Temperature />
          </>
        )}
      </div>
    </div>
  );
};

export default PriorInfoPage;
