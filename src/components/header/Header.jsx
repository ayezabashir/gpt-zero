import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import NavItems from "./NavItems";
import {
  solutions,
  products,
  resources,
  support,
} from "./../../assets/data/data";
import MenuItems from "./MenuItems";

const Header = () => {
  const [dropdown, setDropdown] = useState(true);
  const [dropdown2, setDropdown2] = useState(true);
  const [menu, setMenu] = useState(true);
  const handleDropdown = () => {
    setDropdown(!dropdown);
    setDropdown2(true);
  };
  const handleDropdown2 = () => {
    setDropdown2(!dropdown2);
    setDropdown(true);
  };

  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="header bg-transparent z-10 relative">
      <div className="nav-bar flex justify-between items-center py-3 px-8">
        <div className="nav-bar-items flex items-center justify-center img">
          <div className="hover:scale-110 transition delay-150 hover:translate-y-1 duration-300 ease-in-out cursor-pointer flex items-center justify-between mr-8">
            <img src="/logo.svg" alt="logo" />
            <h1 className="text-txt-black text-xl md:text-2xl ml-2 font-bold">
              GPTZero
            </h1>
          </div>
          <ul className="hidden lg:flex navbar-items-item items-center justify-center space-x-1">
            <li
              onClick={handleDropdown}
              className="item tracking-widest hover:scale-110 transition hover:bg-[#0000001a] delay-150 hover:translate-y-0.25 duration-300 ease-in-out cursor-pointer  flex items-center px-4 py-3 rounded-md text-txt-black uppercase text-sm font-medium "
            >
              solutions
              {dropdown ? (
                <IoIosArrowUp className="ml-1" />
              ) : (
                <IoIosArrowDown className="ml-1" />
              )}
            </li>
            <li
              onClick={handleDropdown2}
              className="item hover:scale-110 transition delay-150 hover:translate-y-0.25 duration-300 ease-in-out cursor-pointer  flex items-center px-4 py-3 rounded-md text-txt-black uppercase text-sm font-medium"
            >
              resources
              {dropdown2 ? (
                <IoIosArrowUp className="ml-1" />
              ) : (
                <IoIosArrowDown className="ml-1" />
              )}
            </li>
            <li className="item hover:scale-110 transition delay-150 hover:translate-y-0.25 duration-300 ease-in-out cursor-pointer  px-4 py-3 rounded-md text-txt-black uppercase text-sm font-medium">
              pricing
            </li>
            <li className="item hover:scale-110 transition delay-150 hover:translate-y-0.25 duration-300 ease-in-out cursor-pointer  px-4 py-3 rounded-md text-txt-black uppercase text-sm font-medium">
              team
            </li>
          </ul>
        </div>

        <div className="buttons flex items-center justify-center space-x-2 md:space-x-5">
          <button className="hidden md:block px-4 py-3 text-txt-black uppercase text-sm font-medium hover:scale-110 transition delay-150 hover:translate-y-0.25 duration-300 ease-in-out cursor-pointer">
            log in
          </button>
          <button className="hidden lg:block text-xs md:text-sm px-4 py-3 rounded-md border border-txt-black hover:bg-btn-hover-black hover:transition-all hover:text-white uppercase font-light">
            Sales
          </button>
          <button className="px-4 py-3 text-xs md:text-sm rounded-md bg-btn-black md:order-2 md:border-btn-black hover:bg-btn-hover-black hover:border-btn-hover-black text-white uppercase font-light">
            get started
          </button>
          <div className="lg:hidden cursor-pointer" onClick={showMenu}>
            <div
              className={`bg-txt-black w-6 h-1 ${
                menu ? "" : "rotate-45 -mb-1 transition duration-500 "
              }`}
            ></div>
            <div
              className={`bg-txt-black w-6 mt-1 mb-1 h-1 ${
                menu ? "block" : "hidden"
              }`}
            ></div>
            <div
              className={`bg-txt-black w-6 mb-1 h-1 ${
                menu ? "" : "-rotate-45 transition duration-500 "
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        {dropdown ? (
          ""
        ) : (
          <NavItems
            navItemOne="Solutions"
            itemsOne={solutions}
            navItemTwo="Products"
            itemsTwo={products}
          />
        )}
        {dropdown2 ? (
          ""
        ) : (
          <NavItems
            navItemOne="Resources"
            itemsOne={resources}
            navItemTwo="support"
            itemsTwo={support}
          />
        )}
      </div>
      {menu ? "" : <MenuItems />}
    </div>
  );
};

export default Header;
