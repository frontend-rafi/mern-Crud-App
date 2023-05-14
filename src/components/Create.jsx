import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState();
    const [error, setError] = useState("");
    const handleForm= async(e)=>{
e.preventDefault();
const addUser={name,email,age} 
const res = await fetch("http://localhost:8080/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(addUser),
  });

const result = res.json()
if(!res.ok){
console.log(result.error);
setError(result.error)
}
if(res.ok){
    console.log(result);
    setName("");
    setEmail("");
    setAge(0);
    setError("");
    navigate("/read");
}

    }
  return (
    <div class="container my-2">
    <h1 class="h1 text-center">Fill the data</h1>
    {error && <div class="alert alert-danger"> {error} </div>}
   <form onSubmit={handleForm}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" 
    value={name}
    onChange={(e)=>{setName(e.target.value)}}
    className="form-control"required
    id="exampleInputName1" />
   
  <div className="mb-3">
    <label for="exampleInputName1" 
   
    className="form-label">E-mail</label>
    <input type="email" className="form-control" value={email}
      onChange={(e)=>{setEmail(e.target.value)}}
    id="exampleInputEmail1"/>
  </div>
  <div className="mb-3 form-check">
  <label className="form-check-label" for="exampleCheck1">age</label>
  <input type="Number" 
 value={age} 
 onChange={(e)=>{setAge(e.target.value)}}
  className="form-control" id="exampleInputNumber1"/>
   
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
</div>
  )
}

export default Create