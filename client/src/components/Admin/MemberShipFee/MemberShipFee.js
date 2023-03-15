import React, { useState, useEffect } from "react";
import axios from "../../../axios/axiosInstance";
import { message } from "antd";

function MemberShipFee() {
  const [AddmemberShipFee, setMemberShipFee] = useState();
  const [showMemberShipFee, setShowMemberShipFee] = useState();
const [addMembBtn,setaddMembBtn]=useState(false)


  useEffect(() => {
    axios.get("/admin/getmembershipfee").then((response) => {
        const membershipfee=  response.data.membershipfee
      setShowMemberShipFee(membershipfee);
    });
  },[addMembBtn]);



  const OnchangeHanlder = (e) => {
    const { value } = e.target;
    setMemberShipFee(value);
  };



  const OnSubmitHandler = (e) => {
    e.preventDefault();
    setaddMembBtn(false)
    axios
      .post("/admin/addmembershipfee", {
        AddmemberShipFee,
      })
      .then((response) => {
        const membershipfee = response.data.message;
        message.success(membershipfee);
        setaddMembBtn(true)
      });
  };
console.log(AddmemberShipFee);
  return (
    <div className="container mt-5 ">
      <h2 className="text-center mt-5 pb-4 text-decoration-underline">
        Member Ship Fee
      </h2>

      <div className="container border border-secondary">
        <div className="d-flex justify-content-center align-items-center">
          <h4 className="pb-3 text-decoration-underline pt-3 pb-3">
            Add MemberShip Fee
          </h4>
        </div>

        <form onSubmit={OnSubmitHandler}>
          <div className="row justify-content-center mt-3 mb-3">
            <div className="col-md-3 mb-3 ">
              <input
                type="number"
                className="form-control"
                autoFocus
                value={AddmemberShipFee}
                onChange={OnchangeHanlder}
                placeholder="Admssion Fee"
              />
            </div>

            <div className="col-md-2  ">
              <input type="submit" className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>

      <section>
        <form action="">
        {showMemberShipFee ? (
          <table className="table mt-5">
            <thead className="thead bg-dark text-white">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Member Ship Fee</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            
          

        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{showMemberShipFee}</td>

            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
       

          </table>
          ) : (
            <p className="text-center fs-3">No membership fees to display.</p>
          )}
        </form>
      </section>
    </div>
  );
}

export default MemberShipFee;
