import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";

function CardB({ badge }) {
  const { title, picture } = badge;
  return (
    <React.Fragment>
      <div className=" h-[15rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  drop-shadow-lg  mt-10 flex  justify-around items-center transition-all ease-linear duration-150 hover:translate-y-[-0.75rem] hover:border-2 hover:border-green-400">
        <Icon badgeIcon={picture} />
        <div className="   flex flex-col justify-around h-full w-1/2">
          <h2 className=" text-green-900  body-font font-medium text-lg lg:text-xl">
            {title}
          </h2>
          <Link to={`/badges/${title}`}>
            <button className="  text-white bg-green-900 py-1 px-4 h-10 w-32 rounded font-medium ">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CardB;
