import React from "react";
import "./System.css";
const greytFM = "http://127.0.0.1:8000/getimages/greytFM_Podcasts";
const greytHR_Academy = "http://127.0.0.1:8000/getimages/greytHR_Academy";
const hr_compliances_wiki =
  "http://127.0.0.1:8000/getimages/HR_Compliances_Wiki";
const greytribe_Community =
  "http://127.0.0.1:8000/getimages/greytribe_Community";
const greytHR_Resource_Library =
  "http://127.0.0.1:8000/getimages/greytHR_Resource_Library";
const hr_Compliances_Wiki =
  "http://127.0.0.1:8000/getimages/HR_Compliances_Wiki";

const System = () => {
  return (
    <div className="main-system">
      <h2 className="system-tittle">
        <p>
          Get full access to the greytHR{" "}
          <span className="text-purple-600"> Ecosystem</span>
        </p>
      </h2>
      <span className="system-parag">
        greytHR users are backed by our strong community, led by industry
        thought leaders and practitioners
      </span>

      <div className="system-box">
        <div className="box-system bg-pink-200">
          <div className="system-img">
            <img src={greytFM} alt="" />
          </div>
          <div className="system-tittle">
            <h3 className="mb-1 text-1xl">greytHR Academy</h3>
            <p className=" mb-1 text-lg text-<size>/<number> mt-4 text-black">
              Only academy offering courses for HR & Payroll in India
            </p>
          </div>
          <span className="text-3xl text-center text-purple-800 font-semibold ">
            Know More
          </span>
        </div>

        <div className="box-system bg-purple-300">
          <div className="system-img">
            <img src={greytHR_Academy} alt="" />
          </div>
          <div className="system-tittle">
            <h3 className="mb-1 text-1xl">greytHR Academy</h3>
            <p className=" mb-1 text-lg text-<size>/<number> mt-4 text-black">
              Only academy offering courses for HR & Payroll in India
            </p>
          </div>
          <span className="text-3xl text-center text-purple-800 font-semibold ">
            Know More
          </span>
        </div>

        <div className="box-system bg-blue-200">
          <div className="system-img">
            <img src={hr_compliances_wiki} alt="" />
          </div>
          <div className="system-tittle">
            <h3 className="mb-1 text-1xl">greytHR Academy</h3>
            <p className=" mb-1 text-lg text-<size>/<number> mt-4 text-black">
              Only academy offering courses for HR & Payroll in India
            </p>
          </div>
          <span className="text-3xl text-center text-purple-800 font-semibold ">
            Know More
          </span>
        </div>

        <div className="box-system bg-green-100">
          <div className="system-img">
            <img src={greytribe_Community} alt="" />
          </div>
          <div className="system-tittle">
            <h3 className="mb-1 text-1xl">greytHR Academy</h3>
            <p className=" mb-1 text-lg text-<size>/<number> mt-4 text-black">
              Only academy offering courses for HR & Payroll in India
            </p>
          </div>
          <span className="text-3xl text-center text-purple-800 font-semibold ">
            Know More
          </span>
        </div>

        <div className="box-system bg-red-100">
          <div className="system-img">
            <img src={greytHR_Resource_Library} alt="" />
          </div>
          <div className="system-tittle">
            <h3 className="mb-1 text-1xl">greytHR Academy</h3>
            <p className=" mb-1 text-lg text-<size>/<number> mt-4 text-black">
              Only academy offering courses for HR & Payroll in India
            </p>
          </div>
          <span className="text-3xl text-center text-purple-800 font-semibold ">
            Know More
          </span>
        </div>

        <div className="box-system bg-gray-400">
          <div className="system-img">
            <img src={hr_Compliances_Wiki} alt="" />
          </div>
          <div className="system-tittle">
            <h3 className="mb-1 text-1xl">greytHR Academy</h3>
            <p className=" mb-1 text-lg text-<size>/<number> mt-4 text-black">
              Only academy offering courses for HR & Payroll in India
            </p>
          </div>
          <span className="text-3xl text-center text-purple-800 font-semibold ">
            Know More
          </span>
        </div>
      </div>
    </div>
  );
};

export default System;
