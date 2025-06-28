import React from "react";
import {
  Blocks,
  Book,
  Calendar,
  GitPullRequestCreateArrow,
  GalleryVerticalEnd,
  CircleUserRound,
  HandCoins,
  Home,
  LucideClipboardCopy,
  FileCode2,
  Settings,
  SquareArrowOutUpLeftIcon,
  Wifi,
} from "lucide-react";
import Login from "../compontent/All  Image/TEBillian_Logo.png";

const Emp_sidebar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="sidebar ">
      <div className="logo m-4">
        <img src={Login} alt="" />
      </div>
      <div className="flex text-center ml-6 gap-2 mt-8 ">
        <CircleUserRound color="gray" size={40} />
        <div className="">
          <h1 className="text-xm font-bold">
            Hii,<a href=""> {user?.firstName || "Guest"}</a>
          </h1>
          <p className="text-sm">View My info</p>
        </div>
        <Settings size={20} color="gray" className=" align-middle mt-3" />
      </div>

      <div className="">
        <ul className="">
          <li>
            <a href="#" className=" flex gap-3 ml-6 mt-8 ">
              <Home color="gray" />
              Home
            </a>
          </li>
          <li>
            <a href="#" className=" flex gap-3 ml-6 mt-4 ">
              <Wifi color="gray" />
              Engage
            </a>
          </li>
          <li>
            <a href="#" className=" flex gap-3 ml-6 mt-4 ">
              <Blocks color="gray" />
              My worklife
            </a>
          </li>
          <li>
            <a href="#" className=" flex gap-3 ml-6 mt-4 ">
              <LucideClipboardCopy color="gray" />
              To do
            </a>
          </li>
          <li>
            <a href="#" className=" flex gap-3 ml-6 mt-4 ">
              <HandCoins color="gray" />
              Salary
            </a>
          </li>
          <li>
            <a href="#" className=" flex gap-3 ml-6 mt-4 ">
              <Calendar color="gray" />
              Leave
            </a>
          </li>
          <li>
            <a href="#" className=" flex gap-3 ml-6 mt-4 ">
              <SquareArrowOutUpLeftIcon color="gray" />
              Attendance
            </a>
          </li>
          <li>
            <a href="#" className=" flex gap-3 ml-6 mt-4 ">
              <Book color="gray" />
              Expense Claime
            </a>
          </li>
          <li>
            <a href="#" className=" flex gap-3 ml-6 mt-4 ">
              <FileCode2 color="gray" />
              Document
            </a>
          </li>
          <li>
            <a href="#" className=" flex gap-3 ml-6 mt-4 ">
              <GalleryVerticalEnd color="gray" />
              Requent Hub
            </a>
          </li>
          <li>
            <a href="#" className=" flex gap-3 ml-6 mt-4 ">
              <GitPullRequestCreateArrow color="gray" /> workflow Delehates
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Emp_sidebar;
