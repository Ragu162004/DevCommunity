import React from 'react'
import { NewsLetter, ExploreButton, WelcomeText } from '../../Containers'
import styles from './HeroSection.module.css'

const HeroSection = () => {
    return (
        <div className={styles.heroSection}>
            <div className={styles.container}>
                <h1>Welcome to DevCommunity <br /><span className={styles.spanText}>Join Us!</span></h1>
                <WelcomeText />
                <ExploreButton />
            </div>
        </div>
    )
}

export default HeroSection