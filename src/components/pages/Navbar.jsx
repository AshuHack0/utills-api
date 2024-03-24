import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from '../ResumeBuilder/builder/components/context/auth';
import {toast} from 'react-hot-toast'
import styles from '../assets/Navbar.module.css' 

function MyResponsiveNavbar() {
  const navigate = useNavigate(); 
  const {auth , setAuth} = useAuth();
  const handleLogout = () =>{
    setAuth({
      ...auth,
      user:null,
      token:""
    })
    localStorage.removeItem("auth"); 
    toast.success('Logout Successful!!');
    navigate('/'); // Navigate to the home page after logout

  }
 
  const handleJobApplicationClick = () => {
    navigate('/welcome/jobapplication'); // Navigate to the '/welcome/jobapplication' URL
  };

  const handleJobClick = () => {
    navigate('/jobs'); // Navigate to the '/welcome/jobapplication' URL
  };
  const handleResumeClick = () => {
    navigate('/welcome'); // Navigate to the '/welcome/jobapplication' URL
  };

  const handleDashboardClick = () => {
    navigate('/welcome/dashboard'); // Navigate to the '/welcome/jobapplication' URL
  };

  return (

    

    <Navbar   expand="lg" variant="light">
      <Container>
        <Navbar.Brand href="https://myfuse.in/home" >
          <h1 style={{ fontSize: '25px', fontWeight: '700', letterSpacing: '0.8px' , color:'black' }}>
            MyFuse<span style={{ color: '#f96f59' }}>.</span>In
          </h1>
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{borderColor:'white'}}>
          <FontAwesomeIcon icon={faBars}   />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav  className={`me-auto ${styles.laptop}` } >
          {

           auth.user ? (
            <Nav.Link   onClick={handleDashboardClick} >
            Dashboard
           </Nav.Link>
            ) : ( null) 
           
           }
            
            <Nav.Link onClick={handleJobClick}  >
             Find Jobs
            </Nav.Link>
            <Nav.Link  onClick={handleJobApplicationClick}  >
            Job Applications
            </Nav.Link>
            <Nav.Link  onClick={handleResumeClick} >
            Resume Examples
            </Nav.Link>
            <Nav.Link onClick={handleResumeClick} >
             Help
            </Nav.Link>
          </Nav>
          
          <Nav > 

            {

             !auth.user ? (
              <>
            <NavLink to="/login">
          <div style={{
        height: '34px',
        
        border: '1px solid rgb(255, 179, 11)',
        borderRadius: '70px',
        justifyContent: 'center',
        color: 'black',
        fontWeight: 700,
        fontSize: '12px',
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        transition: '0.3s',
        padding: '0 15px',
        marginLeft: '15px',
        width:'8rem'
}}>
    Get Started  
</div>
</NavLink>
<NavLink to="/login">
          <div style={{
        height: '34px',
        background: 'rgb(255, 179, 11)',
        // border: '1px solid #0073e6',
        borderRadius: '50px',
        justifyContent: 'center',
        color: 'black',
        fontWeight: 700,
        fontSize: '12px',
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        transition: '0.3s',
        padding: '0 15px',
        marginLeft: '15px',
        width:'8rem'
}}>
    Login <img src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/login_icon.svg" alt="" style={{      width:'1rem' , marginLeft:'.5rem'}}/>
</div>
</NavLink>
</>
             ) : (  

              //  <NavDropdown title={<span style={{ color: 'black' }}> {auth?.user[0]?.firstname}</span>} id="basic-nav-dropdown">
               <NavDropdown title={<span style={{ color: 'black' }}> {auth?.user[0]?.firstname}</span>} id="basic-nav-dropdown">
               <NavDropdown.Item onClick={handleLogout}>Plans</NavDropdown.Item>
               <NavDropdown.Item onClick={handleLogout}>Account</NavDropdown.Item>
               <NavDropdown.Item onClick={handleLogout}>Language</NavDropdown.Item>
               <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown> 
            
            )
}
           

         
          </Nav>

        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default MyResponsiveNavbar;
