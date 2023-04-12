import React from "react";

function Search({ placeholder, change }) {
  return (
    <div className=" w-2/3 lg:1/2 xl:w-1/3 relative">
      <input
        className=" h-12 bg-[#F4F2F2] p-3 rounded-md outline-green-600 w-full"
        type="text"
        id="search"
        placeholder={`Search ${placeholder}...`}
        onChange={change}
      />
    </div>
  );
}

export default Search;
