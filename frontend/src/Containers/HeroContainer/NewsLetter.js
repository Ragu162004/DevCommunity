import React from 'react'
import styles from './HeroContainer.module.css'
import { RiSendPlaneLine } from "react-icons/ri";

const NewsLetter = () => {
return (
    <div className={styles.newsLetter}>
        <input type="text" className={styles.newsLetterBox} placeholder='Enter your email'/>
        <RiSendPlaneLine className={styles.newsLetterIcon}/>
    </div>
)
}

export default NewsLetter