import React, { useState, useEffect } from "react";
import "./PlanLIst.css";
import axios from "../../../axios/axiosInstance";
import { message } from "antd";

function PlanLIst() {
  const [PlanForm, setPlanForm] = useState({
    palnname: "",
    planamount: "",
    planduration: "",
  });
  const [error, setError] = useState();
  const [Plans, setPlans] = useState([]);
  const [posted, setPosted] = useState(false);


  useEffect(() => {
    axios
      .get("admin/planlist")
      .then((response) => {
        console.log(response);
        const plans = response.data.data;
        console.log(plans);
        setPlans(plans);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [posted]);
console.log(error);

  const OnChangeHandler = (e) => {
    const { name, value } = e.target;
    setPlanForm({ ...PlanForm, [name]: value });
  };

  const OnSubmitHandler = (e) => {
    e.preventDefault();
    setPosted(false);
    axios
      .post("admin/addplan", {
        palnname: PlanForm.palnname,
        planeamount: PlanForm.planamount,
        planduration: PlanForm.planduration,
      })
      .then((response) => {
        message.success(response.data.message);
        setPosted(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container mt-5 ">
      <h2 className="text-center mt-5 pb-4 text-decoration-underline">
        PLAN'S
      </h2>

      <div className="container border border-secondary">
        <div className="d-flex justify-content-center align-items-center">
          <h4 className="pb-3 text-decoration-underline pt-3 pb-3">ADD PLAN</h4>
        </div>

        <form onSubmit={OnSubmitHandler}>
          <div className="row justify-content-center mt-3 mb-3">
            <div className="col-md-3 mb-3">
              <label htmlFor="" className="pb-2">
                Plan Name
              </label>
              <input
                type="text"
                className="form-control"
                name="palnname"
                value={PlanForm.palnname}
                onChange={OnChangeHandler}
                placeholder="Plan Name"
              />
            </div>

            <div className="col-md-3 mb-3">
              <label htmlFor="" className="pb-2">
                Amount
              </label>
              <input
                type="number"
                className="form-control"
                name="planamount"
                value={PlanForm.planamount}
                onChange={OnChangeHandler}
                placeholder="Plan Amount"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="" className="pb-2 ">
                Plan Duration
              </label>
              <input
                type="number"
                className="form-control"
                name="planduration"
                value={PlanForm.planduration}
                onChange={OnChangeHandler}
                placeholder="Per Month"
              />
            </div>

            <div className="col-md-2 pt-4 mt-2 ">
              <input type="submit" className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>

      <section>
        <form action="">
          <table className="table mt-5">
            <thead className="thead bg-dark text-white">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Plan Name</th>
                <th scope="col">Plan Amount</th>
                <th scope="col">Plan Duration</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>

            {Plans.map((totalpalns, index) => {
      
              return (
                <tbody>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{totalpalns.PlanName} </td>
                    <td>{totalpalns.PlanAmount}</td>
                    <td>{totalpalns.PlanDuration}</td>
                    <td>
                      <button className="btn btn-primary">Edit</button>
                    </td>
                    <td>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </form>
      </section>
    </div>
  );
}

export default PlanLIst;
