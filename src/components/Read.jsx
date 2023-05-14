import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Read() {
  const navigate  = useNavigate();
const [data,setData] = useState();
const [error,setError] = useState();

const getData= async()=>{
const res = await fetch("http://localhost:8080/api/users");


const result = await res.json();


if(!res.ok){
  console.log(result.error);
  setError(result.error)
  }
  if(res.ok){
      console.log(result);
      setData(result);
   
  }
}
useEffect(() => {
  getData();

}, [])
//! delete function 
const handleDelete= async(id)=>{
const res  =await fetch(`http://localhost:8080/api/users/${id}` , {
  method: "DELETE"
});
const result = await res.json();
if(!res.ok){
  console.log(result.error);
  setError(result.error)
  }
  if(res.ok){
      console.log(result);
      setError("Deleted Succesfully");

      setTimeout(() => {
        setError("");
        getData();
      }, 1000);
  }
}


const handleUpdate =(id)=>{
  navigate(`/${id}`);
}

  return (
    <div className="container my-2">
    {error && <div class="alert alert-danger"> {error} </div>}
    <div className="row">
      {data?.map((ele) => (
        <div key={ele._id} className="col-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{ele.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{ele.email}</h6>
              <p class="card-text">{ele.age}</p>
              <button 

              class="btn btn-primary"
              onClick={()=>handleUpdate(ele._id)}
              >Edit</button>
              &nbsp;
              &nbsp;
              
              <button class="btn btn-primary"
              onClick={()=>handleDelete(ele._id)}
              >Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Read