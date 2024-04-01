import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div className=" z-[20] top-0 w-full h-[88px] bg-[#130749]  flex items-center justify-center flex-wrap ">
      <div className="flex w-full items-center justify-center  py-2 px-4  lg:max-w-[1200px] lg:items-center lg:justify-between">
        <p className="text-xl font-bold text-white lg:mr-[180px]">Logo</p>

        <ul className="hidden flex-col gap-2 items-center mt-9 lg:flex-row lg:text-left lg:gap-8 lg:flex ">
          <li className="font-bold text-md cursor-pointer group sm:text-xl">
            <Link
              to="home"
              smooth={true}
              offset={0}
              duration={1000}
              className="text-white transition-colors duration-300 group-hover:text-transparent group-hover:bg-gradient-to-tr from-[#2600FC] to-[#FF00EA] bg-clip-text"
            >
              Home
            </Link>
          </li>
          <li className="font-bold text-md cursor-pointer group sm:text-xl">
            <Link
              to="market"
              smooth={true}
              offset={-100}
              duration={1000}
              className="text-white transition-colors duration-300 group-hover:text-transparent group-hover:bg-gradient-to-tr from-[#2600FC] to-[#FF00EA] bg-clip-text"
            >
              Market
            </Link>
          </li>

          <li className="font-bold text-md cursor-pointer group sm:text-xl">
            <Link
              to="choose-us"
              smooth={true}
              offset={-30}
              duration={1000}
              className="text-white transition-colors duration-300 group-hover:text-transparent group-hover:bg-gradient-to-tr from-[#2600FC] to-[#FF00EA] bg-clip-text"
            >
              Choose Us
            </Link>
          </li>
          <li className="font-bold text-md cursor-pointer group sm:text-xl">
            <span className="font-space text-white transition-colors duration-300 group-hover:text-transparent group-hover:bg-gradient-to-tr from-[#2600FC] to-[#FF00EA] bg-clip-text">
              Join
            </span>
          </li>
        </ul>
        <div className="flex items-center ml-[180px]">
          <img
            src="C:\personel projects\PROJECTS\crypto-tracker\src\assets\discord.png"
            alt="img1"
          />
          <img
            src="C:\personel projects\PROJECTS\crypto-tracker\src\assets\discord.png"
            alt="img2"
          />
          <button onClick={toggle}>{isOpen ? <X className="text-[#FF00EA]"/> : <Menu className="text-[#FF00EA] lg:hidden "/>}</button>
        </div>
        {
          isOpen  && (
            <div className="h-full bg-white w-[80px]">
              <li className="font-bold text-md cursor-pointer group sm:text-xl">
            <Link
              to="choose-us"
              smooth={true}
              offset={-30}
              duration={1000}
              className="text-black transition-colors duration-300 group-hover:text-transparent group-hover:bg-gradient-to-tr from-[#2600FC] to-[#FF00EA] bg-clip-text"
            >
              Choose Us
            </Link>
          </li>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;
