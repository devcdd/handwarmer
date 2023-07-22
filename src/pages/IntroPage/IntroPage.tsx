import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IntroPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-4xl font-bold mb-5 text-center">
          다른 사람과 더욱 친해지고 싶으신가요?
        </div>
        <button
          className="bg-transparent hover:bg-pink-200 font-semibold text-black py-2 px-4 border border-pink-300 hover:border-transparent rounded"
          onClick={() => {
            navigate("/prior");
          }}
        >
          사전 정보 입력하기
        </button>
      </div>
    </div>
  );
};

export default IntroPage;
