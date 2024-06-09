import React from "react";
import { IoMenu } from "react-icons/io5";

type Props = {};

function Navbar({}: Props) {
  return (
    <nav className="flex items-center justify-between px-5 py-2 bg-white">
      <div className="flex items-center gap-5">
        <IoMenu className="hidden lg:block text-3xl cursor-pointer"></IoMenu>
        <div className="hidden sm:flex items-center gap-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5suAsawde5ndzAJDoYqYn0anDUFrisp46w&s"
            alt="logo"
            className="w-32"
          />
        </div>
      </div>
      <h2 className="text-sm lg:text-base">Admin panel</h2>
      <div className="flex gap-3 items-center">
        <button className="hidden sm:block bg-[#ff1700] text-white px-3 py-1 rounded-md text-[0.85rem] font-medium border-[0.5px] border-solid border-[#ff1700] transition-all duration-300 ease-in hover:bg-white hover:text-[#ff1700]">
          Sign out
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
