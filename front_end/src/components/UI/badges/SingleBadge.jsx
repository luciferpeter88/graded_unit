import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import badgesContext from "../../../context_Reducer/badges/badgeContext";
import BadgeDescription from "../../UI/badges/BadgeDescription";
import { Link } from "react-router-dom";
import PrintBadge from "./PrintBadge";

function SingleBadge() {
  const { badgeName } = useParams();
  const { badgesDispatch, badgesState } = useContext(badgesContext);

  useEffect(() => {
    badgesDispatch({ type: "BADGE_NAME", payload: badgeName });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [badgeName]);

  return (
    <div className=" bg-white min-h-screen w-full absolute top-0">
      <div className="bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700  drop-shadow-lg w-3/4 h-5/6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg flex">
        <div className=" h-full w-1/2 bg-gray-200 rounded-lg">
          <img
            src={badgesState.singleBadgePicture}
            alt={badgeName}
            className=" h-full w-full object-cover"
          />
        </div>
        <div className=" h-full w-1/2 p-5 flex flex-col justify-center gap-y-5">
          <BadgeDescription title="Name" desc={badgesState.name} />
          <BadgeDescription title="Aim" desc={badgesState.aim} />
          <BadgeDescription
            title="Description"
            desc={badgesState.description}
          />
          <div className=" flex gap-x-5 my-auto">
            <Link to="/badges">
              <button className=" text-white bg-green-900 py-1 px-4 h-10 w-32 rounded font-medium">
                Badges
              </button>
            </Link>
            <PrintBadge src={badgesState.singleBadgePicture} alt={badgeName} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBadge;
