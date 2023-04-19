import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedAdmin({ children }) {
  const loggedIn = true;
  // const licenseKey =
  //   "ORg4AjUWIQA/Gnt2VFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5Xd0BjX31ccnJRQWVf";

  if (loggedIn) {
    return <React.Fragment>{children}</React.Fragment>;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedAdmin;
