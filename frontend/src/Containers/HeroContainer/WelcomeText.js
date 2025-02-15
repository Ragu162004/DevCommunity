import React from 'react'
import styles from './HeroContainer.module.css';

const WelcomeText = () => {
return (
    <>
        <p className={styles.welcomeText}>
            "Share your innovative designs and ideas with the community
            <br />
            and get feedback from fellow creators!"
        </p>
    </>
)
}

export default WelcomeText