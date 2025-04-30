import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const AuthChecker = ({ user, isAuthenticated, children }) => {
    const location = useLocation();

    if (!isAuthenticated && !(location.pathname.includes("/login") || location.pathname.includes("register"))) {
        return <Navigate to="/auth/login" />
    }

    if (isAuthenticated && (location.pathname.includes("/login") || location.pathname.includes("/register"))) {
        if (user?.role === 'admin') {
            return <Navigate to="/admin/dashboard" />
        } else if (user?.role === 'dev') {
            return <Navigate to="/dev/home" />
        }
    }

    if (isAuthenticated) {
        if (user?.role !== 'admin' && location.pathname.includes("admin")) {
            return <Navigate to="/unauth-page" />
        }
    }

    if (isAuthenticated) {
        if (user?.role === 'admin' && (location.pathname.includes('dev'))) {
            return <Navigate to="/admin/dashboard" />
        }
        else if (user?.role === 'user' && (location.pathname.includes('admin'))) {
            return <Navigate to="/dev/home" />
        }
    }

    return <>{children}</>;
}

export default AuthChecker 