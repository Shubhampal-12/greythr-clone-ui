import React from "react";
import "./Info.css";
import "../../App.css";
import info from "../All  Image/Image1.png";
import Button from "../all/Button";

const Info = () => {
  return (
    <div className="main-info">
      <div className="info">
        <div className="more-info">
          <div className="info-left">
            <img src={info} alt="" />
          </div>
          <div className="info-right">
            <h2 className="info-tittle">
              Evaluating our pricing?
              <br />
              We’ll take the price challenge!
            </h2>
            <span className="info-para">
              Our customers endorse we offer exceptional software and service at
              unchallenged prices. Our costs per license are the lowest in our
              category.
            </span>
            <div className="info-btn">
              <Button />
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
