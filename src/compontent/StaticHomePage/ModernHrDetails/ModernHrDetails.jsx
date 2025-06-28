import "./ModernHrDetails.css";
import {
  FileSpreadsheet,
  FileClock,
  HandHelping,
  CalendarClock,
  Smartphone,
} from "lucide-react";
import CuttomButton from "../CuttomButton/CuttomButton";

const ModernHrDetails = () => {
  return (
    <div>
      <div className="moder-main">
        <div className="phase1">
          <h1>
            Modern <span> HR and Payroll </span> are Complex
          </h1>
          <span>
            greytHR solves some of the most common HR and Payroll issues that
            slow down your business.
          </span>
        </div>
        <div className="phase2">
          <div className="Box1 bg-blue-100">
            <div className="image">
              <HandHelping size={30} className="File" color="black" />
            </div>
            <div className="Text">
              <h2>You don’t have an HRMS, and running HR ops on Sheets </h2>
            </div>
            <div className="text2">
              <span>
                {" "}
                Use one single app for all HR and Payroll Processes, including
                workforce management, employee relations, leave and attendance
              </span>
            </div>
          </div>
          <div className="Box1 bg-purple-300">
            <div className="image">
              <FileClock size={30} className="File" color="black" />
            </div>
            <div className="Text">
              <h2>
                Your payroll solution is unstable, requires hours of manual work{" "}
              </h2>
            </div>
            <div className="text2">
              <span>
                {" "}
                Ensure faster and accurate checkouts. Implement complex
                policies. Automate hours of manual payroll processes and remove
                any manual error
              </span>
            </div>
          </div>
          <div className="Box1 bg-pink-100">
            <div className="image">
              <CalendarClock size={30} className="File" color="black" />
            </div>
            <div className="Text">
              <h2>
                {" "}
                You’re still using old ways to capture and track leaves and
                attendance{" "}
              </h2>
            </div>
            <div className="text2">
              <span>
                {" "}
                150+ basic and advanced admin reports covering Leave and
                Attendance, Payroll, MIS, Claims, Welfare and State-level
                Policies
              </span>
            </div>
          </div>
          <div className="Box1 bg-blue-100">
            <div className="image">
              <FileSpreadsheet size={30} className="File" color="black" />
            </div>
            <div className="Text">
              <h2>
                {" "}
                Most HR and payroll tasks are manual, clerical, and take hours
                to complete{" "}
              </h2>
            </div>
            <div className="text2">
              <span>
                {" "}
                Give access to the best-in-category leave management solution
                for efficient leave management
              </span>
            </div>
          </div>
        </div>

        <div className="phase3">
          <div className="three">
            <div className="main-three">
              <div className="image text-start ">
                <Smartphone className="File" color="black" />
              </div>
              <h2>
                Your employees need a self-serving portal (ESS), ON MOBILE!
              </h2>
              <div className="text2">
                <span>
                  Use greytHR’s ‘mobile-first’ Employee Self Service Portal
                  (ESS) enables common HR tasks for employees and managers.
                  Access payslips, manage leaves, add expense claims and so much
                  more. All on mobile
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="phase4">
          <CuttomButton name="Explore HRMS" />
          <CuttomButton name="Explore Payroll" />
        </div>
      </div>
    </div>
  );
};

export default ModernHrDetails;
