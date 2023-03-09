import React from "react";
import { useState, useEffect } from "react";
import axios from "../../../axios/axiosInstance";
import { useNavigate } from "react-router";
import "./Modal.css";

function Modalshow({ isMemb, CloseEduitUser }) {
  const navigate = useNavigate();

  const token = window.sessionStorage.getItem("token");

  const [errors, setErrors] = useState({});
  const [age, setAge] = useState();

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
  const [editForm, setEditForm] = useState(initialState);

  const OnChangeHandler = (e) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  const onGenderChange = (e) => {
    setEditForm({ ...editForm,gender: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault()
    axios
      .post(
        "/admission",
        {
          age: editForm.age,
          Bloodgrp: editForm.bloodgrp,
          gender: editForm.gender,
          gender: editForm.gender,
          address: editForm.address,
          phonenumber: editForm.phonenumber,
          pincode: editForm.pincode,
          state: editForm.state,
          city: editForm.city,
          Dob: editForm.Dob,
          token: token,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        CloseEduitUser()
      })
      .catch((error) => {
        console.log(error);
        setErrors(error.response.data);
        setAge(error.response.data.age);
      });
  };

  console.log(editForm);
  return (
    <>
      <div>
        <section className="modal-main">
          <h2 className="text-center pt-4"> Edit User</h2>
          <div className="container p-3">
            <form onSubmit={onSubmitHandler}>
              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={isMemb.name}
                    placeholder="Name"
                    readOnly
                    style={{ backgroundColor: "#e6e6e6" }}
                  />
                </div>

                <div className="col  col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="phonenumber"
                    value={editForm.phonenumber}
                    placeholder="Phone"
                    autoFocus
                    required
                    onChange={OnChangeHandler}
                  />
                  {errors && (
                    <p className="fs-6" style={{ color: "red" }}>
                      {errors.phonenumber}
                    </p>
                  )}
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-12 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={editForm.address}
                    onChange={OnChangeHandler}
                    name="address"
                    placeholder="Address"
                    required
                  />
                </div>
                <div className="col-6">
                  <input
                    type="number"
                    className="form-control"
                    value={editForm.age}
                    onChange={OnChangeHandler}
                    name="age"
                    placeholder="Age"
                    required
                  />
                  {age && (
                    <p className="fs-6" style={{ color: "red" }}>
                      {age}
                    </p>
                  )}
                </div>
                <div className="col-6">
                  <div className="form-outline">
                    <div>
                      <select
                        name="bloodgrp"
                        className="w-100 p-1"
                        required
                        onChange={OnChangeHandler}
                      >
                        <option value="" disabled selected>
                          Blood Group
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
              </div>
              <div className="row pt-3">
                <div className="col-6 mb-3">
                  <input
                    type="date"
                    className="form-control"
                    value={editForm.Dob}
                    onChange={OnChangeHandler}
                    name="Dob"
                    required
                  />
                </div>

                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    value={editForm.city}
                    name="city"
                    onChange={OnChangeHandler}
                    placeholder="City"
                    required
                  />
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={editForm.state}
                    name="state"
                    onChange={OnChangeHandler}
                    placeholder="State"
                    required
                  />
                </div>
                <div className="col-6">
                  <input
                    type="number"
                    className="form-control"
                    value={editForm.pincode}
                    name="pincode"
                    onChange={OnChangeHandler}
                    placeholder="Pin Code"
                    required
                  />
                </div>
              </div>
              <label className="form-label pb-2">Gender</label>
              <div className="form-check pb-2 ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="male"
                  value="male"
                  checked={editForm.gender === "male"}
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
                  checked={editForm.gender === "female"}
                  onChange={onGenderChange}
                />
                <label className="form-check-label">Female</label>
              </div>
              <div className="col-12 d-flex justify-content-end ">
                <button
                  className="btn btn-danger me-2"
                  onClick={CloseEduitUser}
                >
                  Close
                </button>
                <button
                  className="btn btn-primary me-3"
                
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Modalshow;
