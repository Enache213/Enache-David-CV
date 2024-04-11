import styles from './AboutMe.module.scss'
import React from 'react';

const AboutMe = () => {
    return(
        <div className={styles.mainContainer}>
         <div className={styles.aboutMeContainer}>
            <h2 className={styles.h2Title}>About Me</h2>
             <h3 className={styles.contentStyle}>🚀📚 I am Junior Front-End Developer from Iasi,
            seeking an opportunity to develop and apply my skills in a professional setting.
             With a passion for coding and a strong desire to learn,
             I am ready to actively contribute and grow in the world of programming.
             I am looking for opportunities to expand my knowledge and contribute to projects that bring value and innovation.
            With a proactive attitude and a drive to progress, I am prepared to learn and contribute to the organization's success.
            </h3>
         </div>
        </div>
    )
}

export default AboutMe;