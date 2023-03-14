import React, { useState, useEffect } from "react";
import antd from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "../../../axios/axiosInstance";
import "./PlanTable.css";
function PlanTable() {
  const [plan, setPlan] = useState([]);
const navigate = useNavigate()
  useEffect(() => {
    axios
      .get("/plan")
      .then((response) => {
        const data = response.data;
 
        console.log(data);
        setPlan(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div id="generic_price_table">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="price-heading clearfix">
              <h1>Select Plan</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {plan.map((plan) => (
            <div className="col-md-4" key={plan._id}>
              <div className="generic_content active clearfix">
                <div className="generic_head_price clearfix">
                  <div className="generic_head_content clearfix">
                    <div className="head_bg"></div>
                    <div className="head">
                      <span>{plan.PlanName}</span>
                    </div>
                  </div>

                  <div className="generic_price_tag clearfix">
                    <span className="price">
                      <span className="sign">₹</span>
                      <span className="currency">{plan.PlanAmount}</span>
                    </span>
                  </div>
                </div>
                <hr />
                <div className="generic_feature_list">
                  <ul>
                    <li className="fw-bold fs-4">
                      For<span> {plan.PlanDuration} </span>Month
                    </li>
                  </ul>
                </div>
                <hr />

                <div className="generic_price_btn clearfix">
                  <button
                    className="sltbtn"
                    value=""
                  >
                   <Link to={`/admissionform/${plan._id}`}>select
                   </Link> 
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlanTable;
