import React ,{useState ,useEffect} from 'react';
import { useNavigate , useLocation } from 'react-router-dom';
import PacmanLoader from "react-spinners/PacmanLoader";

 
const Spinner = () => { 
  const [count , setCount] = useState(5);
  const navigate = useNavigate(); 
  const location = useLocation(); 
  
  useEffect(()=>{
    const interval = setInterval(()=>{
   setCount((prevValue)=>--prevValue)
    },1000) 
    count === 0 && navigate('/login' , {
      state:location.pathname
    })
    return () => clearInterval(interval)
  } , [count,navigate , location])
  
  return ( 


   <div className=" d-flex justify-content-center align-items-center flex-column " style={{height:"100vh"}}>
         <h1 style={{ fontSize: '25px', fontWeight: '700', letterSpacing: '0.8px' , color:'black' }}>
            MyFuse<span style={{ color: '#f96f59' }}>.</span>In
          </h1>
   <PacmanLoader color="#EEA941" />
   
</div>

  )
}

export default Spinner