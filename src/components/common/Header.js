import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header  h-36 w-full flex justify-around ">
      <div className="grid grid-cols-3 w-10/12 p-2 m-2 items-center">
        <div className="text-5xl p-2 flex flex-row justify-start">
          <Link to={"/"}>
            <h1 className="mx-2 font-mono font-bold">Bijou</h1>
          </Link>
        </div>
        <div className="relative flex w-full justify-center h-1/2 items-center ">
          <input
            type="text"
            className="absolute outline-none border border-slate-300 rounded-l-sm p-1 w-full"
            placeholder="Search"
          />
          <button className=" absolute right-0 mx-2 text-slate-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>

        <div className="p-2 flex flex-row justify-end text-center">
          <div className=" cursor-pointer p-2 mr-1">
            <Link to={"/Login"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>

              <h2>ACCOUNT</h2>
            </Link>
          </div>
          <div className=" cursor-pointer p-2 ml-1">
            <Link to={"/cart"}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <h2>CART</h2>
            </Link>
          </div>
        </div>

        <div className="col-span-3 ">
          <div>
            <ul className="flex w-auto text-lg font-semibold justify-center">
              <Link to={"/"}>
                <li className="hover:underline mx-4 cursor-pointer">Home</li>
              </Link>
              <Link to={"/AllProduct"}>
                <li className="hover:underline mx-4 cursor-pointer">
                  collection
                </li>
              </Link>
              <li className="hover:underline mx-4 cursor-pointer">About</li>
              <li className="hover:underline mx-4 cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
