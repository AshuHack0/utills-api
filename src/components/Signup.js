import React from 'react'
import { useState , CSSProperties  } from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast'
import axios from 'axios'; 
import styles  from './assets/Signup.module.css'
import {jwtDecode} from 'jwt-decode'
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleOneTapLogin } from '@react-oauth/google';
import Form from 'react-bootstrap/Form';
import HashLoader from "react-spinners/HashLoader";


 


const SingUp = () => {

  const [email , setEmail] = useState();
  const [firstName , setFirstName] = useState();
  const [lastName , setlastName] = useState();
  const [phone , setPhone] = useState();
  const [password , setpassword] =useState();  
  const [cpassword , setcpassword] =useState();  

  let [loading, setLoading] = useState(false);

   const Navigate = useNavigate(); 
    const handleNavigate = () => {
        Navigate( '/login');
      };
   const handleSubmit = async(e) =>{
    e.preventDefault();
    
      try {
        setLoading(true);
        const res = await axios.post(`https://myfuseback.vercel.app/api/auth/register` ,{email,password ,firstName ,lastName,phone}) ; 
        setLoading(false);
        if(res.data.success)
    {
            toast.success(res.data.message);
            
            Navigate( `/verify/email=${email}`);
    }
    else
    {
      setLoading(false);
      toast.error(res.data.message)
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
                                        <input  type="text" className={`form-control shadow-none ${styles.inputstyle}`} id="exampleInputemail"    placeholder="Firstname " value={firstName}  onChange={(e)=>{setFirstName(e.target.value)}} required  />
                                    </div>
                                    <div className="mb-3">
                                        <input  type="text" className={`form-control shadow-none ${styles.inputstyle}`} id="exampleInputemail"    placeholder="lastname " value={lastName}  onChange={(e)=>{setlastName(e.target.value)}}  required/>
                                    </div>
                             </div>

                            <div className="mb-3">
                              <input  type="email" className={`form-control shadow-none ${styles.inputstyle}`} id="exampleInputemail"    placeholder="Email " value={email}  onChange={(e)=>{setEmail(e.target.value)}} required />
                            </div>
                            <div className="mb-3">
                              <input  type="text" className={`form-control shadow-none ${styles.inputstyle}`} id="exampleInputemail"    placeholder= "Phone No" value={phone}  onChange={(e)=>{setPhone(e.target.value)}}  required/>
                            </div>
                            <div className="mb-3">
                              <input type="password" className="form-control shadow-none input-style" id="exampleInputPassword1"     placeholder="Password "  value={password} onChange={(e)=>{setpassword(e.target.value)}}  required />
                            </div>
                            <div className="mb-3">
                              <input type="cpassword" className="form-control shadow-none input-style" id="exampleInputPassword1"     placeholder="Confrim Password "  value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}  required/>
                            </div>
                            <div className='d-flex'>
                            <Form.Check aria-label="option 1"  required /> <span className='ms-2'>I accept the
                              terms and conditions</span>
                            </div>
                            
                             {loading ? 
                             (
                              <div className='text-center d-flex justify-content-center'>  <div className={` d-flex  justify-content-center ${styles.btn}`}>
                              <HashLoader color="#000000" size={25} />
                               </div></div>
                             )
                             : 
                             
                             (
                             <div className='text-center '>  <button type="submit" className={`${styles.btn}`}>Sign Up</button></div>

                             )
                             }
                             
                            
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