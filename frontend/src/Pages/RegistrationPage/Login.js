import React, { useState } from "react";
import styles from "./Login.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      formData,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    if (response.status === 200) {
      console.log(response);
      toast.success(response.data.Message, {
        position: "top-right",
      }); 
      navigate("/");
    } else {
      console.log(response);
      toast.error(response.data.message, {
        position: "top-right",
      });
    }
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        <div className={styles.forgotPassword}>
          <button type="button" onClick={handleForgotPassword}>
            Forgot Password?
          </button>
        </div>
        <button type="submit">Submit</button>
        <div className={styles.haveAccount}>
          <p>
            Don't Have an account? <Link to={"/register"}>Click here</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
