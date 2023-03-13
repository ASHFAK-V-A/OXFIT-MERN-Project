import axios from '../../../axios/axiosInstance'
import React,{useState,useEffect} from 'react'

function Plans() {
const [plan,setPlan]=useState([])

useEffect(()=>{

    axios.get('/plan').then((response)=>{
        console.log('responseeeeeeeeeee');
        const data=response.data
        console.log(data);
setPlan(data)
    }).catch((err)=>{
        console.log(err);
    })
},[])
console.log(plan);



    
    return (   
<>




        {plan.map((isPlan,index)=>(
          <div className="col-lg-4 mb-lg-0 mb-3">
            <div className="card p-3">
                <p className=''>
               {isPlan.PlanName}
                </p>
              <h1 className="fw-bold ">
              {isPlan.PlanAmount}<span className="fs-4 fw-blod">rs</span>
              </h1>

              <div className="number">
                <label className="fw-bold fs-5" for="">
                {isPlan.PlanDuration} Month
                </label>
              </div>
              <div className="d-flex align-items-center justify-content-end">
                <button className="btn btn-primary">select</button>
              </div>
            </div>
          </div>
))}
</>
 
        
  )

 
}

export default Plans
