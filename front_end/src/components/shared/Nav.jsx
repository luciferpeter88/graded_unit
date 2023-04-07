import React, { useContext } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Outlet } from "react-router-dom";
import DesignedNav from "../UI/navbar/desktop/Nav";
import SlideMenu from "../UI/navbar/mobile/SlideMenu";
import navContext from "../../context_Reducer/nav/navContext";
function Nav() {
  const data = useContext(navContext);

  return (
    <React.Fragment>
      <nav className=" flex items-center justify-between p-5 h-16">
        <h1 className=" text-xl  font-semibold md:text-2xl">Oban Scouts</h1>
        {data.navState.toggle ? (
          <AiOutlineClose
            className=" text-3xl md:text-4xl lg:hidden cursor-pointer z-30 text-white fixed right-3"
            onClick={() => data.navDispatch({ type: "TOGGLE" })}
          />
        ) : (
          <BiMenuAltRight
            className=" text-3xl md:text-4xl lg:hidden cursor-pointer z-30 text-green-900 fixed right-3"
            onClick={() => data.navDispatch({ type: "TOGGLE" })}
          />
        )}

        <div className=" hidden lg:flex space-x-10">
          <div>
            <DesignedNav to="/" whereTo="Home" />
            <DesignedNav to="/about" whereTo="About" />
            <DesignedNav to="/badges" whereTo="Badges" />
            <DesignedNav to="/gallery" whereTo="Gallery" />
            <DesignedNav to="/games" whereTo="Games" />
            <DesignedNav to="/contact" whereTo="Contact Us" />
          </div>
          <div>
            <DesignedNav to="/login" whereTo="Login" />
            <DesignedNav to="/register" whereTo="Register" />
          </div>
        </div>
      </nav>
      <SlideMenu />
      <Outlet />
    </React.Fragment>
  );
}

export default Nav;
