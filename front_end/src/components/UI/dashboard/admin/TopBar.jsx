import React, { useContext } from "react";
import { IonIcon } from "@ionic/react";
import navContext from "../../../../context_Reducer/nav/navContext";
import test from "../../../../assets/images/test/test.jpg";

function TopBar({ menu, search }) {
  const { navDispatch } = useContext(navContext);
  return (
    <div className="topbar">
      <div
        className="toggle"
        onClick={() => navDispatch({ type: "HAMBURGER-DASH" })}
      >
        <IonIcon icon={menu} />
      </div>

      <div className="user">
        <img src={test} alt="" />
      </div>
    </div>
  );
}

export default TopBar;
