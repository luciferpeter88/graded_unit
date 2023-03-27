import React from "react";
import { NavLink } from "react-router-dom";

// Define CSS classes for the active and inactive states of the NavLink
const active = "text-white bg-green-900 py-1 px-4 rounded font-medium text-3xl";
const in_active = "text-green-900 font-medium text-3xl";

function NavMobile({ to, whereTo }) {
  return (
    <NavLink
      // Set the className based on the isActive state
      className={({ isActive }) => (isActive ? active : in_active)}
      // Use the 'end' prop to match the exact route for the active state
      end
      // Set the destination route using the 'to' prop
      to={to}
    >
      {/* Display the text for the NavLink using the 'whereTo' prop */}
      {whereTo}
    </NavLink>
  );
}

export default NavMobile;
