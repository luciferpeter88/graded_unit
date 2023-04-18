import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedAdmin({ children }) {
  const loggedIn = true;

  if (loggedIn) {
    return <React.Fragment>{children}</React.Fragment>;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedAdmin;
