import React from 'react'
import MyResponsiveNavbar from './Navbar'

const Application = () => {
  return (
     <div className='contianer'  > 
       <MyResponsiveNavbar/>
       <div className='row d-flex justify-content-center align-items-center'  style={{width:'100vw' ,  height:'90vh', backgroundColor:'#fafbfd'}}>
          <div className='col-10 d-flex justify-content-center'   >
              <span>
              <img  src='https://app.enhancv.com/images/noCoverLetter-c3a26a31f7bb59d4e45b.png' className='img-fluid' style={{height:'15rem'}} />
              <h2 className='text-center'>Pair your resume with a cover letter</h2>
              
              </span>
          </div>
         
       </div>
     </div>
  )
}

export default Application