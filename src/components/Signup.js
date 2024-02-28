import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast'
import { useAuth } from './ResumeBuilder/builder/components/context/auth';
import axios from 'axios'; 
import styles  from './Signup.module.css'
import {jwtDecode} from 'jwt-decode'
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleOneTapLogin } from '@react-oauth/google';
const SingUp = () => {

  const [email , setEmail] = useState();
  const [firstName , setFirstName] = useState();
  const [lastname , setlastName] = useState();
  const [phone , setPhone] = useState();
  const [password , setpassword] =useState();  
  const [cpassword , setcpassword] =useState();  


   const Navigate = useNavigate(); 
  //  const location = useLocation();
    const {auth , setAuth} = useAuth();
    // console.log(useAuth);

    const handleNavigate = () => {
        Navigate( '/login');
      };
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
                           
                           <h1 className={` text-center ${styles.logo}`}> Sign up for free and
                               start building in minutes</h1>
                            
                            </div>
                          
                              
            

                           <form onSubmit={handleSubmit} > 
                             
                             <div className='d-flex'>
                                    <div className="mb-3 me-2">
                                        <input  type="email" className={`form-control shadow-none ${styles.inputstyle}`} id="exampleInputemail"    placeholder="Firstname " value={firstName}  onChange={(e)=>{setFirstName(e.target.value)}}  />
                                    </div>
                                    <div className="mb-3">
                                        <input  type="email" className={`form-control shadow-none ${styles.inputstyle}`} id="exampleInputemail"    placeholder="lastname " value={lastname}  onChange={(e)=>{setlastName(e.target.value)}}  />
                                    </div>
                             </div>

                            <div className="mb-3">
                              <input  type="email" className={`form-control shadow-none ${styles.inputstyle}`} id="exampleInputemail"    placeholder="Email " value={email}  onChange={(e)=>{setEmail(e.target.value)}}  />
                            </div>
                            <div className="mb-3">
                              <input  type="text" className={`form-control shadow-none ${styles.inputstyle}`} id="exampleInputemail"    placeholder= "Phone No" value={phone}  onChange={(e)=>{setPhone(e.target.value)}}  />
                            </div>
                            <div className="mb-3">
                              <input type="password" className="form-control shadow-none input-style" id="exampleInputPassword1"     placeholder="Password "  value={password} onChange={(e)=>{setpassword(e.target.value)}}  />
                            </div>
                            <div className="mb-3">
                              <input type="cpassword" className="form-control shadow-none input-style" id="exampleInputPassword1"     placeholder="Confrim Password "  value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}  />
                            </div>
                             <div className='text-center '>  <button type="submit" className={`${styles.btn}`}>Sign Up</button></div>
                            <br/>
                            <p className='text-center'>or</p>
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
                             <p className='text-center mt-4' style={{fontWeight:500 , cursor:'pointer'}} onClick={handleNavigate}>Already have an account? <span style={{color:"#4D85D5"}}>Sign In</span></p>
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
                      " Embark on a journey towards professional success with MyFuse.in, where crafting an exceptional resume is as simple as a few clicks." <br/> - CEO Myfuse
                      </div>
                  </div>
                 

            </div>
             
          </div>
       </div>
  )
}

export default SingUp