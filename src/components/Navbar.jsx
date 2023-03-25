import React,{useState} from "react";
import { AiFillGithub } from "react-icons/ai";
import { RiMenu2Line } from "react-icons/ri";
import { Link, NavLink, Outlet } from "react-router-dom";
const Navbar = () => {
  const [showMenu,setShowMenu]=useState(false)
  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full bg-[#3d5a80]  overflow-hidden transition-all duration-300 ease-in z-50 ${
          showMenu ? "h-44" : "h-16"
        }`}
      >
        <nav className="w-[90%] mx-auto flex  justify-between py-3 items-center">
          <RiMenu2Line
            size={"1.5rem"}
            onClick={() => setShowMenu(!showMenu)}
            className={`cursor-pointer hover:scale-110 lg:hidden ${
              showMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl py-1 px-2 rounded-md  bg-white bg-opacity-30 hover:bg-opacity-100 hover:bg-white   cursor-pointer transition ease-in-out duration-150"
          >
            <AiFillGithub size={"2rem"} />
            Github Finder
          </Link>
          <div className="flex gap-4 text-lg absolute top-20 flex-col lg:static lg:flex-row ">
            <NavLink
              to="/"
              className={`hover:bg-base-100 hover:bg-opacity-40 cursor-pointer py-1 px-2   hover:tracking-wide w-[90%] mx-auto transition ease-linear duration-100 hover:scale-110 `}
              onClick={() => setShowMenu(false)}
            >
              HOME
            </NavLink>
            <NavLink
              to="about"
              className={`hover:bg-base-100 hover:bg-opacity-30 cursor-pointer py-1 px-2   w-[90%] hover:tracking-wide mx-auto transition ease-linear duration-100 hover:scale-110`}
              onClick={() => setShowMenu(false)}
            >
              ABOUT
            </NavLink>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
