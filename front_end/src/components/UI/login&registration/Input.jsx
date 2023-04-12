import React from "react";

function Input({
  id,
  label,
  type,
  pHolder,
  padding,
  register,
  validation,
  error,
}) {
  return (
    <div
      className={`flex flex-col gap-y-2 mx-auto w-[100%] ${padding} md:px-0 md:w-[65%]`}
    >
      <label htmlFor={id} className=" text-green-900 text-lg">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={pHolder}
        className={` h-12  bg-[#F4F2F2] p-3 rounded-md outline-green-600 w-[100%] ${
          error ? "outline-red-500" : ""
        }`}
        {...register(id, validation)}
      />
      {error && <p className="text-red-500 text-sm">*{error.message}</p>}
    </div>
  );
}

export default Input;
