import React from "react";
import styles from "./IITBResume.module.css";
import { getSafeMarkdownString } from "../../../../utils/markdown";
import IITBLogo from "../../../../assets/images/iitblogo.png";

const IITAResume = ({ sections }) => {
  return (
    <div className={styles.resume}>
      <Header
        profile={sections.profile.data}
        iitb_logo={sections.settings?.data.logo}
      />
      <Education
        education={sections.education?.data}
        settings={sections.settings?.data}
      />
       <Projects
        projects={sections.projects?.data}
        settings={sections.settings?.data}
      />
      <Experience
        experience={sections.experience?.data}
        settings={sections.settings?.data}
      />
       <TechnicalSkills
        technicalSkills={sections.technicalSkills?.data}
        settings={sections.settings?.data}
      />
      <Achievements
        achievements={sections.achievements?.data}
        settings={sections.settings?.data}
      />
      <Awards
        awards={sections.awards?.data}
        settings={sections.settings.data}
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
  );
};

const Header = ({ profile, iitb_logo }) => {
  if (!profile) return null;
  return (
    <div className={styles.header}>
      {iitb_logo && (
        <div className={styles.iitb_logo}>
          <img src={IITBLogo} alt="IITB Logo" />
        </div>
      )}
      <div className={styles.user_details}>
        <div className={styles.left}>
          <h1 className={styles.header_name}>{profile.name}</h1>
          <div className={styles.header_text}>{profile.degree}</div>
          <div className={styles.header_text}>{profile.college}</div>
        </div>
        <div className={styles.right}>
          <div className={styles.header_text}>  {profile.mail}</div>
          <div className={styles.header_text}>{profile.github}</div>
          <div className={styles.header_text}>{profile.linkedin}</div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children, settings }) => {
  if (!children) return null;
  return (
    <div className={styles.section}>
      {title &&
        (settings.format === "1" ? (
          <div>
      <h2 className={styles.format1}>{title}</h2>
      <div className={styles.hr}> </div>
    </div>
        ) : (
          <h2 className={styles.format1}>{title}</h2>
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
        <li key={index} className={styles.point}>
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

const Experience = ({ experience, settings }) => {
  if (!experience || experience.length === 0) return null;
  return (
    <Section title="Experience" settings={settings}>
      {experience?.map((exp, index) => (
        <div className={styles.project} key={index}>
          <div className={styles.firstline}>
            <h3 className={styles.title}>{exp.role}</h3>
            <i> {exp.timePeriod}</i>
          </div>

          <div className={styles.secondline}>
           
            
            <i>{exp.company}</i>
            <i>{exp.location}</i> 
          </div>
              <i>{exp.description}</i>
          <div
            style={{
              marginLeft: "1rem",
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
    <Section title="Personal Projects" settings={settings}>
      {projects?.map((project, index) => (
        <div className={styles.project} key={index}>
          <div className={styles.firstline}>
            <h3 className= {styles.title}>  {project.title} </h3>
            <i>{project.year}</i>
          </div>

          <div className={styles.secondline}>
            <i style={{fontWeight:'100'}}>{project.description}</i>
            <i>{project.organisation}</i>
          </div>

          <div
            style={{
              marginLeft: "1rem",
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
      
      <ul>
  {education.map((point, index) => (
    <>
    <li key={index} >
      <span style={{fontWeight:'600'}}> {point.degree} {point.branch ? `in ${point.branch}` : ''} </span>
      <i style={{fontWeight:'100'}}>{point.year}</i>
    </li>
    <div key={index} style={{ display:'flex' , justifyContent:'space-between'}}>
    <i   style={{ fontWeight: '100' }}>{point.college}</i>
    <i style={{ fontWeight: '100' }}>{`CGPA :  ${point.cgpa}`}</i>
  </div>
   
     
    </>
  ))}
</ul>
    </Section>
  );
};

const TechnicalSkills = ({ technicalSkills, settings }) => {
  if (!technicalSkills || technicalSkills.length === 0) return null;
  return (
    <Section title="Technical Skills" settings={settings}>
      {technicalSkills.map((tech, index) => (
        <div key={index}>
          <strong>{tech.name}</strong>: {tech.skills?.join(",")}
        </div>
      ))}
      <div style={{ height: "0.7rem" }}></div>
    </Section>
  );
};

const ExtraCurriculars = ({ extraCurriculars, settings }) => {
  if (!extraCurriculars || extraCurriculars.length === 0) return null;
  return (
    <Section title="Extra Curriculars" settings={settings}>
      <Points
        points={extraCurriculars.map((point) => point.description)}
        years={extraCurriculars.map((point) => point.year)}
        markdown={true}
      />
    </Section>
  );
};

const Achievements = ({ achievements, settings }) => {
  if (!achievements || achievements.length === 0) return null;
  return (
    <Section title="Scholastic Achievements" settings={settings}>
      <Points
        points={achievements.map((point) => point.description)}
        years={achievements.map((point) => point.year)}
        markdown={true}
      />
    </Section>
  );
};

const Awards = ({ awards, settings }) => {
  if (!awards || awards.length === 0) return null;
  return (
    <Section title="Scholarships and Awards" settings={settings}>
      <Points
        points={awards.map((point) => point.description)}
        years={awards.map((point) => point.year)}
        markdown={true}
      />
    </Section>
  );
};

const PORs = ({ pors, settings }) => {
  if (!pors || pors.length === 0) return null;
  return (
    <Section title="Positions of Responsibility" settings={settings}>
      {pors?.map((por, index) => {
        return (
          <div className={styles.project} key={index}>
            <div className={styles.firstline}>
              <h3 className={styles.title}>{por.title}</h3>
              <i>{por.year}</i>
            </div>
            <div
              style={{
                marginLeft: "1rem",
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

export default IITAResume;
