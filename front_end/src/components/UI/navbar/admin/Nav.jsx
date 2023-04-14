import React from "react";
import { NavLink } from "react-router-dom";
import { IonIcon } from "@ionic/react";

function Nav({ icon, title, whereTo }) {
  return (
    <li>
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
