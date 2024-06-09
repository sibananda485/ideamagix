import { BiHomeSmile } from "react-icons/bi";
import { FaBook } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { Link, useLocation } from "react-router-dom";

type Props = {};

function Sidebar({}: Props) {
  const { pathname } = useLocation();
  return (
    <div className="hidden md:block col-span-2 px-3 py-3 bg-white h-[93vh]">
      <ul className="space-y-2 text-[#5d596c]">
        <Link
          to="/"
          className={`flex items-center gap-1 transition-colors cursor-pointer hover:bg-[#f4f4f5] ${
            pathname === "/" && "bg-[#f4f4f5] font-medium"
          } p-2 rounded-md`}
        >
          <BiHomeSmile className="text-lg" /> Home
        </Link>
        <Link
          to="/courses"
          className={`flex items-center gap-1 transition-colors cursor-pointer hover:bg-[#f4f4f5] ${
            pathname === "/courses" && "bg-[#f4f4f5] font-medium"
          } p-2 rounded-md`}
        >
          <FaBook className="text-lg" /> Course
        </Link>
        <Link
          to="/batches"
          className={`flex items-center gap-1 transition-colors cursor-pointer hover:bg-[#f4f4f5] ${
            pathname === "/batches" && "bg-[#f4f4f5] font-medium"
          } p-2 rounded-md`}
        >
          <FaPeopleGroup className="text-lg" /> Batches
        </Link>
        <Link
          to="/instructors"
          className={`flex items-center gap-1 transition-colors cursor-pointer hover:bg-[#f4f4f5] ${
            pathname === "/instructors" && "bg-[#f4f4f5] font-medium"
          } p-2 rounded-md`}
        >
          <PiChalkboardTeacherFill className="text-lg" /> Instructors
        </Link>
        <Link
          to="/schedule"
          className={`flex items-center gap-1 transition-colors cursor-pointer hover:bg-[#f4f4f5] ${
            pathname === "/schedule" && "bg-[#f4f4f5] font-medium"
          } p-2 rounded-md`}
        >
          <SlCalender className="text-lg" /> Schedule
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
