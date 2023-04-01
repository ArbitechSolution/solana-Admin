import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MemberList from "./pages/MemberList";
import CoinOrderHistory from "./pages/CoinOrderHistory";
import ReferralCashReward from "./pages/ReferralCashReward";
// import login from "./components/login/LoginComponent"
import LoginComponent from "./components/login/LoginComponent";
function App() {
  return (
    <div className="App app_bg text-warning ">
      <BrowserRouter>
        <Routes>
        <Route path="/" exact element={  <LoginComponent/>} />
          <Route path="/MemberList" exact element={<MemberList />} />
          
          <Route
            path="/coinorderhistory"
            exact
            element={<CoinOrderHistory />}
          />
          <Route
            path="/referralcashreward"
            exact
            element={<ReferralCashReward />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
