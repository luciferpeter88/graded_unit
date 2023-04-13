import React from "react";
import { IonIcon } from "@ionic/react";
import "../../../../styles/dashboard/dashboard.css";

function Card({ icon, number, text }) {
  return (
    <div className="card">
      <div>
        <div className="numbers">{number}</div>
        <div className="cardName">{text}</div>
      </div>

      <div className="iconBx">
        <IonIcon icon={icon} />
      </div>
    </div>
  );
}

export default Card;
