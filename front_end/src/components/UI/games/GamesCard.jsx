import React from "react";
import { Link } from "react-router-dom";

function GamesCard({ title, description, image }) {
  return (
    <div className=" w-96 md:w-[22rem] h-[28.5rem] 2xl:w-96   bg-white border border-gray-200 rounded-t-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col   justify-between drop-shadow-lg pb-3 transition-all ease-linear duration-150 hover:translate-y-[-0.75rem] hover:border-2 hover:border-green-400">
      <div className=" w-full rounded-t-lg p-2">
        <img className="rounded-t-lg w-full" src={image} alt={title} />
      </div>
      <div className="p-3 flex flex-col gap-y-1">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <Link to={`/games/${title}`}>
          <div className="inline-flex items-center px-3 py-2 text-sm font text-center text-white   bg-green-900 h-10 w-32 rounded font-medium cursor-pointer">
            Play Now
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default GamesCard;
