import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="relative bottom-0 my-10 container">
      <div className="hover:scale-110 transition delay-150 hover:translate-y-1 duration-300 ease-in-out cursor-pointer flex items-center">
        <img className="w-5" src="/logo.svg" alt="logo" />
        <h2 className="text-txt-black text-base md:text-lg ml-2 hover:underline font-bold my-5">
          GPTZero
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        <ul className="text-txt-black">
          <li className="font-medium text-txt-black my-3 text-sm md:text-base">
            Products
          </li>
          <li className="hover:underline font-regular md:text-sm text-xs my-1">
            Origin
          </li>
          <li className="hover:underline font-regular md:text-sm text-xs my-1">
            Writing Report
          </li>
          <li className="hover:underline font-regular md:text-sm text-xs my-1">
            API
          </li>
          <li className="hover:underline font-regular md:text-sm text-xs my-1">
            Canvas Integration
          </li>
          <li className="hover:underline font-regular md:text-sm text-xs my-1">
            Microsoft Word Add-on
          </li>
          <li className="hover:underline font-regular md:text-sm text-xs my-1">
            Plagiarism Checker
          </li>
        </ul>
        <ul className="text-txt-black ">
          <li className="font-medium text-txt-black my-3 text-sm md:text-base">
            Resource
          </li>
          <li className="hover:underline font-regular md:text-sm text-xs my-1">
            Pricing
          </li>
          <li className="hover:underline font-regular md:text-sm text-xs my-1">
            Sales
          </li>
          <li className="hover:underline font-regular md:text-sm text-xs my-1">
            Technology
          </li>
          <li className="hover:underline font-regular md:text-sm text-xs my-1">
            Education
          </li>
          <li className="hover:underline font-regular md:text-sm text-xs my-1">
            Teachers Guide
          </li>
          <li className="hover:underline font-regular md:text-sm text-xs my-1">
            AI Guide for Seniors
          </li>
        </ul>
        <ul className="text-txt-black ">
          <li className="font-medium text-txt-black my-3 text-sm md:text-base">
            Company
          </li>
          <li className="hover:underline font-regular md:text-sm text-xs my-1">
            About us
          </li>
          <li className="hover:underline font-regular md:text-sm text-xs my-1">
            Team
          </li>
          <li className="hover:underline font-regular md:text-sm text-xs my-1">
            Affiliates
          </li>
          <li className="hover:underline font-regular md:text-sm text-xs my-1">
            Press
          </li>
          <li className="hover:underline font-regular md:text-sm text-xs my-1">
            Blog
          </li>
        </ul>
        <ul className="text-txt-black ">
          <li className="font-medium text-txt-black my-3 text-sm md:text-base">
            Help
          </li>
          <li className="hover:underline font-regular md:text-sm text-xs my-1">
            FAQ
          </li>
          <li className="hover:underline font-regular md:text-sm text-xs my-1">
            Help
          </li>
          <li className="hover:underline font-regular md:text-sm text-xs my-1">
            Privacy Policy
          </li>
          <li className="hover:underline font-regular md:text-sm text-xs my-1">
            Cookie Policy
          </li>
          <li className="hover:underline font-regular md:text-sm text-xs my-1">
            Terms of Use
          </li>
        </ul>
        <ul className="text-txt-black ">
          <li className="font-medium text-txt-black my-3 text-sm md:text-base">
            Contact
          </li>
          <li className="hover:underline font-regular md:text-sm text-xs my-1">
            team@gptzero.me
          </li>
        </ul>
        <ul className="text-txt-black col-span-full md:col-span-1">
          <li className="font-medium text-txt-black my-3 text-sm md:text-base">
            Stay up to date
          </li>
          <li>
            <input
              placeholder="Enter your email"
              type="email"
              name="email"
              className="px-3 py-4 w-full focus:border border-zinc-200 outline-none rounded-sm"
            />
            <button className="bg-[#3B3A3B] my-3 text-white w-[200px] py-4 font-light text-sm rounded-md">
              Subscribe
            </button>
          </li>
          <li className="flex gap-3 items-center">
            <IoLogoTwitter className="text-2xl transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer" />
            <FaFacebook className="text-xl transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer" />
            <IoLogoLinkedin className="text-2xl transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer" />
          </li>
          <li className=" font-regular md:text-sm text-xs my-1">
            © 2023 - 2024 GPTZero
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
