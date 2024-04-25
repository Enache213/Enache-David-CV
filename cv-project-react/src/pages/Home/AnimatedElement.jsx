import React, { useState, useEffect } from 'react';
import styles from './AnimatedElement.module.scss'; 

const AnimatedElement = () => {
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(true);
        }, 300);
        
        return () => clearTimeout(timeout);
    }, [visible]);

    return (
        <div className={`${styles.animatedElement} ${visible ? styles.show : ''}`}>
           

<div className={styles.overlay}></div>

         <div className={styles.text}>
	<div className={styles.wrapper}>
		<div id="W" className={styles.letter}>W</div>
		<div className={styles.shadow}>W</div>
	</div>
	<div className={styles.wrapper}>
		<div id="E" className={styles.letter}>E</div>
		<div className={styles.shadow}>E</div>
	</div>
	<div className={styles.wrapper}>
		<div id="L" className={styles.letter}>L</div>
		<div className={styles.shadow}>L</div>
	</div>
	<div className={styles.wrapper}>
		<div id="Ltwo" className={styles.letter}>L</div>
		<div className={styles.shadow}>L</div>
	</div>
	<div className={styles.wrapper}>
		<div id="C" className={styles.letter}>C</div>
		<div className={styles.shadow}>C</div>
	</div>
	<div className={styles.wrapper}>
		<div id="O" className={styles.letter}>O</div>
		<div className={styles.shadow}>O</div>
	</div>
	<div className={styles.wrapper}>
		<div id="M" className={styles.letter}>M</div>
		<div className={styles.shadow}>M</div>
	</div>
	<div className={styles.wrapper}>
		<div id="E"className={styles.letter}>E</div>
		<div className={styles.shadow}>E</div>
	</div>
    </div>


        </div>
    );
};
export default AnimatedElement;