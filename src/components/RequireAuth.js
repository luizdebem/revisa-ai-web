import React from "react"
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const RequireAuth = ({ children }) => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    const expiryDate = jwtDecode(accessToken).exp;
    const now = Date.now() / 1000;
    if (expiryDate > now) return children;
    return <Navigate to="/login" />
  }

  return <Navigate to="/login" />
}

export default RequireAuth