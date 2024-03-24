import React, { useState } from 'react'
import MyResponsiveNavbar from './Navbar'
import styles from "../assets/Job.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faFilePdf,faFile,faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../ResumeBuilder/builder/components/context/auth';
const Dashboard = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen); // Toggle the isOpen state
      };

      const {auth } = useAuth();
  return (
      <div >
        <MyResponsiveNavbar/>
        <div style={{minHeight:'100vh' , minWidth:'100vw' , backgroundColor:'#fafbfd' , borderTop:'1px solid #e3e9f5'}}>
           <div className='container' style={{marginTop:'4rem'}}>
               <div className='row'>
                  <div className='col-11' >
                    <span className={styles.heading_div}>
                        <h5 className={styles.heading}>Welcome back, {auth?.user[0]?.firstname}! You have 0 documents</h5>
                       <span className={styles.dropdownwrapper}  onClick={handleClick}>  
                          <button  style={{backgroundColor:'#8c7cdb' , color:'white' , fontWeight:'500' ,     fontSize: "14px",     borderRadius: "4px",lineHeight: "20px",padding: "5px 12px" , textAlign:'center' , border:'none'}}>   <FontAwesomeIcon icon={faPlus} /> Create New</button>
                          {isOpen && (
                                
                                <ul className={styles.dropdownmenu}>
                                    <li> <FontAwesomeIcon icon={faFilePdf} />  New Resume</li>
                                    <li> <FontAwesomeIcon icon={faFile} />   New Cover Letter</li>
                                     
                                </ul>
                                 
                            )}
                       </span> 
                    </span>                 
                  </div> 
                  <div  className='col-11 mt-4 '>
                      <div className='container-fluid'>
                         <div className='row d-flex justify-content-between'>
                            <div className='col-md-6 col-12 mt-4' >
                                <div style={{border:'.5px solid #9cb2dc' ,  borderRadius:'8px' , padding: '24px'}}>
                                      <div className={styles.card}>
                                         <div className={styles.cardinner} style={{display:'flex' ,justifyContent:'center' , alignItems:'center'}}>
                                         <FontAwesomeIcon icon={faCirclePlus} style={{height:'2.5rem', color:'#2dc08d'}} />
                                         </div>
                                         <div style={{marginLeft:'1rem'}}>
                                            <p class="text-md " style={{color:'#2dc08d'}}>New resume</p><b style={{fontSize:'13px'}}>TIP:</b>
                                            <span style={{fontSize:'13px'}}> Did you know that if you tailor your resume to the job description, you double your chances to get an interview? </span>
                                            </div>
                                      </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-12 mt-4' >
                            <div style={{border:'.5px solid #9cb2dc' ,  borderRadius:'8px' , padding: '24px'}}>
                                      <div className={styles.card}>
                                         <div className={styles.cardinner} style={{display:'flex' ,justifyContent:'center' , alignItems:'center'}}>
                                         <FontAwesomeIcon icon={faCirclePlus} style={{height:'2.5rem', color:'#2dc08d'}} />
                                         </div>
                                         <div style={{marginLeft:'1rem'}}> 
                                            <p class="text-md " style={{color:'#2dc08d'}} >New Cover Letter</p><b style={{fontSize:'13px'}}>TIP:</b>
                                            <span style={{fontSize:'13px'}}> Did you know that if you tailor your resume to the job description, you double your chances to get an interview? </span>
                                            </div>
                                      </div>
                                </div>
                            </div>
                         </div>
                      </div>
                  </div>
               </div>
           </div>
        </div>
       </div>
  )
}

export default Dashboard