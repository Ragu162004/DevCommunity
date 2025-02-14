import React from 'react'
import styles from './NavbarItem.module.css'

const NavbarItem = () => {
  return (
    <>
      <ul className={styles.nav_items}>
        <li className={styles.item}><a href="">Home</a></li>
        <li className={styles.item}><a href="">Community</a></li>
        <li className={styles.item}><a href="">About</a></li>
      </ul>
    </>
  )
}

export default NavbarItem