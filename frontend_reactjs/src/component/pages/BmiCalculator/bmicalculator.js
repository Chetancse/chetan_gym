import React, { useState } from "react";

const Bmicalculator = () => {
  const [heightValue, setHeightValue] = useState("");
  const [weightValue, setWeightValue] = useState("");
  const [bmiValue, setBmiValue] = useState("");
  const [bmiMessage, setBmiMessage] = useState("");

  const calculateBmi = () => {
    if (heightValue && weightValue) {
      const heightInMeters = heightValue / 100;
      const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);
      setBmiValue(bmi);

      let message = "";
      if (bmi < 18.5) {
        message = "You are Underweight";
      } else if (bmi >= 18.5 && bmi < 25) {
        message = "You are Healthy weight";
      } else if (bmi >= 25 && bmi < 30) {
        message = "You are Overweight";
      } else {
        message = "You are Obese";
      }
      setBmiMessage(message);
    } else {
      setBmiValue("");
      setBmiMessage("");
    }
  };
  return (
    <div>
      {/*  <!-- Breadcrumb Section Begin --> */}

      <section
        class="breadcrumb-section set-bg"
        data-setbg="assets\images\schedule-bg.jpg"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="breadcrumb-text">
                <h2>BMI calculator</h2>
                <div class="bt-option">
                  {/*  <a href="./index.html">Home</a>
                            <a href="#">Pages</a> */}
                  <span>BMI calculator</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  <!-- Breadcrumb Section End --> */}

      {/* <!-- BMI Calculator Section Begin --> */}
      <section class="bmi-calculator-section spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="section-title chart-title">
                <span>check your body</span>
                <h2>BMI CALCULATOR CHART</h2>
              </div>
              <div class="chart-table">
                <table>
                  <thead>
                    <tr>
                      <th>Bmi</th>
                      <th>WEIGHT STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="point">Below 18.5</td>
                      <td>Underweight</td>
                    </tr>
                    <tr>
                      <td class="point">18.5 - 24.9</td>
                      <td>Healthy</td>
                    </tr>
                    <tr>
                      <td class="point">25.0 - 29.9</td>
                      <td>Overweight</td>
                    </tr>
                    <tr>
                      <td class="point">30.0 - and Above</td>
                      <td>Obese</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="section-title chart-calculate-title">
                <span>check your body</span>
                <h2>CALCULATE YOUR BMI</h2>
              </div>
              <div class="chart-calculate-form">
                <p>
                  Welcome to our BMI Calculator - a simple yet powerful tool
                  designed to help you understand your body composition and take
                  a step towards a healthier lifestyle. BMI is a widely
                  recognized measurement that relates your weight to your
                  height, providing a quick assessment of whether you're
                  underweight, normal weight, overweight, or obese.
                </p>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div class="row">
                    <div class="col-sm-6">
                      <input
                        type="text"
                        placeholder="Height / cm"
                        value={heightValue}
                        onChange={(e) => setHeightValue(e.target.value)}
                      />
                    </div>
                    <div class="col-sm-6">
                      <input
                        type="text"
                        placeholder="Weight / kg"
                        value={weightValue}
                        onChange={(e) => setWeightValue(e.target.value)}
                      />
                    </div>
                    <div class="col-sm-6">
                      <input type="text" placeholder="Age" />
                    </div>
                  
                                
                    <div class="col-lg-12">
                      <button type="button" onClick={calculateBmi} >
                        Calculate
                      </button>
                      {bmiValue && bmiMessage && (
                        <div className="result">
                          <p>
                            Your BMI:{" "}
                            <span className="bmi-value">{bmiValue}</span>
                          </p>
                          <p>
                            Result:{" "}
                            <span className="bmi-message">{bmiMessage}</span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- BMI Calculator Section End --> */}
    </div>
  );
};

export default Bmicalculator;
