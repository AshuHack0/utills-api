import React from "react";
import { Route, Routes } from "react-router-dom";
import ResumeBuilder from "./builder/ResumeBuilder";
import ResumeProvider from "./builder/components/context/Resume";
import { Helmet } from "react-helmet";
const Resume = () => {

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
        </Routes>
      
      </ResumeProvider>
    
  );
};

export default Resume;
