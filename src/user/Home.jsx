import { useState } from "react";
import { CLOSE_PNG } from "../assest/images";
import { Button } from "../compoent";

const Home = () => {
  const [usdChecked, setUsdChecked] = useState(false);
  const [acceleratedChecked, setAcceleratedChecked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="main-container">
      <div className="home-main-container">
        <div className="home-container-title">
          <h5>roi calculator</h5>
          <img src={CLOSE_PNG} alt="" className="close-button" />
        </div>

        <div className="home-toggler ">
          {/* <img src="" alt="" /> */}
          <span className="margin-right-10">Cake</span>

          <label className="switch margin-right-10">
            <input
              type="checkbox"
              checked={usdChecked}
              onClick={() => setUsdChecked((currentCheck) => !currentCheck)}
            />
            <span className="slider round" />
          </label>
          <span className="usd-text margin-right-10">USD</span>
        </div>
        <div className="home-container-input">
          <input type="text" placeholder="Enter your amount" />
        </div>
        <div className="home-input-values">
          <div className="values">
            <div className="value-container">$ 1000</div>
            <div className="value-container">$ 1000</div>
          </div>
          <div className="values">~ CAKE 0.000</div>
        </div>
        <div className="roi-timeframe">
          <span className="roi-timeframe-text">Timeframe</span>
          <div className="roi-timeframe-values">
            <Button text="1 Day" />
            <Button text="7 Day" />
            <Button text="30 Day" />
            <Button text="1 Year" />
            <Button text="5 Year" />
          </div>
        </div>
        <div className="roi-accelereted">
          <span className="roi-accelereted-text bold">
            Enable Accelerated APY{" "}
          </span>
          <label className="switch margin-right-10">
            <input
              type="checkbox"
              checked={acceleratedChecked}
              onClick={() =>
                setAcceleratedChecked((currentCheck) => !currentCheck)
              }
            />
            <span className="slider round" />
          </label>
        </div>
        <div className="roi-timeframe">
          <span className="roi-timeframe-text">Select Tier</span>
          <div className="roi-timeframe-values">
            <Button text="Tier 1" />
            <Button text="Tier 2" />
            <Button text="Tier 3" />
            <Button text="Tier 4" />
            <Button text="Tier 5" />
          </div>
        </div>
        <div className="home-toggler ">
          <span className="margin-right-10">ROI at the Current Rates</span>
        </div>
        <div className="home-container-input">
          <input type="text" className="bold" />
        </div>
        <div className="home-toggler ">
          <span className="margin-right-10">~0.000 CAKE + 0.00000 DON</span>
        </div>

        <div className="details">
          <p
            className="bold details-title"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Show Details" : "Hide Details"}
          </p>
          {showDetails && (
            <>
              <div className="details-header bold">
                <p>APY</p>
                <p className="detail-value">9.0 %</p>
              </div>
              <ul className="detail-content">
                <li>Calculate based on the current rate of the tier</li>
                <li>Calculate based on the current rate of the tier</li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
