import React from "react";
import { ChevronDown, Bell, Power } from "lucide-react";
import "../EmpHomePage/Employeehomepage.css";
import Login from "../../compontent/All  Image/Login.png";
import Img from "../../compontent/All  Image/img.png";
import Emp_sidebar from "../Emp_sidebar";

const Employeehomepage = () => {
  return (
    <div className="flex ">
      <Emp_sidebar />
      <div className="main_EmpHome  ">
        <div className="Nav_Emp">
          <div className="left_Emp">
            <h1>Home</h1>
          </div>
          <div className="Right_Emp">
            <a href="#">
              Quick links
              <ChevronDown />
            </a>
            <Bell />
            <Power />
          </div>
        </div>

        <div className="Hero_Emp">
          <div className="Hero_left">
            <h1>Good Afternoon</h1>
            <p>Life is 10% what happens to us and 90% how we react to it.</p>
            <p>-DENNIS P KIMBRO</p>
          </div>
          <div className="Hero_Right">
            <img src={Login} alt="" />
          </div>
        </div>

        <div className="IMG">
          <img src={Img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Employeehomepage;
