import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Resume from "./components/ResumeBuilder/Resume";
import Welcome from "./components/Welcome";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import PrivateRoute from "./Routes/PrivateRoute";
import SingUp from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import Verify from "./components/pages/Verify_otp";
import { faHiking } from "@fortawesome/free-solid-svg-icons";
import PdfToJsonConverter from "./components/pages/Pdf";
import axios from "axios";
import Application from "./components/pages/Application";
import Dashboard from "./components/pages/Dashboard";
import NotFound from "./components/pages/NotFound";
 
function App() {
  const [name, setName] = useState('Unknown User');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(()=>{
    localStorage.removeItem("template");
  },[])


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to the PHP script
        const response = await axios.get('https://myfuse.in/dashboard/api.php');

        // Destructure response data
        const { name, isauth } = response.data;

        // Set state variables with response data
        setName(name);
        setIsAuthenticated(isauth); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // console.log(name);
    // Call fetchData function
    fetchData();
  }, []); // Empty dependency array to ensure useEffect runs only once

    return ( 
      
      <Routes>
      <Route path="/welcome" element={<PrivateRoute />} >
        <Route path="" element={<Resume />} />
        <Route path="jobapplication" element={<Application />} />
        <Route path="welcome/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SingUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify/:email" element={<Verify />} />
      <Route path="/pdf" element={<PdfToJsonConverter />} />
      <Route path="*"   component={<NotFound/>} />
    </Routes>
 
  );
}

export default App;
