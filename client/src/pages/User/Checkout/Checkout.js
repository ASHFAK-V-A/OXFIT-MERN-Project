
import "./Checkout.css";
import { useState } from "react";
import Link from "antd/es/typography/Link";





function Checkout() {





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
  Trainer.. `

  const [showFullText, setShowFullText] = useState(false);


  const handleReadMoreClick = () => {
    setShowFullText(true);
  };

  const handleShowLessClick = () => {
    setShowFullText(false);
  };



  return (
    <div>


      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-lg-0 mb-3">
            <div class="card p-3">
              <h1 className="fw-bold ">
                500 <span className="fs-4 fw-blod">rs</span>
              </h1>

              <div class="number">
                <label class="fw-bold fs-5" for="">
                  For 1 Month
                </label>
              </div>
              <div class="d-flex align-items-center justify-content-end">
                <button className="btn btn-primary">select</button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-8 mt-4">
          <div class="card p-3">
            <p class="mb-0 fw-bold h4">Information</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8">
            <div class="card  p-3 d-block">
              <div className="col-12 col-md-12 bg-light">
               
                <p className="text">Dear gym-goers <br /> {showFullText ? text : `${text.slice(0, 180)}...`}</p>
                {!showFullText && <button className="btn btn-dark readmore" onClick={handleReadMoreClick}>Read More</button>}
      {showFullText && <button className="btn btn-dark readmore" onClick={handleShowLessClick}>Show Less</button>}
            

              </div>   
              <div className="col-12 mt-4">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label class="form-check-label" htmlFor="flexCheckDefault" /> I accept the terms and conditions.
                 <span className="float-end fs-5 fw-bold">Admssion Fee : 1000 rs</span> 
              </div>
           

              <hr />

              <div className="col-12">
                <p class="mb-0 fw-bold h4 mb-3">ADDRESS</p>
                <div className="row">
                  <hr />

                  <div className="col-12 col-md-8">
                    <p className="fw-normal">
                      Name: <span className="fw-bolder">Jhone</span>
                    </p>
                    <p className="">
                      Address:{" "}
                      <span className="fw-bolder">amplehousesecondsteert</span>
                    </p>
                  </div>
                  <div className="col-12 col-md-4">
                    <p className="fw-normal">
                      Phone: <span className="fw-bolder">4555343434343545</span>
                    </p>
                    <p className="">
                      Age: <span className="fw-bolder">21</span>
                    </p>
                  </div>
                  <div className="col-6 col-md-8 pt-4">
                    <p className="fw-normal">
                      City: <span className="fw-bolder">Calicut</span>
                    </p>
                    <p className="">
                      State:
                      <span className="fw-bolder">Kerala</span>
                    </p>
                  </div>
                  <div className="col-6 col-md-4 pt-4">
                    <p className="fw-normal">
                      DOB: <span className="fw-bolder">11/2/2006</span>
                    </p>
                    <p className="">
                      Group: <span className="fw-bolder">21</span>
                    </p>
                  </div>
                  <div className="col-12 col-md-4 pt-4">
                    <p className="fw-normal">
                      Pin Code: <span className="fw-bolder">423232</span>
                    </p>
                  </div>
                  <div className="col-12 col-md-12 ">
                    <button className="btn btn-dark float-end">Edit</button>
                  </div>
                </div>
                <hr />
              </div>

              <div className="col-12">
                <p class="mb-0 fw-bold h4 mb-3">SELECTED PLAN</p>
                <div className="row">
                  <hr />

                  <div className="col-12 col-md-12">
                    <h1 className="text-center ">500</h1>
                    <p className="text-center fw-bolder">For 1 Month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mt-5 ">
            <div class="card p-3">
              <p class="mb-0 fw-bold h4 text-center">Payment</p>
            </div>
            <div class="card  p-3 d-block bg-light">
              <div className="col-12 col-md-12 bg-light">
                <p className="ms-1 fw-bolder">
                  Invoice <span className="float-end pe-3 fw-bold">Total</span>
                </p>
                <hr />
              </div>

              <div className="col-12 col-md-12 pt-3">
                <p className="ms-1 fw-bolder">
                  ADMSSION FEE
                  <span className="float-end pe-3 fw-bold">: 1000</span>
                </p>
                <p className="ms-1 pt-1 fw-bolder">
                  For Monthly Fee
                  <span className="float-end pe-3 fw-bold">: 500</span>
                </p>
              </div>
              <hr />
              <div className="col-12 col-md-12 ">
                <p className="ms-1 fw-bolder">
                  Total <span className="float-end pe-3 fw-bold">: 1500</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12">
          <div class="btn btn-light payment">Make Payment</div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
