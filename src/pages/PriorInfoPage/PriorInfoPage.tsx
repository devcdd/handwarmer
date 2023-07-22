import React, { useState, useEffect } from "react";
import Temperature from "./Temperature";

const PriorInfoPage = () => {
  const [isGenderSelected, setIsGenderSelected] = useState(false);
  const [relationshipScore, setRelationshipScore] = useState(0);

  const selectGender = () => {
    setIsGenderSelected(true);
  };

  const rateRelationship = (score: number) => {
    setRelationshipScore(score);
  };

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {!isGenderSelected && (
        <div>
          <div className="text-4xl font-bold mb-5">
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
      {isGenderSelected && <Temperature />}
    </div>
  );
};

export default PriorInfoPage;
