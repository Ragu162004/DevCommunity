import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { logoIcon } from "../../assets";
import { NavItem } from "../../Containers";
import { PiUser } from "react-icons/pi";
import { CiBellOn } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  const handleLogout = async () => {
    const response = await axios.post(
      "http://localhost:5000/api/auth/logout",
      {},
      { withCredentials: true }
    );
    if (response.success === true) {
      console.log("Logging out");
      toast.success(response.data);
      navigate("/");
    }
  };
  return (
    <>
      <div className={styles.navbar}>
        <img src={logoIcon} alt="logo" className={styles.logo} />
        <NavItem />
        <div className={styles.config}>
          <Link to={"/notification"}>
            <CiBellOn className={styles.bell} />
          </Link>
          {isLoggedIn && (
            <div>
              <Link to={"/login"}>
                <PiUser className={styles.user} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
