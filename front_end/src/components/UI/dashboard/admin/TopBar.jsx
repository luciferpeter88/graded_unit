import React from "react";
import { IonIcon } from "@ionic/react";

function TopBar({ menu, search }) {
  return (
    <div className="topbar">
      <div className="toggle">
        <IonIcon icon={menu} />
      </div>

      <div className="search">
        <label>
          <input type="text" placeholder="Search here" />
          <IonIcon icon={search} />
        </label>
      </div>

      <div className="user">
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default TopBar;
