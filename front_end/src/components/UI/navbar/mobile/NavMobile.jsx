import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import navContext from "../../../../context_Reducer/nav/navContext";

// Define CSS classes for the active and inactive states of the NavLink
const active =
  "text-white opacity-95 bg-green-900 py-1 px-4 rounded font-medium text-3xl scale-125  transform-gpu transition-all duration-300 ease-in-out w-2/4 border-b-2	 border-white text-center";
const in_active =
  "text-white opacity-50 scale-95	  font-medium text-3xl blur-[1px]";

function NavMobile({ to, whereTo }) {
  const data = useContext(navContext);
  return (
    <NavLink
      // Set the className based on the isActive state
      className={({ isActive }) => (isActive ? active : in_active)}
      // Use the 'end' prop to match the exact route for the active state
      end
      // Set the destination route using the 'to' prop
      to={to}
      onClick={() => data.navDispatch({ type: "TOGGLE" })}
    >
      {/* Display the text for the NavLink using the 'whereTo' prop */}
      {whereTo}
    </NavLink>
  );
}

export default NavMobile;
