import React, { useContext } from "react";
import context from "../../../services/Admin/adminContext";

function Modal({
  showModal,
  setShowModal,
  text,
  headers,
  data,
  options,
  click,
  opt,
  type,
}) {
  const { adminDispatchServices } = useContext(context);
  const handleSelectChange = (e, rowId) => {
    adminDispatchServices({
      type: type,
      payload: { [rowId]: e.target.value },
    });
  };

  return (
    <React.Fragment>
      {showModal ? (
        <React.Fragment>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[90vw] xl:w-[50vw] 2xl:w-[45vw] bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold text-green-900">
                    {text}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto xl:h-[50vh] h-[50vh] overflow-y-scroll">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        {headers?.map((header, index) => (
                          <th key={index} scope="col" className="px-6 py-3">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data?.map((row, index) => (
                        <tr
                          key={index}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {row.name}
                          </th>
                          <td className="px-6 py-4">{row.status}</td>
                          <td className="px-6 py-4">
                            {opt ? (
                              <select
                                className="text-gray-500 dark:text-gray-400"
                                onChange={(e) => handleSelectChange(e, row.id)}
                              >
                                {options?.map((option, index) => (
                                  <option key={index} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </select>
                            ) : null}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      adminDispatchServices({ type: "RESET" });
                    }}
                  >
                    Close
                  </button>
                  <button
                    className="bg-green-900 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      click();
                    }}
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
