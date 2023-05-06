import React, { useContext } from "react";
import ModalInner from "./ModalInner";
import profileContext from "../../../../context_Reducer/profile/profileContext";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";

function Modal() {
  const { profileState } = useContext(profileContext);
  return (
    <React.Fragment>
      {profileState.showModal ? (
        <React.Fragment>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[90vw] xl:w-[50vw] 2xl:w-[45vw] bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <ModalHeader />
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto xl:h-[50vh] h-[50vh] overflow-y-scroll">
                  <ModalInner />
                </div>
                {/*footer*/}
                <ModalFooter />
              </div>
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}

export default Modal;
