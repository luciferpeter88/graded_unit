import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IonIcon } from "@ionic/react";

function Nav({ icon, title, whereTo }) {
  const location = useLocation();

  // Check if the current location matches the 'whereTo' prop
  const isActive = location.pathname === whereTo;
  return (
    <li className={isActive ? "hovered" : null}>
      <NavLink to={whereTo}>
        <span className="icon">
          <IonIcon icon={icon} />
        </span>
        <span className="title">{title}</span>
      </NavLink>
    </li>
  );
}

export default Nav;
