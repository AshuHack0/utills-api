import React from 'react'
import styles from '../assets/Verify.module.css'
const Verify = () => {
  return (
    <div className={`container-fluid ${styles.main} `} >
        <div className={`row ${styles.container}`} >
             <div className={`col-11 col-md-4 ${styles.box}`}  >
                <h1 className={`${styles.title}`}>OTP Verification</h1>
                <div className={`${styles.para}`}>
                   Please enter OTP  which is send in your email address so that you can reset your password. 
                </div>
                <input  placeholder='OTP'  style={{display:'flex' , justifyContent:'center'}} className={`${styles.button}`} />
                <button className={styles.btn} >Verify </button>
                <p className={styles.down}>Haven’t got an OTP? <span className={styles.signup}>Resend</span></p>
             </div>
            
        </div>    
    </div>
  )
}

export default Verify