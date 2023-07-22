import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import {
  Routes,
  BrowserRouter,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import IntroPage from "./pages/IntroPage/IntroPage";
import PriorInfoPage from "./pages/PriorInfoPage/PriorInfoPage";
import MainPage from "./pages/MainPage/MainPage";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/prior" element={<PriorInfoPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/" element={<IntroPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
