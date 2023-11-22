import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalogue from "./pages/Catalogue/Catalogue";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import LandingPage from "./pages/LandingPage/LandingPage";
import MyAccount from "./pages/MyAccount/MyAccount";
import Comments from "./pages/Comments/Comments";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import UserConfig from './pages/userConfig/userConfig';
import AdminReports from './pages/AdminReports/AdminReports';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Catalogue" element={<Catalogue />} />
        <Route path="/Comments" element={<Comments />} />
        <Route path="/MyAccount" element={<MyAccount />} />
        <Route path="/ErrorPage" element={<ErrorPage />} />
        <Route path="/UserConfig" element={<UserConfig />} />
        <Route path="/AdminReports" element={<AdminReports />} />
        
      </Routes>
    </Router>
  );
}

export default App