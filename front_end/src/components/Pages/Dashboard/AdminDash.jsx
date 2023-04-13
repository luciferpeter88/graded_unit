import React from "react";
import Navigation from "../../UI/dashboard/admin/Navigation";
import Main from "../../UI/dashboard/admin/Main";

function AdminDash() {
  // absolute top-0 left-0 z-50, while I am working on the dashboard
  return (
    <div className=" min-h-screen absolute top-0 left-0 z-50 bg-white w-full">
      <Navigation />
      <Main />
    </div>
  );
}

export default AdminDash;
