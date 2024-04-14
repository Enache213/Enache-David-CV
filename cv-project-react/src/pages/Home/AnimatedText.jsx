import React, { useState, useEffect } from 'react';
import styles from './AnimatedText.module.scss';

const AnimatedText = () => {
  const [text, setText] = useState('');
  const sentences = ["I'm David and this is my cv"]; 
  const typingSpeed = 50; // Viteza de tastare în milisecunde
  const initialDelay = 1300; // Timpul de întârziere inițial în milisecunde

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      let currentText = '';
      let currentIndex = 0;

      const type = () => {
        if (currentIndex < sentences.length) {
          const currentSentence = sentences[currentIndex];
          if (currentText.length < currentSentence.length) {
            currentText += currentSentence.charAt(currentText.length);
            setText(currentText);
            setTimeout(type, typingSpeed);
          } else {
            setText(currentSentence);
          }
        }
      };

      type();
    }, initialDelay);

  }, []);

  return (
    <div className={styles.typingContainer}>
      <p className={styles.textEffect}>{text}</p>
    </div>
  );
};

export default AnimatedText;
