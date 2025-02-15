import React from 'react'
import styles from './HeroContainer.module.css';

const WelcomeText = () => {
return (
    <>
        <p className={styles.welcomeText}>
            <strong>"Unlock your potential—take assessments and match your skills </strong>
            <br />
            <strong>to company-specific job requirements in just a few clicks!"</strong>
        </p>
    </>
)
}

export default WelcomeText