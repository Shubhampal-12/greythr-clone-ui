import React from "react";
import {
  ChevronDown,
  Bell,
  Power,
  ClipboardPlus,
  MoveRight,
  ChartLine,
  BookOpenText,
  Camera,
} from "lucide-react";
import "../EmpHomePage/Employeehomepage.css";
import Login from "../../compontent/All  Image/Login.png";
import Img from "../../compontent/All  Image/img.png";
import Emp_sidebar from "../Emp_sidebar";
import { Link } from "react-router-dom";

const Employeehomepage = () => {
  return (
    <div className="flex">
      <Emp_sidebar  />
      <div className="main_EmpHome  ">
        <div className="Nav_Emp">
          <div className="left_Emp">
            <Link to="/">
              <a>Home</a>
            </Link>
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

        <div className="Emp_Container">
          <div className="box_Emp" id="BOX1">
            <h3>Review</h3>
            <div className="box_1">
              <ClipboardPlus className="ml-40" size={100} />
              <p>Hurrah! You've nothing to review</p>
            </div>
          </div>

          <div className="box_Emp "id="BOX2">
            <div className="flex justify-between items-center mr-11">
              <h3>Upcoming Holidays</h3>
              <MoveRight />
            </div>
            <div className=" ml-7 text-xl ">
              <p>
                <b>15 Aug</b> Friday <br /> independence Day
              </p>
              <br />
              <p>
                <b>27 Aug</b> Wednesday <br /> Ganesh Chaturthi
              </p>
              <br />
              <p>
                <b>15 Aug</b> Friday <br /> Mahatma Gandhi jayanti
              </p>
              <br />
              <p>
                <b>15 Aug</b> Friday <br /> Diwali Laxmi Pujan
              </p>
              <br />
            </div>
          </div>

          <div className="box_Emp" id="BOX3">
            <div className="flex justify-between items-center mr-11">
              <h3>Payslip</h3>
              <MoveRight />
            </div>
            <div className=" flex justify-between items-center text-end ml-7 mt-8 mb-5 text-xl">
              <ChartLine size={70} />
              <p className="grid mr-7">
                <b>Apr 2025</b>
                <br />
                <br />
                <b>30</b>Paid Days
              </p>
            </div>
            <div className=" mt-14 text-2xl ml-5">
              <ul>
                <li className="flex justify-between mr-6 ">
                  <p>Gross Pay</p> *********
                </li>
                <li className="flex justify-between mr-6 mt-5">
                  <p>Deduction</p> *********
                </li>
                <li className="flex justify-between mr-6 mt-5 mb-6">
                  <p>Net Pay</p> *********
                </li>
              </ul>
            </div>
          </div>

          <div className="box_Emp mt-10" id='BOX4'>
            <h3>Quick Access</h3>
            <div className=" flex text-lg ml-[20px] mt-5 mb-5">
              <div className="">
                <ul>
                  <li>CTC Payslip</li>
                  <li>Relmbursement Payslip</li>
                  <li>IT Statement</li>
                  <li>YTD Reports</li>
                  <li>Loan Statement</li>
                </ul>
              </div>
              <div className="bg-pink-100 rounded-l-lg p-4 ml-5">
                <p>Use quick access to view important salary detalis</p>
              </div>
            </div>
          </div>

          <div className="box_Emp" id="BOX5">
            <h3>FBP Declaration</h3>
            <div className="flex items-center ml-3">
              <ClipboardPlus className="mr-5" size={100} />
              <p>
                Uh oh! you have missed submitting your FBP declartion. please
                submit it once the window opens again.
              </p>
            </div>
          </div>
          <div className="box_Emp" id="BOX6">
            <h3>IT Declaration</h3>
            <div className="flex items-center ml-3">
              <ClipboardPlus className="mr-5" size={100} />
              <p>
                Uh oh! you have missed submitting your IT declartion. please
                submit it once the window opens.
              </p>
            </div>
          </div>
          <div className="box_Emp" id="BOX7">
            <h3>POI</h3>
            <div className="flex items-center ml-3">
              <BookOpenText className="mr-5" size={100} />
              <p>
                Hold on! You can submit your Proof of investments (POI) once
                released
              </p>
            </div>
          </div>
          <div className="box_Emp" id="BOX8">
            <h3>Track</h3>
            <div className="border rounded-lg p-5 w-44 ml-5 mb-5 ">
              <h4 className="flex gap-20">
                01
                <Camera />
              </h4>
              <p>Attendance Regularization</p>
            </div>
          </div>
        </div>
        <div className="text-center mb-12 font-thin text-lg ">
           <p>v6.3.0-prod-1043 | privacy policy | Terms of Service </p>
        </div>
      </div>

    </div>
  );
};

export default Employeehomepage;
