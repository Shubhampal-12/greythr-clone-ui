import React from "react";
import { Routes,Route } from 'react-router-dom'
import Home from "./compontent/home/Home";
import Login from "./compontent/LoginPage/Login";
 
 

export const App = () => {
  return (
    <div>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
       </Routes>
    </div>
  );
};
