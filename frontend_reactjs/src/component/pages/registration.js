import React, { useState } from "react";
import "../pages/regis.css";
import Header from "../Header";

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    gender: "male",
    phoneno: "",
   
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration successful
        setRegistrationSuccess(true);
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            gender: "male",
            phoneno: "",
          });
      } else {
        // Registration failed
        console.log("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    
    <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
       {/*  <Header/> */}
      <div class="wrapper wrapper--w680">
        <div class="card card-4">
          <div class="card-body">
            <h2 class="title">Registration Form</h2>
            <form onSubmit={handleSubmit}>
              <div class="row row-space">
                <div class="col-6">
                  <div class="input-group">
                    <label class="label">first name</label>
                    <input
                      class="input--style-4"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-group">
                    <label class="label">last name</label>
                    <input
                      class="input--style-4"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div class="row row-space">
                <div class="col-6">
                  <div class="input-group">
                    <label class="label">Address</label>
                    <div class="input-group-icon">
                      <input
                        class="input--style-4"
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                      <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-group">
                    <label class="label">Gender</label>
                    <div class="p-t-10">
                      <label class="radio-container m-r-45">
                        Male
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          checked={formData.gender === "male"}
                          onChange={handleChange}
                        />
                        <span class="checkmark"></span>
                      </label>
                      <label class="radio-container">
                        Female
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          checked={formData.gender === "female"}
                          onChange={handleChange}
                        />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row row-space">
                <div class="col-6">
                  <div class="input-group">
                    <label class="label">Email</label>
                    <input
                      class="input--style-4"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-group">
                    <label class="label">Phone Number</label>
                    <input
                      class="input--style-4"
                      type="text"
                      name="phoneno"
                      value={formData.phoneno}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              {/*  <div class="row row-space">
                    <div class="col-12">
                    <div class="input-group">
                        <label class="label">Subject</label>
                        <div class="rs-select2 js-select-simple select--no-search">
                            <select name="subject">
                                <option disabled="disabled" selected="selected">Choose option</option>
                                <option>Subject 1</option>
                                <option>Subject 2</option>
                                <option>Subject 3</option>
                            </select>
                            <div class="select-dropdown"></div>
                        </div>
                    </div>
                    </div>
                    </div> */}
              <div class="p-t-15">
              {registrationSuccess && <p>Registration done successfully!</p>}
                <button class="btn btn--radius-2 btn--blue" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
