import { useState } from "react";
import { BiHomeSmile } from "react-icons/bi";
import { FaBook } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import toast from "react-hot-toast";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

type Props = {};

function Navbar({}: Props) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-5 py-2 bg-white">
        <div className="flex items-center gap-5">
          <IoMenu
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="block lg:hidden text-3xl cursor-pointer"
          ></IoMenu>
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
      {showMobileMenu && (
        <div
          onClick={() => setShowMobileMenu(false)}
          className="bg-[#00000051] flex absolute w-full h-[100vh] top-0 z-50"
        >
          <ul
            onClick={(e) => e.stopPropagation()}
            className="bg-white space-y-3 w-60 h-full px-2 py-5 overflow-auto"
          >
            <div className="flex items-center gap-2 justify-center">
              <p className="font-semibold text-xl">Admin panel</p>
            </div>
            <ul className="space-y-2 text-[#5d596c]">
              <li
                onClick={() => {
                  setShowMobileMenu(false);
                  navigate("/");
                }}
                className={`flex items-center gap-1 transition-colors cursor-pointer hover:bg-[#f4f4f5] ${
                  pathname === "/" && "bg-[#f4f4f5] font-medium"
                } p-2 rounded-md`}
              >
                <BiHomeSmile className="text-lg" /> Home
              </li>
              <li
                onClick={() => {
                  setShowMobileMenu(false);
                  navigate("/courses");
                }}
                className={`flex items-center gap-1 transition-colors cursor-pointer hover:bg-[#f4f4f5] ${
                  pathname === "/courses" && "bg-[#f4f4f5] font-medium"
                } p-2 rounded-md`}
              >
                <FaBook className="text-lg" /> Course
              </li>
              <li
                onClick={() => {
                  setShowMobileMenu(false);
                  navigate("/batches");
                }}
                className={`flex items-center gap-1 transition-colors cursor-pointer hover:bg-[#f4f4f5] ${
                  pathname === "/batches" && "bg-[#f4f4f5] font-medium"
                } p-2 rounded-md`}
              >
                <FaPeopleGroup className="text-lg" /> Batches
              </li>
              <li
                onClick={() => {
                  setShowMobileMenu(false);
                  navigate("/instructors");
                }}
                className={`flex items-center gap-1 transition-colors cursor-pointer hover:bg-[#f4f4f5] ${
                  pathname === "/instructors" && "bg-[#f4f4f5] font-medium"
                } p-2 rounded-md`}
              >
                <PiChalkboardTeacherFill className="text-lg" /> Instructors
              </li>
              <li
                onClick={() => {
                  setShowMobileMenu(false);
                  navigate("/schedule");
                }}
                className={`flex items-center gap-1 transition-colors cursor-pointer hover:bg-[#f4f4f5] ${
                  pathname === "/schedule" && "bg-[#f4f4f5] font-medium"
                } p-2 rounded-md`}
              >
                <SlCalender className="text-lg" /> Schedule
              </li>
            </ul>
            <button
              onClick={() => {
                toast.success("You have successfully logged out!");
                navigate("/");
              }}
              className="w-full bg-[#ff1700] text-white px-3 py-2 rounded-md text-[0.85rem] font-medium border-[0.5px] border-solid border-[#ff1700] transition-all duration-300 ease-in hover:bg-white hover:text-[#ff1700]"
            >
              Sign out
            </button>
          </ul>
          <IoMdClose
            onClick={() => setShowMobileMenu(false)}
            className="text-white text-3xl m-3 cursor-pointer"
          />
        </div>
      )}
    </>
  );
}

export default Navbar;
