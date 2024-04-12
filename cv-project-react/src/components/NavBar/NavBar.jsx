
import Button from '@mui/material/Button';
 import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss'
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import EmailIcon from '@mui/icons-material/Email';


const handleHomeClick = () => {
  window.scrollTo(0, 0); // Du-te la începutul paginii
}

const HomeButton = () => {
  return (
    <Button className={styles.buttonStyle} onClick={handleHomeClick} component={Link} to="/Home">
      Home
    </Button>
  );  
}


const handleAboutMeClick = () => {
  window.scrollTo(0, 0); // Du-te la începutul paginii
}

const AboutMeButton = () => {
  return (
    <Button className={styles.buttonStyle} onClick={handleAboutMeClick} component={Link} to="/About Me">
      ABOUT ME
    </Button>
  );  

}

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>Enache David</div>

      <div className={styles.socialIco}>
      <a href="https://www.linkedin.com/in/david-enache-09409723b/" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon className={styles.icons}/>
      </a>
      <a href="https://github.com/Enache213" target="_blank" rel="noopener noreferrer">
        <GitHubIcon className={styles.icons}/>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <EmailIcon className={styles.icons}/>
      </a>
    </div>

      <div className={styles.right}>
      <HomeButton></HomeButton>
      <AboutMeButton></AboutMeButton>
      <Button className={styles.buttonStyle} component={Link} to="/Contact">
        Contact
      </Button>
      </div>
    </nav>
  );
}

export default NavBar;
