import React from "react";
import { IonIcon } from "@ionic/react";
import "../../../../styles/dashboard/dashboard.css";

function Card({ icon, number, text }) {
  return (
    <div className="card shadow dark:bg-gray-800 dark:border-gray-700 drop-shadow-lg">
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
