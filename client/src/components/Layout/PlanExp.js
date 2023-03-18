import React,{useState,useEffect} from 'react'
import axios  from '../../axios/axiosInstance';
import { Link } from 'react-router-dom';
function PlanExp({PlanExpMsg}) {
  
  const [PlanRenew,setPlanRenew]=useState(false)
  const [PlanList,setPlanList]=useState([])
  const token = sessionStorage.getItem('token')

const RenewPlan =()=>{
setPlanRenew(true)
}

useEffect(()=>{
axios.get('/planrenewal',{
  headers: {
    authorization: `Bearer ${token}`,
  }
}).then((response)=>{
setPlanList(response.data)

})
},[PlanRenew])



  return (
<>

{!PlanRenew ? (  
    <div>
    <svg className='d-none'>
    <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
       </symbol>
    </svg>
<div>
    <div className="col-12 col-md-7 m-auto">
  <div className="container">


  <div className="alert alert-danger align-items-center" role="alert">
    <div className="d-flex">
     <svg  className="bi flex-shrink-0 me-3 mt-2" width="24" height="24" role="img" aria-label="Danger:">
      <use href="#exclamation-triangle-fill"/>     
    </svg> 
   <h2>PLAN EXPIRED!</h2>   
    </div>
<div className="row mt-3 ms-2">
    <p className='fs-5'>{PlanExpMsg}</p>
   
   <div className="col-12 pt-3">
  <button className='btn btn-primary float-end' onClick={RenewPlan}>Renew</button>   
   </div>

</div>

    <div>
    </div>
 
  </div>
</div>
</div>
  </div>         
</div>
):(
<div class="container">
        <div class="row">
          {PlanList.map((planlist)=>(

   
            <div class="col-lg-4 mb-lg-0 mb-3">
              {console.log(planlist)}
        
                <div class="card p-3">
                  <h4 className='mb-4'>{planlist.PlanName}</h4>
                    <h1 className=''>{planlist.PlanAmount}</h1>
                    <div class="number">
                      <small className='fw-bold'>For {planlist.PlanDuration} month</small>
                    </div>
                    <div class="d-flex align-items-center justify-content-end">
                     <Link className='btn btn-primary' to={`/checkout/${planlist._id}`}>select</Link>
                    </div>
                </div>
            </div>
                ))}
           
    

            </div>
            
            </div>
            

)}
  </> 
  )
}

export default PlanExp

