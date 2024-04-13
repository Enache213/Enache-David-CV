import styles from './ContactMe.module.scss'
import { useState } from 'react';


const isValidEmail = (email) => {
    // Expresie regulată pentru validarea adresei de email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

const ContactMe = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gmail: '',
        message: ''
      });
    
      const handleChange = event => {
        const { name, value } = event.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };


      
    
      const handleSubmit = event => {
        event.preventDefault();

        if (formData.firstName.length < 3 || formData.lastName.length < 3) {
            alert( "The first name and last name must have at least 3 characters!");
            return;
          }

        if (!isValidEmail(formData.gmail)) {
            alert( "The email address is not valid!");
            return;
          }
        console.log('Form data:', formData);
        window.open(`mailto:dedavid09@gmail.com?subject=Contact Form Submission&body=Nume: 
        ${formData.firstName} 
        ${formData.lastName}%0D%0Aemail: 
        ${formData.gmail}`);
      };
    
    return(
        <div className={styles.mainContainer}>
      <h2 className={styles.formStyle}>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            style={{ backgroundColor: 'rgb(0 0 0 / 32%)', 
                     color: 'whiteSmoke', border: '2px solid black' }} 
            
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"   
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            style={{ backgroundColor: 'rgb(0 0 0 / 32%)', 
            color: 'whiteSmoke',  border: '2px solid black'}} 
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="gmail">Gmail:</label>
          <input
            type="gmail"
            id="gmail"
            name="gmail"
            value={formData.gmail}
            onChange={handleChange}
            required
            style={{ backgroundColor: 'rgb(0 0 0 / 32%)', 
            color: 'whiteSmoke',  border: '2px solid black' }} 
          />
        </div>
        <div className={styles.field}>
            <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{ backgroundColor: 'rgb(0 0 0 / 32%)', color: 'whiteSmoke', border: '2px solid black' }}
                    />
         </div>
        <button className={styles.button} type="submit">Send Email</button>
      </form>
    </div>
    )
}

export default ContactMe;