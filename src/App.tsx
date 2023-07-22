import React from "react";
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
import temperatureStore from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div className="container">
      <Provider store={temperatureStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/intro" element={<IntroPage />} />
            <Route path="/prior" element={<PriorInfoPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/" element={<IntroPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
