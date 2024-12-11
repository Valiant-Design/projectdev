import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm border-b border-gray-400">
        <div className="flex items-center justify-between text-lg py-4 px-4 sm:px-[8%]">
          <img
            onClick={() => navigate("/")}
            className="w-40 cursor-pointer"
            src={assets.logo}
            alt="Company Logo"
          />
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-5 text-sm">
            <NavLink to="/">
              <li className="py-1 hover:text-[#17a2b8] transition">HOME</li>
            </NavLink>
            <NavLink to="/allwork">
              <li className="py-1 hover:text-[#17a2b8] transition">ALL WORK</li>
            </NavLink>
            <NavLink to="/about">
              <li className="py-1 hover:text-[#17a2b8] transition">ABOUT</li>
            </NavLink>
            <NavLink to="/contact">
              <li className="py-1 hover:text-[#17a2b8] transition">CONTACT</li>
            </NavLink>
          </ul>
          {/* Styled Button (Hidden on smaller screens) */}
          <div className="hidden md:block">
            <StyledWrapper>
              <button
                onClick={() => {
                  navigate("/login");
                }}
              >
                <span>Create Account</span>
              </button>
            </StyledWrapper>
          </div>
          {/* Hamburger Menu Icon */}
          <img
            onClick={() => setShowMenu(true)}
            className="w-6 md:hidden"
            src={assets.menu_icon}
            alt="Menu Icon"
          />
        </div>
        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-full h-full bg-white z-40 transform ${
            showMenu ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 md:hidden`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="Logo" />
            <img
              className="w-7 cursor-pointer"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt="Close Menu"
            />
          </div>
          <ul className="flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block">Home</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/allwork">
              <p className="px-4 py-2 rounded inline-block">All Workers</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="px-4 py-2 rounded inline-block">About</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="px-4 py-2 rounded inline-block">Contact</p>
            </NavLink>
            {/* Styled Button (Visible in mobile menu) */}
            <StyledWrapper>
              <button
                onClick={() => {
                  setShowMenu(false);
                  navigate("/login");
                }}
              >
                <span>Create Account</span>
              </button>
            </StyledWrapper>
          </ul>
        </div>
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  button {
    outline: none;
    cursor: pointer;
    border: none;
    padding: 0.9rem 2rem;
    margin: 0;
    font-family: inherit;
    font-size: 17px;
    position: relative;
    display: inline-block;
    letter-spacing: 0.05rem;
    font-weight: 700;
    border-radius: 500px;
    background: #17a2b8;
    color: white;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export default Navbar;
