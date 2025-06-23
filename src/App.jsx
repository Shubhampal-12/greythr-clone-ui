import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "./compontent/home/Home";
import Login from "./compontent/LoginPage/Login";
import UserHomePage from "./compontent/UserHomePage/UserHomePage";


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/user-home" element={<UserHomePage />} />
      </Routes>
    </div>
  );
};
