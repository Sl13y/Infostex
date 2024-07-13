import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import Header from "../Header/Header";
import AboutUs from "../About US/About us";
import Home from "../HomePage/Home";
import Web from "../Web development/Web";
import Data from "../Data and Analytics/Data";
import Security from "../Security/Security";
import Graphics from "../Graphics/Graphics";
import Project from "../Management/Management";
import Blockchain from "../Emerging/Emerging";
import Cloud from "../Cloud/Cloud";
import Courses from "../Courses/Courses";

const PageRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="Home" />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="forgot" element={<ForgotPassword />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="header" element={<Header />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="home" element={<Home />} />
        <Route path="web" element={<Web />} />
        <Route path="data" element={<Data />} />
        <Route path="security" element={<Security />} />
        <Route path="graphics" element={<Graphics />} />
        <Route path="project" element={<Project />} />
        <Route path="blockchain" element={<Blockchain />} />
        <Route path="cloud" element={<Cloud />} />
        <Route path="courses" element={<Courses />} />
      </Routes>
    </>
  );
};
export default PageRouter;
