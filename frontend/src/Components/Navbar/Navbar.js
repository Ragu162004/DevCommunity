import React from 'react'
import styles from './Navbar.module.css'
import { logoIcon } from '../../assets';
import { NavItem } from '../../Containers';
import { PiUser } from "react-icons/pi";
import { CiBellOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
        <div className={styles.navbar}>
            <img src={logoIcon} alt="logo" className={styles.logo}/>
            <NavItem />
            <div className={styles.config}>
          <Link to={'/notification'}><CiBellOn className={styles.bell} /></Link>
          <Link to={'/signin'}><PiUser className={styles.user} /></Link>
            </div>
        </div>
    </>
  )
}

export default Navbar