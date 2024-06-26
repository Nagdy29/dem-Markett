import React from "react";

const Navvbar = () => {
  return (
    <>
      <div>
        <div className="navbar bg-slate-900 text-white p-4 ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-2xl font-bold text-transparent uppercase bg-clip-text bg-gradient-to-t from-fuchsia-500 via-red-600 to-orange-400 ">
              <span>NFT</span>Market
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex justify-center items-center">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Market</a>
              </li>
              <li>
                <a>Exploer</a>
              </li>
              <li>
                <a>Exhibition</a>
              </li>
              <li>
                <a>Artisits & Collectors</a>
              </li>
              <button className="btn btn-active btn-primary">Primary</button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navvbar;
