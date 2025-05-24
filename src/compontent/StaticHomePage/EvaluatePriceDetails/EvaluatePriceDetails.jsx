import "./EvaluatePriceDetails.css";
import "../../../App.css";
const imageUrl = "http://127.0.0.1:8000/getimages/Footer";
import CuttomButton from "../CuttomButton/CuttomButton";

const EvaluatePriceDetails = () => {
  return (
    <div className="main-info">
      <div className="info">
        <div className="more-info">
          <div className="info-left">
            <img src={imageUrl} alt="" />
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
              <CuttomButton name="Plans and pricing" />
              <CuttomButton name="Discuss pricing" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvaluatePriceDetails;
