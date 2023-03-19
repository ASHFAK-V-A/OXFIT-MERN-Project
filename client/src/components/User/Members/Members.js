import React,{useEffect,useState} from "react";
import axios from '../../../axios/axiosInstance'
import "./Member.css"
function Members() {

  const [memberList,setMemberList]=useState([])

useEffect(()=>{
  axios.get('/members').then((response)=>{
    setMemberList(response.data)
  })

})

  return (
    <div className="container mt-5 ">
      <h2 className="text-center mt-5 pb-4 text-decoration-underline">
        Members
      </h2>

      <table className="table mt-5">
        <thead className="thead bg-white text-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Chat</th>
        
          </tr>
        </thead>
{memberList.map((members,index)=>(


        <tbody>
          <tr className="bg-white" >
            <th scope="row">{index+1}</th>
            <td>
              <img
                src="https://t4.ftcdn.net/jpg/01/18/03/33/240_F_118033377_JKQA3UFE4joJ1k67dNoSmmoG4EsQf9Ho.jpg"
                className="rounded-circle"
                alt="Profile Image"
                style={{ width: 50 }}
              />
            </td>
            <td>{members.name}</td>
            <td>{members.email}</td>

        
            <td>
              <button className="btn btn-primary"><i className="fa fa-message"></i></button>
            </td>
          
     
          </tr>
        </tbody>
        ))}
      </table>
      
    </div>
  );
}

export default Members;
