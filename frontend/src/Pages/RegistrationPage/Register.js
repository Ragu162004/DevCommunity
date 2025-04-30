import React, { useState } from "react";
import styles from "./Register.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import toast from "react-hot-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptPolicy: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:5000/api/auth/register",
      formData,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    if(response.status === 201) {
      toast.success(response.data.message, {
        position: "top-right"
      });
      navigate("/login");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={toggleShowPassword}>
            <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
          </button>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={toggleShowConfirmPassword}>
            <span>{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}</span>
          </button>
        </div>
        <div className={styles.formGroup}>
          <label>
            <input
              type="checkbox"
              name="acceptPolicy"
              checked={formData.acceptPolicy}
              onChange={handleChange}
              required
            />
            Accept Privacy Policy
          </label>
        </div>
        <button type="submit">Submit</button>
        <div className={styles.haveAccount}>
          <p>
            Don't Have an account? <Link to={"/login"}>Click here</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
