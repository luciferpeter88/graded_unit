import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

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
      <footer class="footer bg-green-900 relative pt-1  mt-16">
        <div class=" mx-auto px-5 lg:px-0 lg:container">
          <div class="sm:flex sm:mt-8">
            <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
              <div class="flex flex-col">
                <span class="text-2xl text-white font-bold uppercase mb-2">
                  Oban Scouts
                </span>
                <span class="my-2">
                  <p className=" max-w-xs text-lg text-white ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tortor facilisi quis risus egestas ipsum.
                  </p>
                </span>
              </div>
              <div class="flex flex-col">
                <span class="text-2xl text-white font-bold uppercase mt-4 md:mt-0 mb-2">
                  Links
                </span>
                <span class="my-2 flex flex-col gap-y-2 text-lg text-white">
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/badges">Badges</Link>
                  <Link to="/gallery">Gallery</Link>
                  <Link to="/games">Games</Link>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </span>
              </div>
              <div class="flex flex-col">
                <span class="text-2xl text-white font-bold uppercase mt-4 md:mt-0 mb-2">
                  Follow Us
                </span>
                <span class="my-2 flex gap-3">
                  <Social icon={<FaFacebookF />} />
                  <Social icon={<FaTwitter />} />
                  <Social icon={<FaInstagram />} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="container mx-auto px-6">
          <div class="mt-8 border-t-[1px] border-white flex flex-col items-center">
            <div class="sm:w-2/3 text-center py-6">
              <p class="text-lg text-white font-bold mb-2">
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
