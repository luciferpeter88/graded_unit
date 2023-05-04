import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../../../context_Reducer/auth/authContext";

function ProtectedAdmin({ children }) {
  const data = useContext(useAuth);
  console.log(data);
  const loggedIn = true;

  if (loggedIn) {
    return <React.Fragment>{children}</React.Fragment>;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedAdmin;
