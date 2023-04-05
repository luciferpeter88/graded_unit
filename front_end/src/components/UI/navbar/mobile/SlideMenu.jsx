import React, { useContext } from "react";
import DesignedNav from "./NavMobile";
import navContext from "../../../../context_Reducer/nav/navContext";
function SlideMenu() {
  const data = useContext(navContext);

  return (
    <React.Fragment>
      <div className="min-h-screen  absolute top-0 lg:hidden">
        <div
          className={`wrapper fixed top-0 transition-all duration-500 ease-in-out h-screen w-screen bg-green-900 z-20 ${
            data.state.toggle ? "right-0" : "right-full"
          }`}
        >
          <ul className=" h-screen flex flex-col justify-center items-center gap-y-5">
            <DesignedNav to="/" whereTo="Home" />
            <DesignedNav to="/about" whereTo="About" />
            <DesignedNav to="/badges" whereTo="Badges" />
            <DesignedNav to="/gallery" whereTo="Gallery" />
            <DesignedNav to="/games" whereTo="Games" />
            <DesignedNav to="/contact" whereTo="Contact Us" />
            <DesignedNav to="/login" whereTo="Sign In" />
            <DesignedNav to="/register" whereTo="Register" />
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SlideMenu;
