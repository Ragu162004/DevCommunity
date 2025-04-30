import React, { useEffect, useState } from "react";
import { NavTab } from "./Components";
import { Home, Login, Register } from "./Pages";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const hideNav =
    location.pathname === "/login" || location.pathname === "/register";
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
  }, []);

  return (
    <>
      {!hideNav && <NavTab />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
