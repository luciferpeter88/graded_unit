import React from "react";

function Input({
  label,
  id,
  type,
  placeholder,
  defaultValue,
  inputType,
  readonly,
  name,
  change,
}) {
  const options = [{ value: "" }, { value: "active" }, { value: "pending" }];
  return (
    <div className="w-full md:w-1/2 mb-3 md:mb-0 px-2">
      <label
        className="block text-green-900 text-sm font-semibold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      {inputType === "select" ? (
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={id}
          defaultValue={defaultValue}
          onChange={change}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      ) : (
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={id}
          type={type}
          placeholder={placeholder}
          value={defaultValue || ""}
          readOnly={readonly}
          name={name}
          onChange={change}
        />
      )}
    </div>
  );
}

export default Input;
