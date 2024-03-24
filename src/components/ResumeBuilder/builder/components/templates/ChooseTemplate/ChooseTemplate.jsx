import React from "react";
import styles from "./ChooseTemplate.module.css";
import { useResume } from "../../context/Resume";
import { NavLink } from "react-bootstrap";

const ChooseTemplate = () => {
  const { templates, handleTemplateChange } = useResume();

 
  return (
    <div className={`${styles.container} container-fluid`} style={{backgroundColor:'#fafbfd' ,  width: '100vw !important',}} >
      <div className="row d-flex justify-content-center">
          <div className="col-10 col-md-5 d-flex justify-content-center align-items-center" style={{ position:'relative'}}>
            <img src="https://app.enhancv.com/a56f83079b3ce6b6c970ea6c0d4eaa1c.svg"  style={{    top: "28px", width: "72px",left: "-5px"}}/>
            <img src="https://app.enhancv.com/896efd8721fd8bf15eacfe5d5bfa992f.svg"   style={{    top: "28px", width: "72px",left: "-5px"}}/>
            <img src="https://app.enhancv.com/8ded6a2e48505191ce353b14ba8baad0.svg" style={{    top: "28px", width: "72px",left: "-5px"}}/>
          </div>
      </div>
       <div>
        <h2 className="text-center">Please select a template for your resume.</h2> <h2 className="text-center">
         You can always change it later.</h2>
       </div>
      <div className={styles.templatesGrid}>
        {Object.values(templates).map((template, index) => {
          return (
            <div
              key={index}
              className={styles.template}
              onClick={() => handleTemplateChange(template.key)}
            >
              <div className={styles.preview}>
                <img src={template.preview} alt={template.name} />
                <div className={styles.show}  style={{display:'flex' , justifyContent:'center'}}>
                 <span href="" className={`text-center ${styles.but}`} style={{ position:'absolute', width:'80%', bottom:80, backgroundColor:'hsl(207, 88%, 52%)', color:'white' , padding:'.5rem' , borderRadius:'10px'}}>Use Template</span>
              </div>
              </div> 
              
              <div className={styles.name}>{template.name}</div>
            </div>
          );
        })}
        
      </div>
    </div>
  );
};

export default ChooseTemplate;
