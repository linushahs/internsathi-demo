import React from "react";
import Image from "next/image";
import { FaUser, FaBars } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineUserAdd, AiOutlineUser } from "react-icons/ai";
import NavItem from "./navItem";

function Navbar() {
  return (
    <div className="xl:px-[60px] px-6 py-4 shadow flex justify-between items-center">
      {/* Left section of navbar ------------> */}
      <div className="flex">
        <Image src="/logo.png" alt="Logo" width="190" height="70" />

        {/* middle section of the navbar ----------------->  */}
        <ul className="hidden lg:flex gap-6 text-gray-500 text-sm pl-16 pt-1">
          <NavItem title="Intern Types" hasDropdown={true} />
          <NavItem title="Internship Sectors" hasDropdown={true} />
          <NavItem title="Job" hasDropdown={true} />
          <NavItem title="Package" hasDropdown={false} />
          <NavItem title="Report Issue" hasDropdown={false} />
        </ul>
      </div>
      {/* right section of navbar ------------------->  */}
      {/* large screen layout size -------------------> */}
      <div className="hidden lg:flex gap-4 text-sm text-gray-500">
        <a href="#" className="flex gap-1  ">
          Login <AiOutlineUserAdd className="text-xl" />
        </a>
        <a href="#" className="flex gap-1 ">
          Signup <AiOutlineUser className="text-xl" />
        </a>
      </div>
      {/* right section of navbar  -------------> 
    mobile layout size ------> */}
      <div className="flex items-center gap-4 lg:hidden">
        <FaUser className="text-md p-[6px] bg-gray-200 w-7 h-7 rounded-full" />
        <FaBars className="text-2xl" />
      </div>
    </div>
  );
}

export default Navbar;
