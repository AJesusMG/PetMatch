import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalogue from "./pages/Catalogue/Catalogue";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import LandingPage from "./pages/LandingPage/LandingPage";
import MyAccount from "./pages/MyAccount/MyAccount";
import Comments from "./pages/Comments/Comments";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Questionnaire from "./pages/Questionnaire/Questionnaire";

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
        <Route path="/Questionnaire" element={<Questionnaire />} />
      </Routes>
    </Router>
  );
}

export default App