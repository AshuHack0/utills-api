import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ResumeShowcase from "./showcase/ResumeShowcase";
import ResumeBuilder from "./builder/ResumeBuilder";
import ResumeProvider from "./builder/components/context/Resume";
import { Helmet } from "react-helmet";

const Resume = () => {

  
  // Your authentication logic goes here
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://myfuse.in/dashboard/api.php')
      .then(response => response.json())
      .then(data => {
        setUser(data);
        console.log(data); // Log the data inside the .then block
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
   
console.log(user)

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
          element={authenticated ? <ResumeShowcase /> : <Navigate to="/" />}
        />
        <Route
          path="/*"
          element={authenticated ? <ResumeBuilder /> : <Navigate to="/" />}
        /> */}
      </Routes>
    </ResumeProvider>
  );
};

export default Resume;
