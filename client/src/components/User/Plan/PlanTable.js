import React, { useState, useEffect } from "react";
import antd from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "../../../axios/axiosInstance";
import "./PlanTable.css";

const token = window.sessionStorage.getItem("token");

console.log(token);
function PlanTable() {
  const [plan, setPlan] = useState([]);
  const [isAdmisson, setAdmssion] = useState(false);
  const [MemberData,setMemberData]=useState([])

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/plan", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        const isAdmission = response.data.isApplication
        const Member = response.data
           setPlan(response.data)
           setMemberData([Member])
           setAdmssion(isAdmission)
      })
      .catch((err) => { 
        console.log(err);
      });
  }, []);
  console.log(isAdmisson);
console.log(MemberData);
  return (
    <>
      {!isAdmisson ? (
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
                      <button className="sltbtn" value="">
                        <Link to={`/admissionform/${plan._id}`}>select</Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div id="generic_price_table" className="container">
          <div className="row pt-5 justify-content-center">
            <h2 className="text-center text-decoration-underline">
              Admission Deatils
            </h2>
{MemberData.map((memberdetail)=>(


            <div class="col-md-11 mt-5">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Name</h6>
                    </div>
                    <div class="col-sm-3 text-secondary">{memberdetail.name}</div>
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-3 text-secondary">{memberdetail.email}</div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-3 text-secondary">{memberdetail.address}</div>
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phon</h6>
                    </div>
                    <div class="col-sm-3 text-secondary">{memberdetail.phonenumber}</div>
                  </div>
              
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Age</h6>
                    </div>
                    <div class="col-sm-3 text-secondary">{memberdetail.age}</div>
                    <div class="col-sm-3">
                      <h6 class="mb-0">Gender</h6>
                    </div>
                    <div class="col-sm-3 text-secondary">{memberdetail.gender}</div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Boold Group</h6>
                    </div>
                    <div class="col-sm-3 text-secondary">{memberdetail.bloodgroup}</div>
                    <div class="col-sm-3">
                      <h6 class="mb-0">DOB</h6>
                    </div>
                    <div class="col-sm-3 text-secondary">{memberdetail.dob}</div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">City</h6>
                    </div>
                    <div class="col-sm-3 text-secondary">{memberdetail.city}</div>
                    <div class="col-sm-3">
                      <h6 class="mb-0">State</h6>
                    </div>
                    <div class="col-sm-3 text-secondary">{memberdetail.state}</div>
                  </div>
          
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Plan Activation Date</h6>
                    </div>
                    <div class="col-sm-3 fw-bold">{memberdetail. planActivationDate}</div>
                    <div class="col-sm-3">
                      <h6 class="mb-0">Plan Expiration Date</h6>
                    </div>
                    <div class="col-sm-3 fw-bold">{memberdetail.planExpirationDate}</div>
                  </div>
                  <hr />
          
               
                  <div class="row">
                    <div class="col-sm-12">
                      <a
                        class="btn btn-info "
                        target="__blank"
                        href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                      >
                        Edit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default PlanTable;
