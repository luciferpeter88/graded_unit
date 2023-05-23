import React from "react";
import pic from "../../../assets/images/Home/homeCardPic.png";

function Card({ id, subject, description, location, startDate, set }) {
  return (
    <div
      key={id}
      className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center py-3 drop-shadow-lg transition-all ease-linear duration-150 hover:translate-y-[-0.75rem] hover:border-2 hover:border-green-400"
    >
      <div>
        <img className="rounded-t-lg" src={pic} alt="" />
      </div>
      <div className="p-5">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {subject} in {location}
          </h5>
          <p>{startDate?.substring(0, 10)}</p>
        </div>
        <p className="mb-3 font-normal mt-3 text-gray-700 dark:text-gray-400">
          {description.substring(0, 100)}
        </p>
        <div
          className="inline-flex items-center px-3 py-2 text-sm font text-center text-white   bg-green-900 h-10 w-32 rounded font-medium cursor-pointer    transition-all duration-150"
          onClick={() => set(id)}
        >
          Read more
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
      </div>
    </div>
  );
}

export default Card;
