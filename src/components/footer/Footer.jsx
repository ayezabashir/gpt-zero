import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="relative bottom-0 my-10 container">
      <ul className="text-txt-black flex justify-evenly items-center flex-wrap">
        <li>© 2023-2024 GPTZero |</li>
        <li className="underline">Contact Us |</li>
        <li className="underline">Support |</li>
        <li className="underline">News |</li>
        <li className="underline">Affiliates |</li>
        <li className="underline">Cookie Policy |</li>
        <li className="underline">Privacy Policy |</li>
        <li className="underline">Terms of Use |</li>
        <li>Powered by AWS </li>
      </ul>
      <div className="text-txt-black mt-5 flex justify-center gap-2 items-center">
        Follow us on :
        <div className="flex gap-3 items-center">
          <IoLogoTwitter className="text-2xl transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer" />
          <FaFacebook className="text-xl transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer" />
          <IoLogoLinkedin className="text-2xl transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
