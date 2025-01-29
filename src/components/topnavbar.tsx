import { CiPhone } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiInstagram } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="w-full h-auto bg-gray-900 text-white flex flex-wrap items-center justify-center md:justify-between p-2 sm:p-4">
      {/* Left Section: Contact Info */}
      <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
        <div className="flex items-center gap-2">
          <span className="text-blue-400">
            <CiPhone className="w-4 h-4 sm:w-5 sm:h-5" />
          </span>
          <h6 className="text-xs sm:text-sm font-bold">(225) 555-0118</h6>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-white">
            <MdOutlineMailOutline className="w-4 h-4 sm:w-5 sm:h-5" />
          </span>
          <h6 className="text-xs sm:text-sm font-bold">
            michelle.rivera@example.com
          </h6>
        </div>
      </div>

      {/* Center Section: Promotional Text */}
      <div className="hidden md:flex text-center">
        <h6 className="text-xs sm:text-sm font-bold">
          Follow Us and get a chance to win 80% off
        </h6>
      </div>

      {/* Right Section: Social Media */}
      <div className=" hidden  items-center gap-4 w-full md:w-auto justify-center md:justify-end ">
        <h6 className="text-xs sm:text-sm font-bold">Follow Us:</h6>
        <a href="#" aria-label="Instagram" className="text-white">
          <CiInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
        <a href="#" aria-label="YouTube" className="text-white">
          <FaYoutube className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
        <a href="#" aria-label="Facebook" className="text-white">
          <FaFacebook className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
        <a href="#" aria-label="Twitter" className="text-white">
          <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
