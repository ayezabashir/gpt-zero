import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Solutions from "./Solutions";
import Resources from "./Resources";

const Header = () => {
    const [dropdown, setDropdown] = useState(true);
    const [dropdown2, setDropdown2] = useState(true);
    const handleDropdown = () => {
        setDropdown(!dropdown);
        setDropdown2(true);
    }
    const handleDropdown2 = () => {
        setDropdown2(!dropdown2);
        setDropdown(true);
    }

    return (
        <div className="header">
            <div className="nav-bar flex justify-between items-center py-3 px-8">
                <div className="nav-bar-items flex items-center justify-center img">
                    <div className="hover:scale-110 transition delay-150 hover:translate-y-1 duration-300 ease-in-out cursor-pointer flex items-center justify-between mr-8">
                        <img src="/logo.svg" alt="" />
                        <h1 className="text-txt-black text-2xl ml-2 font-bold">GPTZero</h1>
                    </div>
                    <ul className="navbar-items-item flex items-center justify-center space-x-1">
                        <li onClick={handleDropdown} className="item hover:scale-110 transition delay-150 hover:translate-y-0.25 duration-300 ease-in-out cursor-pointer  flex items-center px-4 py-3 rounded-md text-txt-black uppercase text-sm font-medium ">
                            solutions
                            {
                                dropdown ? <IoIosArrowUp className="ml-1" /> : <IoIosArrowDown className="ml-1" />
                            }
                        </li>
                        <li onClick={handleDropdown2} className="item hover:scale-110 transition delay-150 hover:translate-y-0.25 duration-300 ease-in-out cursor-pointer  flex items-center px-4 py-3 rounded-md text-txt-black uppercase text-sm font-medium">
                            resources
                            {
                                dropdown2 ? <IoIosArrowUp className="ml-1" /> : <IoIosArrowDown className="ml-1" />
                            }
                        </li>
                        <li className="item hover:scale-110 transition delay-150 hover:translate-y-0.25 duration-300 ease-in-out cursor-pointer  px-4 py-3 rounded-md text-txt-black uppercase text-sm font-medium">pricing</li>
                        <li className="item hover:scale-110 transition delay-150 hover:translate-y-0.25 duration-300 ease-in-out cursor-pointer  px-4 py-3 rounded-md text-txt-black uppercase text-sm font-medium">team</li>
                    </ul>
                </div>

                <div className="buttons flex items-center justify-center space-x-5">
                    <button className="px-4 py-3 text-txt-black uppercase text-sm font-medium hover:scale-110 transition delay-150 hover:translate-y-0.25 duration-300 ease-in-out cursor-pointer">log in</button>
                    <button className="px-4 py-3 rounded-md border border-txt-black hover:bg-btn-hover-black hover:transition-all hover:text-white uppercase font-light text-sm">Sales</button>
                    <button className="px-4 py-3 rounded-md bg-btn-black hover:bg-btn-hover-black text-white uppercase font-light">get started</button>
                </div>
            </div>
            {
                dropdown ? '' : <Solutions />
            }
            {
                dropdown2 ? '' : <Resources />
            }
        </div>
    )
}

export default Header
