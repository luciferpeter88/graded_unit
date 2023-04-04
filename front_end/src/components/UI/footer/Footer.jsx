import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Social({ icon }) {
  return (
    <div className=" h-10   w-10 bg-orange-900 rounded-full flex justify-center items-center text-lg text-white">
      {icon}
    </div>
  );
}

function Footer() {
  return (
    <React.Fragment>
      <footer className="footer bg-[#2a4b37] relative pt-1  mt-16">
        <div className=" mx-auto px-5 lg:px-0 lg:container">
          <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
              <div className="flex flex-col">
                <span className="text-2xl text-white font-bold uppercase mb-2">
                  Oban Scouts
                </span>
                <span className="my-2">
                  <p className=" max-w-xs text-lg text-white ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tortor facilisi quis risus egestas ipsum.
                  </p>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl text-white font-bold uppercase mt-4 md:mt-0 mb-2">
                  Links
                </span>
                <span className="my-2 flex flex-col gap-y-2 text-lg text-white">
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/badges">Badges</Link>
                  <Link to="/gallery">Gallery</Link>
                  <Link to="/games">Games</Link>
                  <Link to="/contact">Contact Us</Link>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl text-white font-bold uppercase mt-4 md:mt-0 mb-2">
                  Follow Us
                </span>
                <span className="my-2 flex gap-3">
                  <Social icon={<FaFacebookF />} />
                  <Social icon={<FaTwitter />} />
                  <Social icon={<FaInstagram />} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="mt-8 border-t-[1px] border-white flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
              <p className="text-lg text-white font-bold mb-2">
                © 2023 by Peter Kaszap Nagy
              </p>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
export default Footer;
