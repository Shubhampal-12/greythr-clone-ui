const imageUrl = "http://127.0.0.1:8000/getimages/Countries";
const user = "http://127.0.0.1:8000/getimages/Users";
const comp = "http://127.0.0.1:8000/getimages/Companies";
import "./WelcomeDetails.css";
import "../../../App.css";
import CuttomButton from "../CuttomButton/CuttomButton";
import ReactPlayer from "react-player";

const WelcomeDetails = () => {
  return (
    <>
      <div className="main-hero">
        <div className="hero-top">
          <div className="para">
            <h1>
              Welcome to the <span> greyt </span> Side .
            </h1>
          </div>
          <span>
            <p>The most trusted full-suite HRMS for your people operations</p>
          </span>
          <div className="main-box">
            <div className="box1">
              <img src={imageUrl} alt="Earth" />
              <div className="">
                <h3>32+</h3>
                <p>Country</p>
              </div>
            </div>

            <div className="box2 box1 ">
              <img src={comp} alt="Earth" />
              <div className="">
                <h3>490,000,000+</h3>
                <p>Companices</p>
              </div>
            </div>

            <div className="box3 box1  ">
              <img src={user} alt="Earth" />
              <div className="">
                <h3>32,000,000+</h3>
                <p>Users</p>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-10 mt-9 inline-flex btn">
          <CuttomButton name="start a greythr Free Account" />
          <CuttomButton name="Talk to Us!" />
        </div>
        <div className="hero-bottom">
          <div className="vide">
            <ReactPlayer
              className="link"
              width="100"
              height="200"
              controls
              url="https://youtu.be/PMv1UcsF2no?si=NoGbtLIK34Ctac6x"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeDetails;
