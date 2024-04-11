import React, { useState, useEffect } from 'react';
import styles from './AnimatedText.module.scss';

const AnimatedText = () => {
  const [text, setText] = useState('');
  const sentences = ["I'm David and this is my cv"]; //i'm a junior front end developer
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
            // Afișăm întregul text după efectul de tipizare
            setText(currentSentence);
          }
        }
      };

      type();
    }, initialDelay);

    // Nu este necesar să curățăm timer-ul, deoarece textul nu va fi șters ulterior

  }, []);

  return (
    <div className={styles.typingContainer}>
      <p className={styles.textEffect}>{text}</p>
    </div>
  );
};

export default AnimatedText;
