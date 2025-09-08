import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import './View.css'; 

function View() {
  const {id}=useParams();
  const[studentdata,setStudentdata]=useState("");
  useEffect(()=>{
    fetch("http://localhost:5000/students/"+id)
    .then((res)=>res.json())
    .then((data)=>setStudentdata(data))
    .catch((err)=>console.log(err));
  },[]);
  return (
    <>
    <div className="container">
      {studentdata &&<div>
      <div className="row"><p><span className="label">Roll No:</span> {studentdata.id}</p></div>
      <div className="row"><p><span className="label">Name:</span> {studentdata.name}</p></div>
      <div className="row"><p><span className="label">Dept:</span> {studentdata.dept}</p></div>
      <div className="row"><p><span className="label">Age:</span> {studentdata.age}</p></div>
      <div className="row"><p><span className="label">Email:</span> {studentdata.email}</p></div>
      <div className="row"><p><span className="label">Phone No:</span> {studentdata.phoneNo}</p></div></div>}
      <div className='back-btn-div'>
      <Link to="/"><button className="Back-btn">Back</button></Link>
      </div>  
    </div>
    
   
    </>
  )
}

export default View