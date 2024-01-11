import React from "react";
import styles from "./ChooseTemplate.module.css";
import { useResume } from "../../context/Resume";
import bot from "../../../../assets/images/bot.gif";

const ChooseTemplate = () => {
  const { templates, handleTemplateChange } = useResume();
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Create your professional resume effortlessly with integrated AI!</div>
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
              </div>
              <div className={styles.name}>{template.name}</div>
            </div>
          );
        })}
        <div  >
          <img src={bot} alt="" srcset="" height={'400'} />
        </div>
      </div>
    </div>
  );
};

export default ChooseTemplate;
