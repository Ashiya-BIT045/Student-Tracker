import React, { use, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Addstudents.css'

function Addstudent() {
  const[id,setid]=useState("");
  const[name,setname]=useState("");
  const[dept,setdept]=useState("");
  const[age,setage]=useState("");
  const[email,setemail]=useState("");
  const[phoneNo,setphoneNo]=useState("");
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const student={id,name,dept,age,email,phoneNo};
    console.log(student);
    fetch("http://localhost:5000/students",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)
    }).then(()=>{
      console.log("New Student added");
      alert("Studentdata added successfully");
      navigate("/");

    }).catch((err)=>{
      console.log(err);})
  }
  return (
    <>
    <h1>ADD STUDENTS</h1>
    <div className="add-student-container">
      <form className="add-student-form" onSubmit={handleSubmit}>
        <div className="form-group">
        <label>Enter RollNo:</label>
        <input type="number" name="id" required value={id} onChange={(e)=>setid(e.target.value)} /><br/>  
        </div>
        <div className="form-group">
        <label>Enter Name:</label>
        <input type="text" name="name"  required value={name} onChange={(e)=>setname(e.target.value)}/><br/>
        </div>
        <div className="form-group">
        <label>Enter Dept:</label>
        <input type="text" name="dept" required value={dept} onChange={(e)=>setdept(e.target.value)} /><br/>
        </div>
        <div className="form-group">
         <label>Enter Age:</label>
        <input type="number" name="age" required value={age} onChange={(e)=>setage(e.target.value)}/><br/> 
        </div>
        <div className="form-group">
        <label>Enter Email:</label>
        <input type="email" name="email" required value={email} onChange={(e)=>setemail(e.target.value)}/><br/>  
        </div>
        <div className="form-group">
        <label>Enter Phone No:</label>
        <input type="tel" name="phoneNo" required value={phoneNo} onChange={(e)=>setphoneNo(e.target.value)}/><br/>
        </div>
        <div className="form-group">
        <Link to="/"><button type="submit">Back</button></Link>
        <button type="submit">Add Student</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Addstudent