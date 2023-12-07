import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Catalogue from "./pages/Catalogue/Catalogue";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import LandingPage from "./pages/LandingPage/LandingPage";
import MyAccount from "./pages/MyAccount/MyAccount";
import Community from "./pages/Community/Community";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import UserConfig from './pages/userConfig/userConfig';
import AdminReports from './pages/AdminReports/AdminReports';
import Questionnaire from './pages/Questionnaire/Questionnaire';
import Catalog from './pages/Catalog/Catalog';
import LoginAdmin from "./pages/LoginAdmin/LoginAdmin";
import { initUserConfig } from './js/userConfig.js';

function App() {
  useEffect(() => {
    initUserConfig();
  }, []);

  return (
    <Router>
      <Routes>
        {/* Resto de las rutas aquí */}
        <Route path="/Catalogue" element={<Catalogue />} />
        <Route path="/MyAccount" element={<MyAccount />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/ErrorPage" element={<ErrorPage />} />
        <Route path="/UserConfig" element={<UserConfig />} />
        <Route path="/AdminReports" element={<AdminReports />} />
        <Route path="/Questionnaire" element={<Questionnaire />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/LoginAdmin" element={<LoginAdmin />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
