import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast'
import { useAuth } from './ResumeBuilder/builder/components/context/auth';
import axios from 'axios'; 
import styles  from './Login.module.css'
// import logi from './ResumeBuilder/assets/logii.jpg'
import { GoogleLogin } from '@react-oauth/google';
const Login = () => {

  const [email , setEmail] = useState();
  const [password , setpassword] =useState();  
   const Navigate = useNavigate(); 
  //  const location = useLocation();
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
            Navigate( '/welcome');
           

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
    <div className={`container-fluid  ${styles.main}`} >
          <div className={`row `} style={{  display:'flex' , justifyContent:'center' , alignItems:'center' }}>
            <div className='col-12 col-md-6' style={{backgroundColor:'white', height:'100vh' , zIndex:'2'}}>
                 <div className='row d-flex justify-content-center align-items-center' style={{height:'100vh'}}> 
                    <div className='col-11 col-md-7'  >
                          <div>
                           
                           <h1 className={` text-center ${styles.logo}`}> MyFuse<span style={{color:"#f96f59"}}>.</span>In</h1>
                            
                            </div>

                          
                           <GoogleLogin
                                onSuccess={credentialResponse => {
                                  console.log(credentialResponse);
                                }}
                                onError={() => {
                                  console.log('Login Failed');
                                }}
                              />
                           <p className='text-center'>or</p>

                           <form onSubmit={handleSubmit} >
                            <div className="mb-3">
                              <input  type="email" className={`form-control shadow-none ${styles.inputstyle}`} id="exampleInputemail"    placeholder="Email " value={email}  onChange={(e)=>{setEmail(e.target.value)}}  />
                            </div>
                            <div className="mb-3">
                              <input type="password" className="form-control shadow-none input-style" id="exampleInputPassword1"     placeholder="Password "  value={password} onChange={(e)=>{setpassword(e.target.value)}}  />
                            </div>
                             <div className='text-center '>  <button type="submit" className={`${styles.btn}`}>Sign In</button></div>
                             <p className='text-center mt-3 ' style={{fontWeight:'bold' , color:"#4D85D5"}}>Forgot Password ?</p>
                              
                             <p className='text-center mt-4' style={{fontWeight:500}}>Haven’t got an account? <span style={{color:"#4D85D5"}}>Sign Up</span></p>
                            </form> 
                    </div>
                 </div>
            </div>
            
            <div className='col-12 col-md-6' > 
            <div className={`${styles.rectangle}`}></div>
            <div className={`${styles.square}`}></div>
            <div className={`${styles.circle}`}></div>
                    <div className='row d-flex justify-content-center align-items-center' style={{height:'100vh'}}> 
                      <div className={`col-11 col-md-7 ${styles.reviewtext}`}  >
                      "Your career deserves the best. Build a standout resume effortlessly with MyFuse.in – where quality meets simplicity." <br/> - CEO Myfuse
                      </div>
                  </div>
                 

            </div>
             
          </div>
       </div>
  )
}

export default Login