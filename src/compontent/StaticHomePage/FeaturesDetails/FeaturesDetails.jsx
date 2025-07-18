import "./FeaturesDetails.css"
const chro = "http://127.0.0.1:8000/getimages/CHRO";
const cio = "http://127.0.0.1:8000/getimages/CIO";
const employees = "http://127.0.0.1:8000/getimages/Employees";
const mangagers = "http://127.0.0.1:8000/getimages/Managers";
const payroll = "http://127.0.0.1:8000/getimages/Payroll_Admin";
import Employ from "../../../Images/Emp-img.jpg"
import { ChevronLeft, ChevronRight } from "lucide-react";

const FeaturesDetails = () => {
  return (
    <div className="main-Emp">
      <h1>
        Everyone gets <span>Value </span> from day 1
      </h1>
      <span>
        <p>
          A platform loved by everyone in your company - by employers and
          employees
        </p>
      </span>
      <div className="main-parson">
        <div className="parson-box">
          <ChevronLeft className=" hidden right-bar" size={40} color="black" />
          <div className="par1">
            <img src={chro} className="mt-4" alt="img" />
            <p>CIO</p>
          </div>

          <div className="par1">
            <img src={cio} className="mt-4" alt="" />
            <p>CHRO</p>
          </div>

          <div className="par1">
            <img src={employees} className="mt-4" alt="" />
            <p>Payroll Admin</p>
          </div>

          <div className="par1">
            <img src={mangagers} className="mt-4" alt="" />
            <p>Managers</p>
          </div>

          <div className="par1">
            <img src={payroll} className="mt-4" alt="" />
            <p>Employees</p>
          </div>

          <ChevronRight size={40} className="hidden left-bar" color="black" />
        </div>
      </div>
      <div className="datails-Emp">
        <div className="box-datails">
          <div className="left-Emp">
            <div className="Top-Emp">
              <h2 className="Emp-work">
                <p>Without greytHR</p>
                <div className="work">
                  <ul>
                    <li>
                      {" "}
                      Data security concerns and system compatibility issues.
                    </li>
                    <li>Low user adoption rates.</li>
                    <li>No guided implementation.</li>
                  </ul>
                </div>
              </h2>
            </div>
            <div className="Bottom-Emp">
              <h2 className="bottom-tittle">
                <p>With greytHR</p>
              </h2>
              <div className="bottom-para">
                <p>
                  No compliance nightmares! greytHR’s own implementation team
                  works with your IT, to ensure seamless implementation and
                  integration of HR tech, with the assurance of data security
                  and scalability.
                </p>
              </div>
            </div>
          </div>
          <div className="right-Emp">
            <div className="image-emp">
              <img src={Employ} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesDetails;
