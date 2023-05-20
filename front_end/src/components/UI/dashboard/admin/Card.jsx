import React from "react";
import { IonIcon } from "@ionic/react";
import "../../../../styles/dashboard/dashboard.css";
import Modal from "../../shared/Modal";

function Card({
  icon,
  number,
  text,
  headers,
  data,
  options,
  click,
  opt,
  type,
}) {
  // usestate will be replaced to usereducer, headers and data sa well
  const [showModal, setShowModal] = React.useState(false);

  return (
    <React.Fragment>
      <div
        className="card shadow dark:bg-gray-800 dark:border-gray-700 drop-shadow-lg"
        onClick={() => setShowModal(true)}
      >
        <div>
          <div className="numbers">{number}</div>
          <div className="cardName">{text}</div>
        </div>

        <div className="iconBx">
          <IonIcon icon={icon} />
        </div>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        text={text}
        headers={headers}
        data={data}
        options={options}
        click={click}
        opt={opt}
        type={type}
      />
    </React.Fragment>
  );
}

export default Card;
