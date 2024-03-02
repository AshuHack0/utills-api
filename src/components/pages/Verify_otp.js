import React, { useState } from 'react'
import styles from '../assets/Verify.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import {toast} from 'react-hot-toast'
import axios from 'axios'; 

 
const Verify = () => {

    const params = useParams();  

    const [otp , setOtp] = useState();
 const Navigate = useNavigate(); 
    const handleSubmit = async(e) =>{
        e.preventDefault();
        
          try {
            const res = await axios.post(`https://myfuseback.vercel.app/api/auth/verifyotp?${params.email}` ,{otp}) ; 
            if(res.data.success)
        {
                toast.success("successfully Register !!! Now you can Login");
                Navigate( '/login');
        }
        else
        {
        
          toast.error(res.data.message)
        }
              
          } catch (error) {
            console.log(error); 
            toast.error("Please Enter Correct OTP")
          }
      }
  return (
    <div className={`container-fluid ${styles.main} `} >
        <div className={`row ${styles.container}`} >
             <div className={`col-11 col-md-4 ${styles.box}`}  >
                <h1 className={`${styles.title}`}>OTP Verification</h1>
                <div className={`${styles.para}`}>
                   Please enter OTP  which is send in your email address so that you can reset your password. 
                </div>
                <input  type='number' placeholder='OTP'   className={` text-align-center ${styles.button}`} value={otp} onChange={(e)=>{setOtp(e.target.value)}} />
                <button className={styles.btn}  onClick={handleSubmit}>Verify </button>
                <p className={styles.down}>Haven’t got an OTP? <span className={styles.signup}>Resend</span></p>
             </div>
            
        </div>    
    </div>
  )
}

export default Verify