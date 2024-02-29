import React from 'react'
import styles from './assets/Forgot.module.css'
const ForgotPassword = () => {
  return (
    <div className={`container-fluid ${styles.main} `} >
        <div className={`row ${styles.container}`} >
             <div className={`col-11 col-md-4 ${styles.box}`}  >
                <h1 className={`${styles.title}`}>Forgot Password ?</h1>
                <div className={`${styles.para}`}>
                   Please enter your email address and we'll send you instructions on how to reset your password. 
                </div>
                <input  placeholder='Email'  className={`${styles.button}`} />
                <button className={styles.btn} >Recover </button>
                <p className={styles.down}>Haven’t got an account? <span className={styles.signup}>Sign Up</span></p>
             </div>
            
        </div>    
    </div>
  )
}

export default ForgotPassword