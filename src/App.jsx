import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import AboutUs from "./pages/AboutUs/AboutUs";
import TermsConditions from "./pages/TermsConditions/TermsConditions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Catalogue" element={<Catalogue />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/MyAccount" element={<MyAccount />} />
        <Route path="/ErrorPage" element={<ErrorPage />} />
        <Route path="/UserConfig" element={<UserConfig />} />
        <Route path="/AdminReports" element={<AdminReports />} />
        <Route path="/Questionnaire" element={<Questionnaire />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/LoginAdmin" element={<LoginAdmin />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/TermsConditions" element={<TermsConditions />} />
      </Routes>
    </Router>
  );
}

export default App