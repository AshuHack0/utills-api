import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import ResumeShowcase from "./showcase/ResumeShowcase";
import ResumeBuilder from "./builder/ResumeBuilder";
import ResumeProvider from "./builder/components/context/Resume";
import { Helmet } from "react-helmet";

const Resume = () => {

  
  // Your authentication logic goes here


  const [user, setUser] = useState([]);
  useEffect(() => {
  fetch('https://myfuse.in/dashboard/api.php', {
  method: 'GET',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
           },
        })
  .then(response => response.json())
  .then(data => setUser(data))
  .catch(error => console.error('Error fetching data:', error));
  }, []);
   
  console.log(user.isauth);
  
  if (user.isauth==false) {
    window.location.href = "https://myfuse.in/home";
    return null;  
  }

  return (
    <ResumeProvider>
      <Helmet>
        <title>Resume Builder</title>
        <meta
          name="description"
          content="Resume Builder - Made for MyFuse with 🧡 by @AshutoshKumar"
        />
      </Helmet>
      <Routes>
        <Route path="/showcase" element={<ResumeShowcase />} />
        <Route path="/*" element={<ResumeBuilder />} />
      
        {/* <Route
          path="/showcase"
          element={user.isauth ? <ResumeShowcase /> : <Navigate to="https://myfuse.in/home" />}
        />
        
        <Route
          path="/*"
          element={user.isauth ? <ResumeBuilder /> : window.location.href = "https://myfuse.in/home"}
        /> */}
      </Routes>
    </ResumeProvider>
  );
};

export default Resume;
