
import React from 'react';
import photoImgMe from '../images/photoImgMe.png'
import styles from './HomePage.module.scss'
import AnimatedElement from './AnimatedElement';
import AnimatedText from './AnimatedText';

//https://www.catalinciobanu.ro/evenimente
//camelia@cvmasters.ro
const HomePage = () => {    
    return(
        
        <div className={styles.mainContainer}>
            <div className={styles.imageContainer}>
                   <img src={photoImgMe}alt="photoImgMe" className={styles.myImg} />
            </div>
<AnimatedText></AnimatedText>


        <div className={styles.aboutMeContainer}>
            <h2 className={styles.h2Title}>About Me</h2>
             <h3 className={styles.contentStyle}>🚀📚 I am Junior Front-End Developer from Iasi,
              seeking an opportunity to develop and apply my skills in a professional setting.
             With a passion for coding and a strong desire to learn,
           I am ready to actively contribute and grow in the world of programming.
          I am looking for opportunities to expand my knowledge and contribute to projects that bring value and innovation.
            With a proactive attitude and a drive to progress, I am prepared to learn and contribute to the organization's success.
            Learn more about me in the about me section.</h3>
        </div>


        <div className={styles.skillsContainer}>
  <h2 className={styles.skillsHeader}>Technical skills</h2>
  <div className={styles.skillsGrid}>

      <ul className={styles.skillsColumn}>
        <li className={styles.paragraphs}><strong>HTML</strong></li>
      </ul>

    <ul className={styles.skillsColumn}>
        <li className={styles.paragraphs}><strong>CSS/SCSS</strong></li>
    </ul>
   
    <ul className={styles.skillsColumn}>
        <li className={styles.paragraphs}><strong>JavaScript</strong></li>
    </ul>
    
    <ul className={styles.skillsColumn}>
        <li className={styles.paragraphs}><strong>React</strong></li>
    </ul>
    
    <ul className={styles.skillsColumn}>
        <li className={styles.paragraphs}><strong>Attention to detail</strong></li>
    </ul>

    <ul className={styles.skillsColumn}>
        <li className={styles.paragraphs}><strong>Logical thinking</strong></li>
    </ul>
    
    <ul className={styles.skillsColumn}>
        <li className={styles.paragraphs}><strong>Perseverance</strong></li>
    </ul>
   
    <ul className={styles.skillsColumn}>
        <li className={styles.paragraphs}><strong>Creativity</strong></li>
    </ul>
    
    <ul className={styles.skillsColumn}>
        <li className={styles.paragraphs}><strong>Organization</strong></li>
    </ul>
  </div>
</div>
      <AnimatedElement />
    </div>
    )
 
}
     
export default HomePage;
