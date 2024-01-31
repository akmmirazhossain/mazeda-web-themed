// components/Navbar.js
import Image from "next/image";
import { useState } from "react";
import "../../config/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className=" mx-auto border sticky top-0 z-10 bg-[#FFFFFF] bg-opacity-75">
      <div className="py-2 lg:py-4 mx-auto px-6 xl:px-0 max-w-7xl ">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <div className="pr-10">
              <Image
                src="/logo.png" // Path to your logo in the public directory
                alt="Logo" // Alt text for accessibility
                width={120} // Set the width of the image
                height={40} // Set the height of the image
              />
            </div>
            <ul className=" items-center hidden space-x-8 lg:flex text-base font-medium">
              <li>
                <Link href="">Home</Link>
              </li>
              <li>
                <Link href="">About</Link>
              </li>
              <li>
                <Link href="">Packages</Link>
              </li>
              <li>
                <Link href="">Coverage</Link>
              </li>
              <li>
                <Link href="">Entertainment</Link>
              </li>
              <li>
                <Link href="">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="flex ">
            <ul className=" items-center  space-x-2 hidden sm:flex">
              <li>
                <Link
                  className="justify-center px-4 py-2 font-sm bg-[#03738C] hover:bg-red-700 text-[#FFF]  rounded-full shadow-md "
                  href=""
                >
                  <FontAwesomeIcon
                    className="text-xs pr-1"
                    icon={faCreditCard}
                  />
                  Pay Bill
                </Link>
              </li>
              <li>
                <Link
                  className="justify-center px-4 py-2 font-sm bg-[#03738C] hover:bg-red-700 text-[#FFF]  rounded-full shadow-md "
                  href=""
                >
                  <FontAwesomeIcon
                    className="text-xs pr-1"
                    icon={faPhoneVolume}
                  />
                  Support
                </Link>
              </li>
            </ul>

            <div className="lg:hidden">
              {/* Hamburger menu icon */}
              <button
                onClick={toggleMenu}
                className="p-2  hover:text-deep-purple-accent-400 focus:outline-none focus:text-deep-purple-accent-400"
              ></button>
            </div>
          </div>
        </div>
        {/* Responsive menu */}
        {menuOpen && (
          <div className="lg:hidden">
            <ul className="flex flex-col items-center mt-4 space-y-4">
              <li>
                <Link href="">Home</Link>
              </li>
              <li>
                <Link href="">About</Link>
              </li>
              <li>
                <Link href="">Packages</Link>
              </li>
              <li>
                <Link href="">Coverage</Link>
              </li>
              <li>
                <Link href="">Entertainment</Link>
              </li>
              <li>
                <Link href="">Contact</Link>
              </li>
            </ul>

            <ul className="flex sm:hidden justify-center my-4 space-x-2">
              <li>
                <Link
                  className="justify-center px-4 py-2 font-sm bg-[#03738C] hover:bg-red-700 text-[#FFF]  rounded-full shadow-md "
                  href=""
                >
                  <FontAwesomeIcon
                    className="text-xs pr-1"
                    icon={faCreditCard}
                  />
                  Pay Bill
                </Link>
              </li>
              <li>
                <Link
                  className="justify-center px-4 py-2 font-sm bg-[#03738C] hover:bg-red-700 text-[#FFF]  rounded-full shadow-md "
                  href=""
                >
                  <FontAwesomeIcon
                    className="text-xs pr-1"
                    icon={faPhoneVolume}
                  />
                  Support
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
