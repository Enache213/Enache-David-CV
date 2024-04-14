
import styles from './AboutMe.module.scss'
import React from 'react';
import myDiplomaIt from '../../assets/myDiplomaIt.jpg'
import { useState } from 'react';

const handleImageClick = () => {
  const image = document.getElementById('myImage');
  if (image.style.width === '9rem') {
    image.style.width = '30rem';
    image.style.height = '30rem';
  } else {
    image.style.width = '9rem';
    image.style.height = '9rem';
  }
};


const AboutMe = () => {
  const [showText, setShowText] = useState(false);

  
  const handleMouseEnter = () => {
    setShowText(true);
  };

  const handleMouseLeave = () => {
    setShowText(false);
  };
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


         <div className={styles.courseContainer}>
         
             <h2 className={styles.titleStyle}>Course Front-End Developer   2023-2024</h2>
            <div className={styles.courseSection}>
            <h3 className={styles.styleContent}>
            I could get a nice description from the internet about what I did in this course,
             but I'd like to say it in my own words. In this course,
              I learned the basics and maybe even more of the front-end, such as HTML, CSS, JavaScript, and React.
               Of course, we were also informed about Git and GitHub. This course lasted 6 months (100 hours) in parallel,
                I also worked intensively to implement these things for at least 3 times the duration of the course.
                 Below, I will briefly describe what I learned in this course.
            </h3>
            <div className={styles.imageContainer}>
        <img src={myDiplomaIt} alt="myDiploma" className={styles.imageStyle} id="myImage"
          onClick={handleImageClick}
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}/> 
        {showText && <div className={styles.imageText}>Click Me</div>}
        </div>
       </div>
           

        <h3 className={styles.secondTitleStyle}>HTML (HyperText Markup Language)  </h3>
     <ul className={styles.ulStyle}>
    <li className={styles.liStyle}>I learned to build the basic structure of web pages using HTML.</li>
    <li className={styles.liStyle}>I created headers, paragraphs, ordered and unordered lists, images, and links.</li>
    <li className={styles.liStyle}>HTML is the language that allows browsers to interpret and display the content of web pages.</li>
    </ul>
       
    <h3 className={styles.secondTitleStyle}>CSS (Cascading Style Sheets)</h3>
     <ul className={styles.ulStyle}>
    <li className={styles.liStyle}>I explored styling web pages with CSS.</li>
    <li className={styles.liStyle}> I applied colors, fonts, margins, and padding to create attractive designs. </li>
    <li className={styles.liStyle}>CSS is responsible for the visual appearance of web pages.</li>
    </ul>

    <h3 className={styles.secondTitleStyle}>JavaScript</h3>
     <ul className={styles.ulStyle}>
    <li className={styles.liStyle}>I have acquired knowledge about programming in JavaScript.</li>
    <li className={styles.liStyle}> I have written functions, manipulated Document Object Model (DOM) elements, and handled events. </li>
    <li className={styles.liStyle}>JavaScript adds interactivity and dynamism to web pages.</li>
    </ul>

    <h3 className={styles.secondTitleStyle}>React JS</h3>
     <ul className={styles.ulStyle}>
    <li className={styles.liStyle}>I delved into the React JS library.</li>
    <li className={styles.liStyle}>I learned about its features, components, and how it simplifies building user interfaces. </li>
    <li className={styles.liStyle}>I designed and implemented reusable components.</li>
    <li className={styles.liStyle}>Additionally, i utilized React for efficient page routing and navigation.</li>
    </ul>

    <h3 className={styles.secondTitleStyle}>GitHub</h3>
     <ul className={styles.ulStyle}>
    <li className={styles.liStyle}>Creating a Repository</li>
    <li className={styles.liStyle}> I learned to work with branches</li>
    <li className={styles.liStyle}>I learned to do commits to save the changes in the repository</li>
    </ul>
         </div>

         
         <div className={styles.schoolStyle}>
             <h2 className={styles.titleSchoolStyle}>HighSchool</h2>
               <div className={styles.schoolInfo}>
             <h3 className={styles.styleText}>High School Theoretical Emil Racovita Vaslui</h3>
            <p className={styles.yearsStyle}>2018-2022</p>
               </div>
         </div>

        </div>
    )
}

export default AboutMe;