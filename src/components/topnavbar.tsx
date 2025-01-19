import { CiPhone } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiInstagram } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="w-full h-auto bg-gray-900 text-white flex flex-wrap items-center justify-center md:justify-between p-4">
      {/* Left Section: Contact Info */}
      <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
        <div className="flex items-center gap-2">
          <span className="text-blue-400">
            <CiPhone />
          </span>
          <h6 className="text-sm font-bold">(225) 555-0118</h6>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-white">
            <MdOutlineMailOutline />
          </span>
          <h6 className="text-sm font-bold">michelle.rivera@example.com</h6>
        </div>
      </div>

      {/* Center Section: Promotional Text */}
      <div className="hidden md:flex text-center">
        <h6 className="text-sm font-bold">
          Follow Us and get a chance to win 80% off
        </h6>
      </div>

      {/* Right Section: Social Media */}
      <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-end">
        <h6 className="text-sm font-bold">Follow Us:</h6>
        <a href="#" className="text-white">
          <CiInstagram className="w-5 h-5" />
        </a>
        <a href="#" className="text-white">
          <FaYoutube className="w-5 h-5" />
        </a>
        <a href="#" className="text-white">
          <FaFacebook className="w-5 h-5" />
        </a>
        <a href="#" className="text-white">
          <FaTwitter className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
