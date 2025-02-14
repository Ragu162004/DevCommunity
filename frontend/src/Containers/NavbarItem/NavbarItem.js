import React from 'react'
import styles from './NavbarItem.module.css'

const NavbarItem = () => {
  return (
    <>
        <ul className={styles.nav_items}>
            <li className={styles.item}>Home</li>
            <li className={styles.item}>Community</li>
            <li className={styles.item}>About</li>
        </ul>       
    </>
  )
}

export default NavbarItem