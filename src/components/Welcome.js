import React from 'react'
import MyResponsiveNavbar from './ResumeBuilder/builder/components/Navbar'
import Footer from './ResumeBuilder/builder/components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Welcome.module.css";
import template from "./ResumeBuilder/assets/images/ashu.png";
import { NavLink } from 'react-router-dom';
import PrevImage from './ResumeBuilder/assets/images/preview.png'
const Welcome = () => {
  return (  
    <div >
    <MyResponsiveNavbar/>
      
    <div className={`container-fluid  ${styles.background}`} >
            <div className="row ">
                <div className="col-md-7"  >
                     <div className={`container  ${styles.leftbox}`}>
                         <div className={`row ${styles.leftboxinner}`} >
                             <div className={`col-md-10 `}  >
                                    <h6 className={styles.paragraph}>Craft a standout resume effortlessly with AI assistance from MyFuse.</h6> 
                                    <h1 className={styles.heading}>Elevate your career <br/> with our AI resume builder</h1>
                                    <p className={styles.paragraph}>Craft a polished resume swiftly using our AI-powered platform and customizable templates. Impress potential employers with a professionally designed document that highlights your skills and experiences effectively. With our user-friendly interface, creating a standout resume has never been easier or quicker.</p>
                             </div>
                             <div className='col-md-10'>
                                <NavLink to="/welcome">
                                <button className='btn btn-success me-4' style={{backgroundColor:'rgb(35, 45, 63)' , padding:'.6rem'}}>  Craft My Resume</button>
                                </NavLink>
                                <button className='btn  ' style={{border:'2px solid rgb(35, 45, 63) ' , padding:'.6rem'}} > View Samples</button>

                             </div>
                         </div>
                     </div>
                </div>
                <div className={`col-md-5 ${styles.templateBox}`}  >
                      <img src={template} className={`img-fluid ${styles.templateImage}`} />
               </div>
            </div>
        </div>

        <div className={`container-fluid   `} >
            <div className="row ">
            <div className={`col-md-6  `}  >
                      <img src="https://aicw.iamleehom.com/assets/assets.97b477b5.gif" className={`img-fluid `} />
               </div>
                <div className="col-md-5"  >
                <div className={`container  ${styles.leftbox}`}>
                         <div className={`row ${styles.leftboxinner}`} >
                             <div className={`col-md-10 `}  >
                                    <h6 className={styles.paragraph}>AI Resume Builder</h6> 
                                    <h1 className={styles.heading}>AI Writes Your Resume. <br/> Let Technology Take the Lead</h1>
                                    <p className={styles.paragraph}> Revolutionize your job hunt with our curated resume and cover letter templates. Featuring 40+ ATS-friendly designs crafted by HR experts and typographers, each template is fully customizable. Explore endless design combinations to create standout applications that captivate employers, fast-tracking your path to securing your ideal position. </p>
                             </div>
                             <div className='col-md-10'>
                                <NavLink to="/">
                                <button className='btn btn-success me-4' style={{backgroundColor:'rgb(35, 45, 63)' , padding:'.7rem'}}>  Craft My Resume</button>
                                </NavLink>
                                 
                             </div>
                         </div>
                     </div>
                </div>
               
            </div>
        </div>
    

        <div className={`container-fluid  mt-4 mb-4`} >
            <div className="row ">
                <div className="col-md-5"  >
                     <div className={`container   `}>
                         <div className={`row ${styles.leftboxinner}`} >
                             <div className={`col-md-10 `}  >
                                    <h6 className={styles.paragraph}>Resume Templates</h6> 
                                    <h1 className={styles.heading}>Select a template and personalize  <br/> your resume to reflect you</h1>
                                    <p className={styles.paragraph}>Craft a polished resume swiftly using our AI-powered platform and customizable templates. Impress potential employers with a professionally designed document that highlights your skills and experiences effectively. With our user-friendly interface, creating a standout resume has never been easier or quicker.</p>
                             </div>
                             <div className='col-md-10'>
                                <NavLink to="/welcome">
                                <button className='btn btn-success me-4' style={{backgroundColor:'rgb(35, 45, 63)' , padding:'.6rem'}}>  Craft My Resume</button>
                                </NavLink>
                                
                             </div>
                         </div>
                     </div>
                </div>
                <div className={`col-md-7  `}  style={{display:'flex' , justifyContent:'center' , alignItems:'center'}} >
                      <img src={PrevImage} className={`img-fluid ${styles.previewImage} `} />
               </div>
            </div>
        </div>

    <Footer/>
    </div>
     
  )
}

export default Welcome