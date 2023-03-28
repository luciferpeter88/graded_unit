import React from "react";
import pic from "../../../assets/images/Home/homeCardPic.png";

function Card() {
  return (
    <div class="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center py-3 drop-shadow-lg">
      <div>
        <img class="rounded-t-lg" src={pic} alt="" />
      </div>
      <div class="p-5">
        <div>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            The Title Of The Events
          </h5>
          <p>January 25, 2021</p>
        </div>
        <p class="mb-3 font-normal mt-3 text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc,
        </p>
        <div class="inline-flex items-center px-3 py-2 text-sm font text-center text-white   bg-green-900 h-10 w-32 rounded font-medium  pointer">
          Read more
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Card;
