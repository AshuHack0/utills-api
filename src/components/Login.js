import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast'
import { useAuth } from './ResumeBuilder/builder/components/context/auth';
import axios from 'axios'; 
import styles  from './assets/Login.module.css'
import {jwtDecode} from 'jwt-decode'
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleOneTapLogin } from '@react-oauth/google';
import logos from './assets/logo.png'
import HashLoader from "react-spinners/HashLoader";

const Login = () => {

  const [email , setEmail] = useState();
  const [password , setpassword] =useState();  
   const Navigate = useNavigate(); 
  //  const location = useLocation();
    const {auth , setAuth} = useAuth();
    // console.log(useAuth);
  let [loading, setLoading] = useState(false);

   

    const handleNavigateForgot = () => {
      Navigate( '/forgot-password');
    };
    const handleNavigate = () => {
      Navigate( '/signup');
    };
   const handleSubmit = async(e) =>{
    e.preventDefault();
      try {
        setLoading(true);
        const res = await axios.post(`https://myfuseback.vercel.app/api/auth/login` ,{email,password}) ; 
        setLoading(false);

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
      setLoading(false);
      toast.error("invalid login id and password ")
    }
          
      } catch (error) {
        console.log(error); 
        toast.error("Please Enter Correct User Id and password")
      }
  }


  useGoogleOneTapLogin({
    onSuccess: credentialResponse => {
      console.log(credentialResponse)
      const decode = jwtDecode(credentialResponse.credential);
      console.log(decode);
    },
    onError: () => {
      console.log('Login Failed');
    },
  });


  return (
    <div className={`container-fluid  ${styles.main}`} >
          <div className={`row `} style={{  display:'flex' , justifyContent:'center' , alignItems:'center' }}>
            <div className='col-12 col-md-6' style={{backgroundColor:'white', height:'100vh' , zIndex:'2'}}>
                 <div className='row d-flex justify-content-center align-items-center' style={{height:'100vh'}}> 
                    <div className='col-11 col-md-7 '  >
                          <div>
                           
                           <h1 className={` text-center ${styles.logo}`}> MyFuse<span style={{color:"#f96f59"}}>.</span>In</h1>
                            
                            </div>
                           <div className='d-flex justify-content-center'>
                           <GoogleLogin
                                onSuccess={credentialResponse => { 
                                  console.log(credentialResponse)
                                  const decode = jwtDecode(credentialResponse.credential);
                                           console.log(decode);
                                }}
                                onError={() => {
                                  console.log('Login Failed');
                                }}
                              />
                              </div>
                              <br/>
                           <p className='text-center'>or</p>

                           <form onSubmit={handleSubmit} >
                            <div className="mb-3">
                              <input  type="email" className={`form-control shadow-none ${styles.inputstyle}`} id="exampleInputemail"    placeholder="Email " value={email}  onChange={(e)=>{setEmail(e.target.value)}} required  />
                            </div>
                            <div className="mb-3">
                              <input type="password" className="form-control shadow-none input-style" id="exampleInputPassword1"     placeholder="Password "  value={password} onChange={(e)=>{setpassword(e.target.value)}}  required />
                            </div>
                             
                             {loading ? 
                             (
                              <div className='text-center d-flex justify-content-center'>  <div className={` d-flex  justify-content-center ${styles.btn}`}>
                              <HashLoader color="#000000" size={25} />
                               </div></div>
                             )
                             : 
                             
                             (
                             <div className='text-center '>  <button type="submit" className={`${styles.btn}`}>Sign In</button></div>

                             )
                             }

                             <p className='text-center mt-3 ' style={{fontWeight:'bold' , color:"#4D85D5" , cursor:'pointer'}} onClick={handleNavigateForgot}>Forgot Password ?</p>
                              
                            
                             <p className='text-center mt-4' style={{fontWeight:500 , cursor:'pointer'}} onClick={handleNavigate}>
                                Haven’t got an account? <span style={{color:"#4D85D5"}}>Sign Up</span>
                              </p>

                            </form> 
                    </div>
                 </div>
            </div>
            
            <div className={`col-12 col-md-6 ${styles.hideOnMobile} `} > 
            <div className={`${styles.rectangle}`}></div>
            <div className={`${styles.square}`}></div>
            <div className={`${styles.circle}`}></div>
                    <div className='row d-flex justify-content-center align-items-center' style={{height:'100vh'}}> 
                      <div className={`col-11 col-md-7 ${styles.reviewtext}`}  >
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png" style={{width:'4rem'}} /> 
                      "Your career deserves the best. Build a standout resume effortlessly with MyFuse.in – where quality meets simplicity." <br/>
                       <span style={{fontSize:'13px'}}> - CEO Myfuse </span> 
                      </div>
                  </div>
                 

            </div>
             
          </div>
       </div>
  )
}

export default Login