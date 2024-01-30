import React from "react";
import BuildResume from "../config/BuildResume";

const IITDResumeBuild = () => {
  const config = {
    name: "This is ITT",
    language: "en",
    direction: "ltr",
    company: "Indian Institute of Technology, Bombay",
    sections: [
      {
        name: "Settings",
        key: "sections.settings.data",
        type: "static",
        fields: [
          // {
          //   name: "IITB logo",
          //   key: "sections.settings.data.logo",
          //   label: "IITB logo",
          //   placeholder: "",
          //   type: "toggle",
          //   defaultValue: true,
          // },
          {
            name: "Format",
            key: "sections.settings.data.format",
            label: "Format",
            placeholder: "",
            type: "dropdown",
            options: ["1", "2"],
            defaultValue: "1",
          },
        ],
      },
      {
        name: "Personal Details",
        key: "sections.profile.data",
        type: "static",
        displayKey: "sections.profile.data.name",
        fields: [
          {
            name: "name",
            key: "sections.profile.data.name",
            label: "Name",
            placeholder: "",
            type: "text",
          },
          {
            name: "degree",
            key: "sections.profile.data.degree",
            label: "Degree",
            placeholder: "",
            type: "text",
          },
          {
            name: "branch",
            key: "sections.profile.data.branch",
            label: "Branch",
            placeholder: "",
            type: "text",
            options: [
              "Applied Geology",
              "Applied Geophysics",
              "Chemical Engineering",
              "Civil Engineering",
              "Computer Science & Engineering",
              "Electrical Engineering",
              "Electronics & Communication Engineering",
              "Electronics & Instrumentation Engineering",
              "Engineering Physics",
              "Environmental Engineering",
              "Mathematics & Computing",
              "Mineral & Metallurgical Engineering",
              "Mechanical Engineering",
              "Mining Engineering",
              "Mining Machinery Engineering",
              "Petroleum Engineering",
            ],
          },
          {
            name: "college",
            key: "sections.profile.data.college",
            label: "College",
            placeholder: "",
            type: "text",
            defaultValue: "MyFuse",
          },
          {
            name: "email",
            key: "sections.profile.data.email",
            label: "Email",
            placeholder: "",
            type: "text",
          },
          {
            name: "githubUsername",
            key: "sections.profile.data.githubUsername",
            label: "Github Username",
            placeholder: "",
            type: "text",
          },
          {
            name: "phone",
            key: "sections.profile.data.phone",
            label: "Phone",
            placeholder: "",
            type: "text",
          },
          {
            name: "linkedinUsername",
            key: "sections.profile.data.linkedinUsername",
            label: "LinkedIn Username",
            placeholder: "",
            type: "text",
          },
          {
            name: "codechefUsername",
            key: "sections.profile.data.codechefUsername",
            label: "Codechef Username",
            placeholder: "",
            type: "text",
          },
          {
            name: "codeforceUsername",
            key: "sections.profile.data.codeforceUsername",
            label: "Codeforce Username",
            placeholder: "",
            type: "text",
          },
          // {
          //   name: "admissionNumber",
          //   key: "sections.profile.data.admissionNumber",
          //   label: "Admission Number",
          //   placeholder: "",
          //   type: "text",
          // },
          // {
          //   name: "gender",
          //   key: "sections.profile.data.gender",
          //   label: "Gender",
          //   placeholder: "",
          //   type: "dropdown",
          //   options: ["Male", "Female", "Gender Diverse"],
          // },
          // {
          //   name: "dob",
          //   key: "sections.profile.data.dob",
          //   label: "Date of Birth",
          //   placeholder: "",
          //   type: "text",
          // },
        ],
      },
      {
        name: "Education",
        key: "sections.education.data",
        description: "Your academic achievements",
        type: "dynamic",
        displayKey: "degree",
        fields: [
          {
            name: "degree",
            key: "degree",
            label: "Degree",
            placeholder: "e.g. B.Tech, Class 12th, etc.",
            type: "text",
          },
          {
            name: "branch",
            key: "branch",
            label: "Branch",
            placeholder: "e.g. Computer Science, Science (PCM), etc.",
            type: "text",
          },
          {
            name: "university",
            key: "university",
            label: "University",
            placeholder: "Eg. CBSE, IIT Bombay, etc.",
            type: "text",
          },
          {
            name: "college",
            key: "college",
            label: "College",
            placeholder: "",
            type: "text",
          },
          {
            name: "year",
            key: "year",
            label: "Year",
            placeholder: "",
            type: "text",
          },
          {
            name: "cgpa",
            key: "cgpa",
            label: "CPI",
            placeholder: "",
            type: "text",
          },
          {
            name: "percentage",
            key: "percentage",
            label: "Percentage",
            placeholder: "",
            type: "text",
          },
        ],
      },
      {
        name: "Experience",
        key: "sections.experience.data",
        description: "Experience always counts! Add your experience here.",
        type: "dynamic",
        displayKey: "company",
        fields: [
          {
            name: "company",
            key: "company",
            label: "Company Name",
            placeholder: "",
            type: "text",
          },
          {
            name: "role",
            key: "role",
            label: "Role",
            placeholder: "",
            type: "text",
          },
          {
            name: "timePeriod",
            key: "timePeriod",
            label: "Time Period",
            placeholder: "e.g. (Jan 2020 - Feb 2021)",
            type: "text",
          },
          {
            name: "location",
            key: "location",
            label: "Location",
            placeholder: "e.g. Banglore",
            type: "text",
          },
          {
            name: "description",
            key: "description",
            label: "Description",
            placeholder: "e.g. (Worked on ...)",
            type: "textarea",
          },
          {
            name: "points",
            key: "points",
            label: "Key Points",
            placeholder: "",
            type: "list-string",
          },
        ],
      },
      {
        name: "Scholastic Achievements",
        key: "sections.achievements.data",
        description: "Your achievements",
        type: "dynamic",
        displayKey: "description",
        fields: [
          {
            name: "description",
            key: "description",
            label: "Description",
            placeholder: "",
            type: "text",
          },
          {
            name: "year",
            key: "year",
            label: "Year",
            placeholder: "",
            type: "text",
          },
        ],
      },
      {
        name: "Scholarships and Awards",
        key: "sections.awards.data",
        description: "Your awards and scholarships",
        type: "dynamic",
        displayKey: "description",
        fields: [
          {
            name: "description",
            key: "description",
            label: "Description",
            placeholder: "",
            type: "text",
          },
          {
            name: "year",
            key: "year",
            label: "Year",
            placeholder: "",
            type: "text",
          },
        ],
      },
      {
        name: "Projects",
        key: "sections.projects.data",
        description: "Good and relevant projects are always a plus!",
        type: "dynamic",
        displayKey: "title",
        fields: [
          {
            name: "title",
            key: "title",
            label: "Title",
            placeholder: "",
            type: "text",
          },
          {
            name: "organisation",
            key: "organisation",
            label: "Organisation",
            placeholder: "e.g. Institute technical Summer Project, etc.",
            type: "text",
          },
          {
            name: "year",
            key: "year",
            label: "Time Period",
            placeholder: "",
            type: "text",
          },
          {
            name: "description",
            key: "description",
            label: "Description",
            placeholder: "",
            type: "textarea",
          },
          {
            name: "points",
            key: "points",
            label: "Feature Points",
            placeholder: "",
            type: "list-string",
          },
        ],
      },
      {
        name: "Technical Skills",
        key: "sections.technicalSkills.data",
        description: "Your technical skills",
        type: "dynamic",
        displayKey: "name",
        fields: [
          {
            name: "name",
            key: "name",
            label: "Name",
            placeholder: "",
            type: "text",
          },
          {
            name: "skills",
            key: "skills",
            label: "Skills",
            placeholder: "",
            type: "list-string",
          },
        ],
      },
      {
        name: "Extra Curriculars",
        key: "sections.extraCurriculars.data",
        description: "Your extra curricular activities",
        type: "dynamic",
        displayKey: "description",
        fields: [
          {
            name: "description",
            key: "description",
            label: "Description",
            placeholder: "",
            type: "text",
          },
          {
            name: "year",
            key: "year",
            label: "Year",
            placeholder: "",
            type: "text",
          },
        ],
      },
      {
        name: "Positions of Responsibility",
        key: "sections.positionsOfResponsibility.data",
        description: "Your positions of responsibility",
        type: "dynamic",
        displayKey: "title",
        fields: [
          {
            name: "title",
            key: "title",
            label: "Title",
            placeholder: "",
            type: "text",
          },
          {
            name: "year",
            key: "year",
            label: "Year",
            placeholder: "",
            type: "text",
          },
          {
            name: "points",
            key: "points",
            label: "Points",
            type: "list-string",
          },
        ],
      },
    ],
  };
  return <BuildResume config={config} />;
};

export default IITDResumeBuild;
