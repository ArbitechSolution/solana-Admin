import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MemberList from "./pages/MemberList";
import CoinOrderHistory from "./pages/CoinOrderHistory";
import ReferralCashReward from "./pages/ReferralCashReward";
// import login from "./components/login/LoginComponent"
import LoginComponent from "./components/login/LoginComponent";
import ProtectedRouting from "./routes/protectedRoutes";
import {useSelector} from "react-redux"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  let isAuthenticated = false;
  if(localStorage.token){
  isAuthenticated = true;
  }
  return (
    <div className="App app_bg text-warning ">
      <BrowserRouter>
      <ToastContainer />
        <Routes>
        <Route path="/" exact element={  <LoginComponent/>} />
        <Route
            element={<ProtectedRouting isAuthenticated={isAuthenticated} />}
          >

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
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
