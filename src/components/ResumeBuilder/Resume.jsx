import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import ResumeBuilder from "./builder/ResumeBuilder";
import ResumeProvider from "./builder/components/context/Resume";
import { Helmet } from "react-helmet";

const Resume = () => {
 
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://myfuse.in/dashboard/api.php', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        setUser(data);
  
        console.log('Data fetched successfully:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData(); 
   
  }, []);
  
  // console.log(user.isauth);
  
  // if (user.isauth==false) {
  //   window.location.href = "https://myfuse.in/home";
  //   return null;  
  // }

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
      
        <Route path="/" element={<ResumeBuilder />} />
        {/* <Route path="/about" element={<div>hellowwwwww</div>} /> */}
        {/* <Route
          path="/*"
          element={user.isauth ? <ResumeBuilder /> : window.location.href = "https://myfuse.in/home"}
        /> */}
      </Routes>
    </ResumeProvider>
  );
};

export default Resume;
