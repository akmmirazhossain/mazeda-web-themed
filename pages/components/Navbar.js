// components/Navbar.js
import Image from "next/image";
import { useState } from "react";
import "../../config/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faCreditCard,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/packages", label: "Packages" },
  { href: "/coverage", label: "Coverage" },
  { href: "/pay-bill", label: "Pay Bill" },
  { href: "/contact", label: "Contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    // <nav className=" fixed mx-auto border w-full top-0 z-40 bg-[#FFFFFF] bg-opacity-90">
    //   <div className="py-2 lg:py-4 mx-auto px-6 lg:px-4 max-w-7xl ">
    //     <div className=" flex items-center justify-between">
    //       <div className="flex items-center">
    //         <div className="pr-10">
    //           <Link href="/">
    //             <img alt="" src="/logo.webp" />
    //           </Link>
    //         </div>
    //         <ul className=" items-center hidden space-x-8 lg:flex text-base font-medium">
    //           {items.map((item) => (
    //             <Link href={item.href} key={item.id}>
    //               <li>{item.label}</li>
    //             </Link>
    //           ))}
    //         </ul>
    //       </div>

    //       <div className="flex ">
    //         <ul className=" items-center  space-x-2 hidden sm:flex">
    //           <li>
    //             <Link
    //               href="https://isperp.mazedanetworks.net/ispcare"
    //               target="_blank"
    //               className="justify-center px-4 py-2 font-sm bg-[#03738C] hover:bg-red-700 text-[#FFF]  rounded-full shadow-md "
    //             >
    //               <FontAwesomeIcon
    //                 size="xs"
    //                 className=" pr-1"
    //                 icon={faCreditCard}
    //               />
    //               Quick Pay
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="/support"
    //               className="justify-center px-4 py-2 font-sm bg-[#03738C] hover:bg-red-700 text-[#FFF]  rounded-full shadow-md "
    //             >
    //               <FontAwesomeIcon
    //                 size="xs"
    //                 className=" pr-1"
    //                 icon={faPhoneVolume}
    //               />
    //               Support
    //             </Link>
    //           </li>
    //         </ul>

    //         <button
    //           onClick={toggleMenu}
    //           className="p-2  hover:text-deep-purple-accent-400 focus:outline-none focus:text-deep-purple-accent-400"
    //         >
    //           <div className="lg:hidden">
    //             <FontAwesomeIcon className="text-lg" icon={faBars} />
    //           </div>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   {menuOpen && (
    //     <div
    //       className="  overflow-auto w-full bg-[#FFFFFF] bg-opacity-90"
    //       style={{ transform: "translate3d(0, 0, 0)" }}
    //     >
    //       <ul className="flex flex-col items-center mt-4 space-y-4">
    //         <Link href="/">
    //           <li>Home</li>
    //         </Link>
    //         <Link href="/about">
    //           <li className="w-full">About</li>
    //         </Link>
    //         <li>
    //           <Link href="/packages">Packages</Link>
    //         </li>

    //         <li>
    //           <Link href="/coverage">Coverage</Link>
    //         </li>
    //         <li>
    //           <Link href="/pay-bill">Pay Bill</Link>
    //         </li>
    //         <li>
    //           <Link href="/contact">Contact</Link>
    //         </li>
    //       </ul>

    //       <ul className="flex sm:hidden justify-center my-4 space-x-2">
    //         <li>
    //           <Link
    //             className="justify-center px-4 py-2 font-sm bg-[#03738C] hover:bg-red-700 text-[#FFF]  rounded-full shadow-md "
    //             href="https://isperp.mazedanetworks.net/ispcare"
    //             target="_blank"
    //           >
    //             <FontAwesomeIcon className="text-xs pr-1" icon={faCreditCard} />
    //             Quick Pay
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             className="justify-center px-4 py-2 font-sm bg-[#03738C] hover:bg-red-700 text-[#FFF]  rounded-full shadow-md "
    //             href="/support"
    //           >
    //             <FontAwesomeIcon
    //               className="text-xs pr-1"
    //               icon={faPhoneVolume}
    //             />
    //             Support
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   )}
    // </nav>
    <header className="site-header home-one-header top-0 w-full z-[999] rt-sticky">
      <div className="main-header py-6">
        <div className="container">
          <div className=" flex items-center justify-between">
            <a
              href="index.html"
              className="brand-logo flex-none lg:mr-10 md:w-auto max-w-[120px] "
            >
              <img alt="" src="/logo.webp" />
            </a>
            <div className="flex items-center flex-1">
              <div className="flex-1 main-menu relative mr-[74px]">
                <ul className=" menu-active-classes">
                  {items.map((item) => (
                    <Link href={item.href} key={item.id}>
                      <li className="main-menu-link">{item.label}</li>
                    </Link>
                  ))}
                </ul>
              </div>
              <div className="flex-none flex space-x-2">
                <div className=" hidden lg:block">
                  <a href="#" className="btn btn-primary py-2 px-4">
                    Support
                  </a>
                </div>
                <div className=" hidden lg:block">
                  <a href="#" className="btn btn-primary py-2 px-4">
                    Support
                  </a>
                </div>
                <div className=" block   lg:hidden">
                  <button
                    type="button"
                    className=" text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-[#F8F8F8] flex flex-col items-center justify-center
                                  menu-click"
                  >
                    <iconify-icon icon="cil:hamburger-menu" rotate="180deg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
