import React, { useContext } from "react";
import ModalInner from "./ModalInner";
import profileContext from "../../../../context_Reducer/profile/profileContext";
import ModalHeader from "./ModalHeader";

function Modal() {
  const { profileState, profileDispatch } = useContext(profileContext);
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
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => profileDispatch({ type: "CLOSE_MODAL" })}
                  >
                    Close
                  </button>
                  <button
                    className="bg-green-900 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => profileDispatch({ type: "CLOSE_MODAL" })}
                  >
                    Save Changes
                  </button>
                </div>
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
