import React, { useEffect } from "react";
import { useState } from "react";
import axios from "../../../axios/axiosInstance";
import { useNavigate } from "react-router";
import "./AdmissionForm.css";

function AdmissionForm() {
  const [errors, setErrors] = useState({});
  const [Admssion, setAdmssion] = useState([]);
  const [age, setAge] = useState();
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");

  const member = sessionStorage.getItem("member");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  });

  const initialState = {
    age: "",
    bloodgrp: "",
    gender: "",
    address: "",
    phonenumber: "",
    pincode: "",
    city: "",
    Dob: "",
    state: "",
  };

  const [admissionForm, setAdmissionForm] = useState(initialState);

  const onchangeHandler = (e) => {
    const { name, value } = e.target;
    setAdmissionForm({ ...admissionForm, [name]: value });
  };

  const onGenderChange = (e) => {
    setAdmissionForm({ ...admissionForm, gender: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    await axios
      .post(
        "/admission",
        {
          age: admissionForm.age,
          Bloodgrp: admissionForm.bloodgrp,
          gender: admissionForm.gender,
          address: admissionForm.address,
          phonenumber: admissionForm.phonenumber,
          pincode: admissionForm.pincode,
          state: admissionForm.state,
          city: admissionForm.city,
          Dob: admissionForm.Dob,
          token: token,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {



        navigate('/checkout')
      })
      .catch((error) => {
        console.log(error);
        setErrors(error.response.data);
        setAge(error.response.data.age)
      });
  };

console.log(age);
  return (
    <div className="container p-0">
      <section className="intro mt-5">
        <div className="mask d-flex align-items-center h-100 bg-light ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div className="card" style={{ borderRadius: 1 }}>
                  <div className="card-body p-5">
                    <h1 className="mb-5 text-center">Admission Form</h1>

                    <form onSubmit={onSubmitHandler}>
                      <div className="row">
                        <div className="col-12 col-md-6 mb-4">
                          <div className="form-outline">
                            <label className="form-label">Name</label>
                            <input
                              type="text"
                              id="form6Example1"
                              className="form-control"
                              name="name"
                              value={member}
                              readOnly="true"
                              style={{ backgroundColor: "#e6e6e6" }}
                            />
                          </div>
                        </div>

                        <div className="col-12 col-md-6 mb-4">
                          <div className="form-outline">
                            <label className="form-label">Phone Number</label>
                            <input
                              type="number"
                              id="form6Example1"
                              className="form-control"
                              name="phonenumber"
                              onChange={onchangeHandler}
                              value={admissionForm.phonenumber}
                              placeholder="Enter phone number"
                            />
                            {errors && (
                              <p className="fs-6" style={{ color: "red" }}>
                                {errors.phonenumber}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-6 col-md-4 mb-4">
                          <div className="form-outline">
                            <label className="form-label">Boold Group</label>
                            <div>
                              <select
                                name="bloodgrp"
                                className="w-100 p-1"
                                required
                                onChange={onchangeHandler}
                              >
                                <option value="" disabled selected>
                                  Select
                                </option>
                                <option value="A+">A+</option>
                                <option value="B+">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-md-4 mb-4">
                          <div className="form-outline">
                            <label className="form-label">Age</label>
                            <input
                              type="number"
                              id="form6Example1"
                              className="form-control"
                              name="age"
                              onChange={onchangeHandler}
                              value={admissionForm.age}
                              required
                              placeholder="Enter age"
                            />
                            {age && (
                              <p className="fs-6" style={{ color: "red" }}>
                                {age}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-8 col-md-4 mb-4">
                          <div className="form-outline">
                            <label className="form-label">DOB</label>
                            <input
                              type="date"
                              id="form6Example1"
                              name="Dob"
                              onChange={onchangeHandler}
                              value={admissionForm.Dob}
                              required
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <label className="form-label pb-2">Gender</label>
                      <div className="form-check pb-2 ">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="male"
                          value="male"
                          checked={admissionForm.gender === "male"}
                          onChange={onGenderChange}
                          id="flexRadioDefault1"
                          required
                        />
                        <label className="form-check-label">Male</label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="female"
                          id="flexRadioDefault2"
                          value="female"
                          checked={admissionForm.gender === "female"}
                          onChange={onGenderChange}
                        />
                        <label className="form-check-label">Female</label>
                      </div>
                      <div className="form-outline mb-3 mt-4">
                        <label className="form-label">Address</label>
                        <input
                          type="text"
                          id="form6Example3"
                          className="form-control"
                          name="address"
                          onChange={onchangeHandler}
                          value={admissionForm.address}
                          required
                          placeholder="Enter Address"
                        />
                      </div>

                      <div className="row">
                        <div className="col-12 col-md-4 mb-4">
                          <div className="form-outline">
                            <label className="form-label">State</label>
                            <input
                              type="text"
                              id="form6Example1"
                              className="form-control"
                              name="state"
                              onChange={onchangeHandler}
                              value={admissionForm.state}
                              required
                              placeholder="Enter state"
                            />
                          </div>
                        </div>

                        <div className="col-12 col-md-4 mb-4">
                          <div className="form-outline">
                            <label className="form-label">City</label>
                            <input
                              type="text"
                              id="form6Example1"
                              className="form-control"
                              name="city"
                              onChange={onchangeHandler}
                              value={admissionForm.city}
                              required
                              placeholder="Enter city"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                          <div className="form-outline">
                            <label className="form-label">Pin Code</label>
                            <input
                              type="number"
                              id="form6Example1"
                              className="form-control"
                              name="pincode"
                              onChange={onchangeHandler}
                              value={admissionForm.pincode}
                              required
                              placeholder="Enter pin code"
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary btn-rounded btn-block float-end"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdmissionForm;
