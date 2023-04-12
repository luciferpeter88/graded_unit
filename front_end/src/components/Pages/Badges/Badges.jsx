import React, { useContext } from "react";
import CardB from "../../UI/badges/CardB";
import Footer from "../../UI/footer/Footer";
import Search from "../../UI/shared/Search";
import badgesContext from "../../../context_Reducer/badges/badgeContext";
import Arrow from "../../UI/shared/Arrow";

function Badges() {
  const { badgesState } = useContext(badgesContext);
  const { badgesDispatch } = useContext(badgesContext);

  function handleChange(e) {
    badgesDispatch({ type: "BADGE_SEARCH", payload: e.target.value });
  }

  return (
    <React.Fragment>
      <h1 className="text-green-900  body-font font-bold text-2xl lg:text-4xl text-center mt-8">
        Badges
      </h1>
      <div className=" flex justify-center mt-5 ">
        <Search placeholder="badges" change={handleChange} />
      </div>
      <div className=" grid px-3 md:grid-cols-2 md:gap-x-5 lg:grid-cols-3 2xl:grid-cols-4 mt-5">
        {badgesState.filteredBadgeList
          .slice(
            badgesState.getIndexOfFirstItem(),
            badgesState.getIndexOfLastItem()
          )
          .map((badge) => {
            return <CardB badge={badge} key={badge.id} />;
          })}
      </div>
      <Arrow
        onclickNext={() => badgesDispatch({ type: "BADGE_NEXT" })}
        onclickPrev={() => badgesDispatch({ type: "BADGE_PREV" })}
        pageNumbers={`${badgesState.currentPage}/${badgesState.numberOfPages}`}
      />
      <Footer />
    </React.Fragment>
  );
}

export default Badges;
