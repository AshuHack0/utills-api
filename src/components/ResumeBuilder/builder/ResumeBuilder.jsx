import React from "react";
import styles from "./ResumeBuilder.module.css";
import Preview from "./components/Preview/Preview";
import previewStyles from "./components/Preview/Preview.module.css";
import PreviewOptions from "./components/PreviewOptions/PreviewOptions";
import DocumentMeta from "react-document-meta";
import { useResume } from "./components/context/Resume";
import ChooseTemplate from "./components/templates/ChooseTemplate/ChooseTemplate";

import AiAll from "./AiAll";
import Footer from "../../pages/Footer";
import MyResponsiveNavbar from "../../pages/Navbar";
const ResumeBuilder = () => {
  const { selectedTemplate, printContainerRef, values } = useResume();
  const Build = selectedTemplate?.build;
  const Resume = selectedTemplate?.resume;
  const meta = {
    title: " MyFuse Resume Builder",
    description: "Resume Builder",
  };
  
  return (
    <DocumentMeta {...meta}> 
    <MyResponsiveNavbar />
      {/* For only print purposes */} 
      <div className={previewStyles.print_only_resume_page} id="print_content"> 
        <div
          ref={printContainerRef}
          className={previewStyles.container}
          style={{
            width: "100%",
            padding: selectedTemplate?.page_margins,
          }}
        >
          {Resume && <Resume sections={values.sections} />}
        </div>
      </div>


      {selectedTemplate ? (
        <div className={styles.container}>
          <div className={styles.left}> 
            <Build />
          </div>
          <div className={styles.right}>
            <Preview template={selectedTemplate} />
            <PreviewOptions />
          </div>
        </div>
      ) : (
        
          <ChooseTemplate />
    
       
      )}
        <Footer/>
         <AiAll/>
    </DocumentMeta>
  );
};

export default ResumeBuilder;
