import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {Toaster, toast} from 'react-hot-toast'
import { useAuth } from './ResumeBuilder/builder/components/context/auth';
import axios from 'axios'; 

const Login = () => {

  const [email , setEmail] = useState();
  const [password , setpassword] =useState();  
   const Navigate = useNavigate(); 
   const location = useLocation();
    const {auth , setAuth} = useAuth();
    // console.log(useAuth);


   const handleSubmit = async(e) =>{
    e.preventDefault();
      try {
       
        const res = await axios.post(`https://myfuseback.vercel.app/api/auth/login` ,{email,password}) ; 
         if(res.data.success)
    {
            toast.success(res.data.message);
           
            setAuth({
              ...auth , 
              user:res.data.user,
              token:res.data.token
            }); 
             
            localStorage.setItem('auth',JSON.stringify(res.data))
            // Navigate( location.state || '/');
           

    }
    else
    {
    
      toast.error("invalid login id and password ")
    }
          
      } catch (error) {
        console.log(error); 
        toast.error("Please Enter Correct User Id and password")
      }
  }
  return (
    <div className="container-fluid contianer-fluid-reigister">
          <div className="row register">
          
             <div className="col-lg-3 col-10 register_div">
             <h1> Login Form</h1>
                <form onSubmit={handleSubmit} >
                <div className="mb-3">
                  <input  type="email" className="form-control shadow-none" id="exampleInputemail"    placeholder="Enter your Email " value={email}  onChange={(e)=>{setEmail(e.target.value)}}  />
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control shadow-none" id="exampleInputPassword1"     placeholder="Enter your Password "  value={password} onChange={(e)=>{setpassword(e.target.value)}}  />
                </div>
                 
                <button type="submit" className="register_button">Login</button>
                 
                 </form>
             </div> 

             
          </div>
       </div>
  )
}

export default Login