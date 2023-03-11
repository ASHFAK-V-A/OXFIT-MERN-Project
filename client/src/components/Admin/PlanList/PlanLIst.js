import React from "react";
import "./PlanLIst.css";

function PlanLIst() {
  return (
    <div className="container mt-5 ">
      <h2 className="text-center mt-5 pb-4 text-decoration-underline">
        PLAN'S
      </h2>

      <div className="container border border-secondary">
        <div className="d-flex justify-content-center align-items-center">
          <h4 className="pb-3 text-decoration-underline pt-3 pb-3">ADD PLAN</h4>
        </div>

        <form>
          <div class="row justify-content-center mt-3 mb-3">
            <div class="col-md-4 mb-3">
              <label htmlFor="" className="pb-2">
                Amount
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="First name"
              />
            </div>
            <div class="col-md-4">
              <label htmlFor="" className="pb-2 ">
                Plan Duration
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="First name"
              />
            </div>

            <div class="col-md-2 pt-4 mt-2 ">
              <input
                type="submit"
                class="btn btn-primary"
                placeholder="Last name"
              />
            </div>
          </div>
        </form>
      </div>




      <section>
        <form action="">
          <table class="table mt-5">
            <thead class="thead bg-dark text-white">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Amount</th>
                <th scope="col">Plan Duration</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row">1</th>
                <td> Amount</td>
                <td>sdf</td>
                <td>
                  <button className="btn btn-primary">Edit</button>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </section>
    </div>
  );
}

export default PlanLIst;
