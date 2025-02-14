import React from 'react'
import styles from './Navbar.module.css'
import { logoIcon, bellIcon,userIcon } from '../../assets/index.js';
import { NavItem } from '../../Containers/index';

const Navbar = () => {
  return (
    <>
        <div className={styles.navbar}>
            <img src={logoIcon} alt="logo" className={styles.logo}/>
            <NavItem />
            <img src={bellIcon} alt="notification" className={styles.bell} />
            <img src={userIcon} alt="user" className={styles.user} />
        </div>
    </>
  )
}

export default Navbar