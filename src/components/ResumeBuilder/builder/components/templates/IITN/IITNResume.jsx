import React from "react";
import styles from "./IITNResume.module.css";
import { getSafeMarkdownString } from "../../../../utils/markdown";

const IITNResume = ({ sections }) => {
  return (
    <div className={styles.resume}>
      <Header
        profile={sections.profile.data}
        iitb_logo={sections.settings?.data.logo}
      />
       <div style={{display:'flex' , justifyContent:'space-between' , marginTop:'2rem'}}>
          <div style={{ width:'35%'}}>
               

                <Links
                 profile={sections.profile.data}
                />
                 <Education
                  education={sections.education?.data}
                  settings={sections.settings?.data}
                /> 
                  <TechnicalSkills
                    technicalSkills={sections.technicalSkills?.data}
                    settings={sections.settings?.data}
                  />
                   <Awards
                awards={sections.awards?.data}
                settings={sections.settings.data}
              />
          </div>
          <div style={{ width:'60%'}}>

          <Experience
              experience={sections.experience?.data}
              settings={sections.settings?.data}
            />
             <Projects
              projects={sections.projects?.data}
              settings={sections.settings?.data}
            />
            
             <Achievements
                achievements={sections.achievements?.data}
                settings={sections.settings?.data}
              />
               <PORs
                  pors={sections.positionsOfResponsibility?.data}
                  settings={sections.settings?.data}
                />
    
                <ExtraCurriculars
                  extraCurriculars={sections.extraCurriculars?.data}
                  settings={sections.settings?.data}
                />
          
                
          </div>
       </div>

     
      
     
    </div>
  );
};

const Header = ({ profile }) => {
  if (!profile) return null;
  return (
    <div  >
          <h2 >{profile.name}</h2>
          <p>{profile.position}  </p>
          <div className={styles.secondline}>
            <i>{profile.aboutme}</i>
            
          </div>
    </div>
  );
};


const Links = ({ profile }) => {
  if (!profile) return null;
  return (
    <div style={{marginLeft:'.5rem'}}>   
       
          <div>
            <h5 style={{fontWeight:'bolder'}}> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPYE0s4NsELDPMOfalXtxB6iD1ekcaOKuYYXBRqasGOxA8woOAyp5V43D4XIE3AjWyzE&usqp=CAU"  style={{height:'2rem'}} alt=""/>  Personal Info</h5>
          <hr style={{marginTop:'-.5rem'}}/>
          </div>


          {profile.phone? 'Phone' : ''}  <br />
          <i style={{fontSize:'.8rem'}}> {profile.linkedinUsername? `${profile.phone}` : ''}</i> <br />


           {profile.address? 'Address' : ''}  <br />
           <i style={{fontSize:'.8rem'}}> {profile.linkedinUsername? `${profile.address}` : ''}</i>  <br />

          {profile.linkedinUsername? 'Linkedin' : ''}  <br />
          <i style={{fontSize:'.8rem'}}> {profile.linkedinUsername? `Linkedin://${profile.linkedinUsername}` : ''} </i>   <br />
           <br />
           
    </div>
  );
};

const Section = ({ title, children, settings }) => {
  if (!children) return null;
  return (
    <div className={styles.section}>
      {title &&
        (settings.format === "1" ? (
          <h5 style={{color:'gray' , textTransform:'uppercase'}}>
            {title.split(" ").map((ele) => (
              <>
                <span >{ele[0]}</span>
                {ele.slice(1)}
              </>
            ))}
            <div className={styles.divider}></div>
          </h5>
        ) : (
          <h2 className={styles.format2}>{title}</h2>
        ))}
      <div className={styles.section_container}>{children}</div>
    </div>
  );
};

const Points = ({ points, years, markdown = true, secondary }) => {
  if (!points) return null;
  return (
    <ul className={styles.points + " " + (secondary ? styles.secondary : null)}>
      {points?.map((point, index) => (
        <li key={index}   >
          {markdown ? (
            <>
              <div  
                key={index}
                dangerouslySetInnerHTML={{
                  __html: getSafeMarkdownString(point),
                }}
              />
              {years && <i>{years[index]}</i>}
            </>
          ) : (
            <>
              <div>{point}</div>
              {years && <i>{years[index]}</i>}
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

const Experience = ({ experience }) => {
  if (!experience || experience.length === 0) return null;
  return (
      <>
    <h5 style={{fontWeight:'bolder'}}> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6cNpG1W2077hhV_VtqsNO2aS8Vc3V6pSGoVle6hY-QV65TQedgV3Jtyg5BlEJyE77bdQ&usqp=CAU"  style={{height:'2rem'}} alt=""/>  Experience</h5>
         <hr style={{marginTop:'-.4rem'}}/>
      {experience?.map((exp, index) => (
        <div className={styles.project} key={index}>
          <div className={styles.firstline} >
            <h3 className={styles.title}>{exp.company} | <span style={{color:'gray'}}> {exp.role} </span> </h3>
            <span style={{fontSize:'13px'}}>{exp.timePeriod}  {exp.location ? `| ${exp.location}` : ''} </span>
          </div>
          <i>{exp.description}</i>
          <div    
            style={{
              marginLeft: "2.3rem",
            }}
          >
            <Points points={exp.points} markdown={true} secondary={true} />
          </div>
       
        </div>
        
      ))}
      </>
  );
};



const Projects = ({ projects }) => {
  if (!projects || projects.length === 0) return null;
  return (
    <>
      <h5 style={{fontWeight:'bolder'}}> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEcWMINhyEC4Z4lk-cNzkWhY7GEujHVthz9A&usqp=CAU"  style={{height:'2rem'}} alt=""/>  Projects</h5>
         <hr style={{marginTop:'-.5rem'}}/>
      {projects?.map((project, index) => (
        <div className={styles.project} key={index}>
          <div className={styles.firstline}>
            <h3 className={styles.title}>{project.title}  {project.organisation ? ` | ${project.organisation}` : ''}</h3>
            <span style={{fontSize:'13px'}}>{project.year}</span>
          </div>
          <i>{project.description}</i>

          <div
            style={{
              marginLeft: "2.3rem",
            }}
          >
            <Points points={project.points} markdown={true} secondary={true} />
          </div>
         
        </div>
      ))}
    </>
  );
};

const Education = ({ education, settings }) => {
  if (!education || education.length === 0) return null;
  return (
    <Section  settings={settings}>
      <h5 style={{fontWeight:'bolder'}}> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK8NJXQXDroV4W4PbeM_CGlICaQkB7UUxazQ&usqp=CAU"  style={{height:'2rem'}} alt=""/>  Education</h5>
         <hr style={{marginTop:'-.5rem'}}/>
          {education.map((edu, index) => (
            <span key={index}>
             <span style={{fontSize:'16px' , textTransform:'uppercase'  }} >{edu.college}</span>  <br />
              {edu.degree}  {edu.branch ? `in ${edu.branch} ` :' '}  <br /> 
              {edu.cgpa? `CGPA ${edu.cgpa}`: ''  || edu.percentage? `Percentage ${edu.percentage}%` : ''}  <br />
              {edu.year}
                <br />
                <br />
            </span>
          ))}
        
      
    </Section>
  );
};

const TechnicalSkills = ({ technicalSkills, settings }) => {
  if (!technicalSkills || technicalSkills.length === 0) return null;
  return (
    <Section   settings={settings}>
       <h5 style={{fontWeight:'bolder'}}> <img src="data:image/png;base64,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"  style={{height:'2rem'}} alt=""/>  Skills</h5>
         <hr style={{marginTop:'-.5rem'}}/>
      {technicalSkills.map((tech, index) => (
        <div key={index}>
          <strong>{tech.name}</strong>: <br /> <span style={{color:'gray'}}>{tech.skills?.join(".")}</span>
        </div>
      ))}
      {/* <div style={{ height: "0.7rem" }}></div> */}
      <br/>
    </Section>
  );
};

const ExtraCurriculars = ({ extraCurriculars, settings }) => {
  if (!extraCurriculars || extraCurriculars.length === 0) return null;
  return (
    < >
        <h5 style={{fontWeight:'bolder'}}> <img src="data:image/png;base64,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"  alt="" style={{height:'2rem'}}/>  ExtraCurriculars</h5>
         <hr style={{marginTop:'-.5rem'}}/>
       <div style={{marginLeft:'2.3rem'}}>
      <Points
        points={extraCurriculars.map((point) => point.description)}
        years={extraCurriculars.map((point) => point.year)}
        markdown={true}
      />
      </div>
    </>
  );
};

const Achievements = ({ achievements, settings }) => {
  if (!achievements || achievements.length === 0) return null;
  return ( 
   
    < >
       <h5 style={{fontWeight:'bolder'}}> <img src="data:image/png;base64,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"  style={{height:'2rem'}}/>  Achievements</h5>
         <hr style={{marginTop:'-.5rem'}}/>
       <div style={{marginLeft:'2.3rem'}} >
      <Points
        points={achievements.map((point) => point.description)}
        years={achievements.map((point) => point.year)}
        markdown={true}
      />
      </div>
    </>
  
  );
};

const Awards = ({ awards, settings }) => {
  if (!awards || awards.length === 0) return null;
  return ( 
   
    <>
       <h5 style={{fontWeight:'bolder'}}> <img src="data:image/png;base64,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"  style={{height:'2rem'}}/>  Awards</h5>
         <hr style={{marginTop:'-.5rem'}}/>

       <div style={{marginLeft:'-1.2rem'}} >
      <Points 
        points={awards.map((point) => point.description)}
        years={awards.map((point) => point.year)}
        markdown={true}
      />
       </div>
    </>
   
  );
};

const PORs = ({ pors, settings }) => {
  if (!pors || pors.length === 0) return null;
  return (
    <>
       <h5 style={{fontWeight:'bolder'}}> <img src="data:image/png;base64,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" alt="" style={{height:'2rem'}}/>  Responsibility</h5>
         <hr style={{marginTop:'-.5rem'}}/>
      {pors?.map((por, index) => {
        return (
          <div className={styles.project} key={index}>
            <div className={styles.firstline}>
              <h3 className={styles.title}>{por.title}</h3>
              <span style={{fontSize:'13px'}}>{por.year}</span>
            </div>
            <div
              style={{
                marginLeft: "2.3rem",
              }}
            >
              <Points points={por.points} markdown={true} secondary={true} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default IITNResume;
