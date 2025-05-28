import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Login from "./compontent/login_page/Login";
import Employeehomepage from "./Login_Emp/EmpHomePage/Employeehomepage";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" t element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/LoginHome" element={<Employeehomepage/>} />
      </Routes>
    </div>
  );
};
