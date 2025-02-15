import React from 'react'
import { NewsLetter, ExploreButton, WelcomeText } from '../../Containers'
import styles from './HeroSection.module.css'
import { eyeCatcher, codeTag, cssTag, jsTag, reactTag, tailTag} from '../../assets'

const HeroSection = () => {
    return (
        <div className={styles.heroSection}>
            <div className={styles.container}>
                <p className={styles.text}>Welcome to DevCommunity <br /><span className={styles.spanText}>Collaborate, Innovate, and Share Your Creations!</span></p>
                <WelcomeText />
                <ExploreButton />
            </div>
            <div className={styles.imageContainer}>
                <img src={eyeCatcher} alt="intro" height={300} className={styles.image1}/>
                <img src={codeTag} alt="intro" height={40} className={styles.image2}/>
                <img src={cssTag} alt="intro" height={40} className={styles.image3}/>
                <img src={tailTag} alt="intro" height={40} className={styles.image4}/>
                <img src={reactTag} alt="intro" height={100} className={styles.image5}/>
            </div>
        </div>
    )
}

export default HeroSection