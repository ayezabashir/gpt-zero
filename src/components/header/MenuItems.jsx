import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import NavItems from "./NavItems";
import { solutions, products, resources, support } from './../../assets/data/data'

const MenuItems = () => {
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
        <ul className="lg:hidden bg-white">
            <li className="text-blue border-b-2 border-slate-200 item cursor-pointer flex items-center px-4 py-3 uppercase text-lg font-regular hover:font-medium ">contact sales</li>
            <li onClick={handleDropdown} className="text-blue border-b-2 border-slate-200 item cursor-pointer flex items-center px-4 py-3 uppercase text-lg font-regular hover:font-medium ">
                solutions
                {
                    dropdown ? <IoIosArrowUp className="ml-1" /> : <IoIosArrowDown className="ml-1" />
                }
            </li>
            {
                dropdown ? '' : <NavItems navItemOne='Solutions' itemsOne={solutions} navItemTwo='Products' itemsTwo={products} />
            }
            <li onClick={handleDropdown2} className="text-blue border-b-2 border-slate-200 item cursor-pointer flex items-center px-4 py-3 uppercase text-lg font-regular hover:font-medium">
                resources
                {
                    dropdown2 ? <IoIosArrowUp className="ml-1" /> : <IoIosArrowDown className="ml-1" />
                }
            </li>
            {
                dropdown2 ? '' : <NavItems navItemOne='Resources' itemsOne={resources} navItemTwo='support' itemsTwo={support} />
            }
            <li className="text-blue border-b-2 border-slate-200 item cursor-pointer flex items-center px-4 py-3 uppercase text-lg font-regular hover:font-medium ">careers</li>
        </ul>
    )
}

export default MenuItems
