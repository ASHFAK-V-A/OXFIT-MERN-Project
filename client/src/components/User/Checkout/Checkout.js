import React from "react";
import "./Checkout.css";
import { useState, useEffect } from "react";
import swal from 'sweetalert'
import axios from "../../../axios/axiosInstance";
import { useNavigate, useParams } from "react-router";
import Modalshow from "../../../components/User/Modal/Modal";
import {Key_ID} from '../../../constants/RazorPay'
import "./Checkout.css";


function Checkout() {
  const [PlanData, setPlanData] = useState([]);
  const [Member, setMember] = useState([]);
  const [editUser, setEditUser] = useState(false);

  const id = useParams().id;

  const text = `
Please note that as of today, all members entering the gym
will be required to pay an admission fee 1000 .This fee will be
used to maintain and improve the gym's facilities and
equipment, ensuring a safe and enjoyable workout experience
for all.The admission fee will 1000 be a one-time payment, payable
upon your first visit to the gym. After that, you will have
unlimited access to the gym during operating hours for the
duration of your membership. We understand that this may be an
inconvenience for some of our loyal members, but we hope that
you can understand the necessity of this fee to maintain and
improve our facilities. Thank you for your understanding, and
we look forward to seeing you at the gym soon. Best regards,
Trainer.. `;

  const token = window.sessionStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    axios
      .get("/checkout", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const isMember = response.data;
        setMember([isMember]);
      });
  }, [editUser]);

  useEffect(() => {
    axios.get(`/tottalamount/${id}`).then((response) => {
      setPlanData(response.data);
    });
  }, []);


  const OnSubmitHandler = (e)=>{
    e.preventDefault()
   try {
    axios.post('/payment',{
    data:PlanData.totalBill,
    }).then((response)=>{
   const data=response.data;
    initPayment(data.data)
    }).catch((err)=>{
      console.log(err);
    })

    
   } catch (error) {
    console.log(error.message);
   }

  }

  const initPayment=(data)=>{
const options={
  key:Key_ID,
  name:'TEST',
  amount:data.amount,
  currency:data.currency,
  order_id:data.id,
  handler:async(response)=>{
    console.log(response);
    try {
   await axios.post(`/VerifyPayment/${id}`,{
        data:PlanData.totalBill,
        planId:id,
        response,
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }).then((responesres)=>{
        swal({
          title: responesres.data.message,
          icon: "success",
          button: "OK",
        });
          navigate('/admission')
        
      })
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
  
}
const rz1 = new window.Razorpay(options)
rz1.open()


  }


  const [showFullText, setShowFullText] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullText(true);
  };

  const handleShowLessClick = () => {
    setShowFullText(false);
  };

  const editUserHandler = () => {
    setEditUser(true);
  };

  const CloseEduitUser = () => {
    setEditUser(false);
  };


 


  return (
    <div className="bodyC">
      <form onSubmit={OnSubmitHandler}>
    
      <div className="container">
        <div className="col-12 col-md-7 col-sm-12 mt-4">
          <div className="card p-3">
            <p className="mb-0 fw-bold h4 text-danger">Information</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-7">
            <div className="card  p-3 d-block">
              <div className="col-12 col-md-12 bg-light">
                <p className="text">
                  Dear gym-goers <br />
                  {showFullText ? text : `${text.slice(0, 180)}...`}
                </p>
                {!showFullText && (
                  <button
                    className="btn btn-dark readmore"
                    onClick={handleReadMoreClick}
                  >
                    Read More
                  </button>
                )}
                {showFullText && (
                  <button
                    className="btn btn-dark readmore"
                    onClick={handleShowLessClick}
                  >
                    Show Less
                  </button>
                )}
              </div>
              <div className="col-12 mt-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefault"
                /> 
                 I accept the terms and conditions.
              </div>
              <div className="col-12 d-flex justify-content-end mt-4">
                <span className=" fs-5 ">
                  Admssion Fee :
                  <span className="fs-4 fw-bold">
                    {PlanData.membershipFeeAmount} rs
                  </span>
                </span>
              </div>
              <hr />

              {Member.map((isMemb) => {
                return (
                  <address key={isMemb.name}>
                    <div className="col-12">
                      <p className="mb-0 fw-bold h4 mb-3">ADDRESS</p>
                      <div className="row">
                        <hr />

                        <div className="col-12 col-md-8">
                          <p className="fw-normal">
                            Name:
                            <span className="fw-bolder">{isMemb.name}</span>
                          </p>
                          <p className="">
                            Address:
                            <span className="fw-bolder">{isMemb.address}</span>
                          </p>
                        </div>
                        <div className="col-12 col-md-4">
                          <p className="fw-normal">
                            Phone:
                            <span className="fw-bolder">
                              {isMemb.phonenumber}
                            </span>
                          </p>
                          <p className="">
                            Age: <span className="fw-bolder">{isMemb.age}</span>
                          </p>
                        </div>
                        <div className="col-6 col-md-8 pt-4">
                          <p className="fw-normal">
                            City:
                            <span className="fw-bolder">{isMemb.city}</span>
                          </p>
                          <p className="">
                            State:
                            <span className="fw-bolder"> {isMemb.state}</span>
                          </p>
                        </div>
                        <div className="col-6 col-md-4 pt-4">
                          <p className="fw-normal">
                            DOB: <span className="fw-bolder">{isMemb.dob}</span>
                          </p>
                          <p className="">
                            Group:
                            <span className="fw-bolder">
                              {isMemb.bloodgroup}
                            </span>
                          </p>
                        </div>
                        <div className="col-6 col-md-8 pt-2">
                          <p className="fw-normal">
                            Pin Code:
                            <span className="fw-bolder">{isMemb.pincode}</span>
                          </p>
                        </div>
                        <div className="col-6 col-md-4 pt-2">
                          <p className="fw-normal">
                            Gender:
                            <span className="fw-bolder">{isMemb.gender}</span>
                          </p>
                        </div>

                        <div className="col-12 col-md-12 pt-3 ">
                          <button
                            className="btn btn-dark float-end"
                            onClick={editUserHandler}
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                      <hr />
                    </div>
                    {editUser && (
                      <Modalshow
                        isMemb={isMemb}
                        CloseEduitUser={CloseEduitUser}
                      />
                    )}
                  </address>
                );
              })}

              <div className="col-12">
                <p className="mb-0 fw-bold h4 mb-3">SELECTED PLAN</p>

                <div className="row">
                  <hr />

                  <div className="col-12 col-md-12">
                    <h3 className="text-center pb-2">{PlanData.plantype}</h3>
                    <h1 className="text-center pb-2  ">
                      {PlanData.selectedplan}
                    </h1>
                    <p className="text-center fw-bolder">
                      For {PlanData.planduration} Month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12  col-md-5  mt-5 ">
            <div className="card p-3">
              <p className="mb-0 fw-bold h4 text-center">Payment</p>
            </div>
            <div className="card  p-3 d-block bg-light">
              <div className="col-12 col-md-12 bg-light">
                <p className="ms-1 fw-bolder">
                  Invoice <span className="float-end pe-3 fw-bold">Total</span>
                </p>
                <hr />
              </div>   

              <div className="col-12 col-md-12  pt-3">
                <p className="ms-1  text-muted">
                  ADMSSION FEE
                  <span className="float-end pe-3 fw-bold text-dark">
                    : {PlanData.membershipFeeAmount}.00
                  </span>
                </p>

                <div>
                  <p className="ms-1 pt-1 text-muted">
                    Monthly Payment
                    <span className="float-end pe-3 fw-bold text-dark">
                      : {PlanData.selectedplan}.00
                    </span>
                  </p>

                  <p className="ms-1 pt-1 text-muted">
                    Plan Duration
                    <span className="float-end pe-3 fw-bold text-dark ">
                      : {PlanData.planduration} month
                    </span>
                  </p>
                </div>
              </div>
              <hr />
              <div className="col-12 col-md-12 ">
                <p className="ms-1 fw-bolder fs-4">
                  Total
                  <span className="float-end pe-3 fw-bold fs-3 text-success">
                    : {PlanData.totalBill}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <input type='submit' className="btn btn-light payment" value='Make Payment'/>
        </div>
      </div>
        </form>
    </div>
  );
}

export default Checkout;
