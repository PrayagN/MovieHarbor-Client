// import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CgUser } from "react-icons/cg";
function Navbar() {
  const hover = "hover:text-subMain transition text-white";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);
  return (
    <>
      <div className="bg-main shadow-md sticky top-0 z-20">
        <div className="container  mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
          <div className="col-span-1 lg:block hidden">
            <Link to="/">
              <img
                src="/cinemalogo.jpg"
                alt="logo"
                className="w-full h-12 object-contain"
              />
            </Link>
          </div>
          <div className="col-span-3">
            <form className="w-full text-sm bg-white rounded flex-btn gap-4">
              <input
                type="text"
                placeholder="Search Movies Here..."
                className=" text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black font-medium placeholder:text-border"
                name=""
                id=""
              />
              <button
                type="submit"
                className="bg-red-500 w-12 flex-colo justify-end h-12 rounded text-white"
              >
                <FaSearch />
              </button>
            </form>
          </div>

          <div className="col-span-3 font-medium text-sm hidden xl:gap-10 2xl:gap-20 justify-between lg:flex xl:justify-center items-center">
            <NavLink to="/movies" className={Hover}>
              Movies
            </NavLink>
            <NavLink to="/login" className={Hover}>
              <CgUser className="w-8 h-8" />
            </NavLink>
            <NavLink to="/favorite" className={Hover}>
              <button
                type="button"
                className="relative inline-flex items-center p-3 text-sm font-medium text-center  text-white  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
                <span className="sr-only">Notifications</span>
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                  2
                </div>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
