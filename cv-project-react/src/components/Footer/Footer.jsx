// import React from 'react';
import styles from './Footer.module.scss'; // Fișierul de stilizare pentru footer
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
// import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterCon}>
    <p>© 2024 Enache David CV.</p>
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
  </div>
     
    </footer>
  );
}

export default Footer;
