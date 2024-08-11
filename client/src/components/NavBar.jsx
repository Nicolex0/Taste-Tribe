import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Image from "../assets/logo.svg";
import Avatar from './Avatar'
export default function Navbar() {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Home", path: "/" },
    { title: "Recipes", path: "/recipes" },
    { title: "About Us", path: "/about" },
    { title: "Contact Us", path: "/contactUs" },
  ];

  return (
    <nav className="bg-green-800 w-full shadow-sm border-gray-200 border-b-6  md:border-0 md:static">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <div  className="flex items-center">
            <img src={Image} className="mr-3" alt="Taste Tribe" />
            <div className="self-center text-md capitalize font-semibold sm:text-2xl">
              <span className="text-yellow-600">Taste Tribe</span>
            </div>
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2  rounded-full focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <AiOutlineClose className="w-6 h-6 text-gray-950 dark:text-gray-50" />
              ) : (
                <FaBars className="h-6 w-6 text-gray-950 dark:text-gray-50" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-gray-50 text-lg font-semibold hover:underline"
                >
                  <button onClick={() => setState(!state)}>
                    <Link to={item.path}>{item.title}</Link>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:inline-block">
            <Avatar/>
          {/* <Link
            to="/signUp"
            className="py-3 px-4 text-gray-50 bg-yellow-600  rounded-full shadow-md"
          >
          </Link> */}
        </div>
      </div>
    </nav>
  );
}