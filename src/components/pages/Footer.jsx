import React from 'react'
import styles from "./Footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope , faPhone , faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (

  //   <div style={{backgroundColor:'#232D3F', color:'white' , textAlign:'center' , padding:'1rem'}}> 
 
  //   <p style={{fontSize:'14px', marginBottom:'0px'}}> Copyright ©2024 MyFuse.In. All Rights Reserved</p>
  //   <p style={{fontSize:'12px',marginBottom:'0px'}} >Empowering digital experiences, managed and developed by Ashutosh Kumar</p>
  
  //  </div>

  <div>
  
<footer className={styles.footerdistributed}>
  <div className={styles.footerleft}>
    <h3>Myfuse<span>.</span>In</h3>
    <p className={styles.footerlinks}>
      <a  href='#'  className={styles.link1}>Home</a>
      <a href='#'  >Blog</a>
      <a  href='#' >Pricing</a>
      <a href='#' >About</a>
      <a href='#' >Faq</a>
      <a href='#' >Contact</a>
    </p>
    <p className={styles.footercompanyname}>Myfuse.In © 2024</p>
  </div>
  <div className={styles.footercenter}>
  {/* <span>Contact Us</span> */}
    <div>
   
    <FontAwesomeIcon icon={faMapMarker} style={{ color: "#232D3F" , width:'2rem' }} />
      <p><span>MyFuse.in Residency Rd, Shanthala Nagar <br/>
    Ashok Nagar, Bengaluru <br/>
    Karnataka 560025 <br/>
    India  </span></p>
    </div>
    <div>
    <FontAwesomeIcon icon={faPhone}style={{ color: "white" , width:'2rem' }} />
      <p>+91 7975364977</p>
    </div>
    <div>
    <FontAwesomeIcon icon={faEnvelope} style={{ color: "white" , width:'2rem' }} />
      <p><a href="mailto:contact@myfuse.in" style={{color:'white'}}>contact@myfuse.in</a></p>
    </div>
  </div>
  <div className={styles.footerright}>
    <p className={styles.footercompanyabout}>
      <span>About the company</span>
      Unlock endless career possibilities with Myfuse – the platform that bridges gap between Students and Job opportunities in India..
    </p>
    <div className={styles.footericons}>
            <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} style={{ color: "white" }} /></a>
            <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} style={{ color: "white" }} /></a>
            <a href="https://www.linkedin.com/company/myfuse-india/mycompany/"><FontAwesomeIcon icon={faLinkedin} style={{ color: "white" }} /></a>
            <a href="https://www.instagram.com/myfuse.in"><FontAwesomeIcon icon={faInstagram} style={{ color: "white" }} /></a>
      
    </div>
  </div>
 
     <p style={{fontSize:'12px' ,  textAlign:'center' , color:'white' , marginTop:'1rem'}}> Copyright ©2024 MyFuse.In. All Rights Reserved</p>
     <p style={{fontSize:'12px' , textAlign:'center' , color:'#92999f'}} >Empowering digital experiences, managed and developed by <a href="https://www.linkedin.com/in/ashutosh-nit/" style={{color:'#92999f'}}>Ashutosh Kumar</a></p>
  
</footer>

   
  </div>

  )
}

export default Footer



