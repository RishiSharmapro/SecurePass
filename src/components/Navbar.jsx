/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const isSM = window.innerWidth < 640;

  return (
    <div>
      {/* Header */}
      <nav className="bg-[#1a2235] text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link className="flex items-center" to={'/'}>
            <span className="text-white text-xl font-semibold">&lt;Secure</span>
            <span className="text-[#4CAF50] text-xl font-semibold">
              Pass/&gt;
            </span>
          </Link>
          <div className="flex space-x-3">
            {isAuthenticated ? (
                <button
                  onClick={() => logout()}
                  className="px-4 rounded border border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white transition-colors text-center"
                >
                  Log Out
                </button>
            ) : (
              <>
                <button
                  onClick={() => loginWithRedirect()}
                  className="px-4 rounded border border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white transition-colors text-center"
                >
                  Login
                </button>
              </>
            )}
            {/* <div className="github w-fit md:pr-40"> */}
            <Link
              to="https://github.com/RishiSharmapro/SecurePass"
              target="_blank"
            >
              <img src="/github.svg" alt="github" />
            </Link>
            {/* </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
