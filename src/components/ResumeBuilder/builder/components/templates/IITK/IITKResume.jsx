import React from "react";
import styles from "./IITKResume.module.css";
import { getSafeMarkdownString } from "../../../../utils/markdown";

const IITDResume = ({ sections }) => {
  return (
    <div className={styles.resume}>
      <Header
        profile={sections.profile.data}
        iitb_logo={sections.settings?.data.logo}
      />
       <div style={{display:'flex' , justifyContent:'space-between'}}>
          <div style={{ width:'35%'}}>
                <Education
                  education={sections.education?.data}
                  settings={sections.settings?.data}
                />  

                <Links
                 profile={sections.profile.data}
                />
                  <TechnicalSkills
                    technicalSkills={sections.technicalSkills?.data}
                    settings={sections.settings?.data}
                  />
          </div>
          <div style={{ width:'65%'}}>

          <Experience
              experience={sections.experience?.data}
              settings={sections.settings?.data}
            />
            <Projects
              projects={sections.projects?.data}
              settings={sections.settings?.data}
            />
             <Awards
                awards={sections.awards?.data}
                settings={sections.settings.data}
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
          <h2 style={{textAlign:'center'}}>{profile.name}</h2>
          <div style={{textAlign:'center'}}>{profile.email} | {profile.phone}   </div>
            <hr />
    </div>
  );
};


const Links = ({ profile }) => {
  if (!profile) return null;
  return (
    <div style={{marginLeft:'.5rem'}}>   
         {profile.githubUsername? (
          <div>
            <h5 style={{color:'gray'}}>Links</h5>
          </div>
         ) :''}
           {profile.githubUsername? `Github://${profile.githubUsername}` : ''} <br />
           {profile.linkedinUsername? `Linkedin://${profile.linkedinUsername}` : ''} <br />
           {profile.codechefUsername? `Codechef://${profile.codechefUsername}` : ''} <br />
           {profile.codeforceUsername? `Codeforce://${profile.codeforceUsername}` : ''} 
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
              <div style={{  marginTop:'-1.3rem' ,padding:'0'}}
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

const Experience = ({ experience, settings }) => {
  if (!experience || experience.length === 0) return null;
  return (
    <Section title="Experience" settings={settings}>
      {experience?.map((exp, index) => (
        <div className={styles.project} key={index}>
          <div className={styles.firstline} >
            <h3 className={styles.title}>{exp.company} | <span style={{color:'gray'}}> {exp.role} </span> </h3>
            <span style={{fontSize:'13px'}}>{exp.timePeriod}  {exp.location ? `| ${exp.location}` : ''} </span>
          </div>
          <div className={styles.secondline}>
            
            <i>{exp.description}</i>
          
          </div>
       
          <div    
            style={{
              marginLeft: "2.3rem",
            }}
          >
            <Points points={exp.points} markdown={true} secondary={true} />
          </div>
       
        </div>
        
      ))}
    </Section>
  );
};

const Projects = ({ projects, settings }) => {
  if (!projects || projects.length === 0) return null;
  return (
    <Section title="Projects" settings={settings}>
      {projects?.map((project, index) => (
        <div className={styles.project} key={index}>
          <div className={styles.firstline}>
            <h3 className={styles.title}>{project.title}  {project.organisation ? ` | ${project.organisation}` : ''}</h3>
            <span style={{fontSize:'13px'}}>{project.year}</span>
          </div>

          <div className={styles.secondline}>
            <i>{project.description}</i>
            {/* <i>{project.organisation}</i> */}
          </div>

          <div
            style={{
              marginLeft: "2.3rem",
            }}
          >
            <Points points={project.points} markdown={true} secondary={true} />
          </div>
         
        </div>
      ))}
    </Section>
  );
};

const Education = ({ education, settings }) => {
  if (!education || education.length === 0) return null;
  return (
    <Section title="Education" settings={settings}>
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
    <Section title="Skills" settings={settings}>
      {technicalSkills.map((tech, index) => (
        <div key={index}>
          <strong>{tech.name}</strong>: <br /> <span style={{color:'gray'}}>{tech.skills?.join(".")}</span>
        </div>
      ))}
      {/* <div style={{ height: "0.7rem" }}></div> */}
    </Section>
  );
};

const ExtraCurriculars = ({ extraCurriculars, settings }) => {
  if (!extraCurriculars || extraCurriculars.length === 0) return null;
  return (
    <Section title="Extra Curriculars" settings={settings}>
       <div style={{marginLeft:'2.3rem'}}>
      <Points
        points={extraCurriculars.map((point) => point.description)}
        years={extraCurriculars.map((point) => point.year)}
        markdown={true}
      />
      </div>
    </Section>
  );
};

const Achievements = ({ achievements, settings }) => {
  if (!achievements || achievements.length === 0) return null;
  return ( 
   
    <Section title="Achievements" settings={settings}>
       <div style={{marginLeft:'2.3rem'}}>
      <Points
        points={achievements.map((point) => point.description)}
        years={achievements.map((point) => point.year)}
        markdown={true}
      />
      </div>
    </Section>
  
  );
};

const Awards = ({ awards, settings }) => {
  if (!awards || awards.length === 0) return null;
  return ( 
   
    <Section title=" Awards" settings={settings}>
       <div style={{marginLeft:'2.3rem'}}>
      <Points 
        points={awards.map((point) => point.description)}
        years={awards.map((point) => point.year)}
        markdown={true}
      />
       </div>
    </Section>
   
  );
};

const PORs = ({ pors, settings }) => {
  if (!pors || pors.length === 0) return null;
  return (
    <Section title="Responsibility" settings={settings}>
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
    </Section>
  );
};

export default IITDResume;
