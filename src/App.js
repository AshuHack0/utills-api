import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Resume from "./components/ResumeBuilder/Resume";
import Welcome from "./components/Welcome";
import { useEffect } from "react";
import Login from "./components/Login";
import PrivateRoute from "./Routes/PrivateRoute";
import SingUp from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import Verify from "./components/pages/Verify_otp";

function App() {
 
  useEffect(()=>{
    localStorage.removeItem("template");
  },[])
    return ( 
      
      <Routes>
      <Route path="/welcome" element={<PrivateRoute />} >
        <Route path="" element={<Resume />} />
      </Route>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SingUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify" element={<Verify />} />

    </Routes>
 
  );
}

export default App;
