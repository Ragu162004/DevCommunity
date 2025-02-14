import React from 'react'
import styles from './Navbar.module.css'
import { logoIcon } from '../../assets';
import { NavItem } from '../../Containers';
import { PiUser } from "react-icons/pi";
import { CiBellOn } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
        <div className={styles.navbar}>
            <img src={logoIcon} alt="logo" className={styles.logo}/>
            <NavItem />
            <div className={styles.config}>
              <CiBellOn className={styles.bell}/>
              <PiUser className={styles.user}/>
            </div>
        </div>
    </>
  )
}

export default Navbar