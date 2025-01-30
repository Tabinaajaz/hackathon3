
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt as FaLocationDot } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { PiArrowBendRightDownThin } from "react-icons/pi";

const ContactSection = () => {
  return (
    <div className="bg-white py-12 px-6 my-8 md:px-12 lg:px-20 text-center">
      {/* Heading Section */}
      <div className="max-w-2xl mx-auto">
        <h6 className="text-sm font-bold text-gray-500 uppercase tracking-wide">
          Visit Our Office
        </h6>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-snug">
          We help small businesses with big ideas
        </h2>
      </div>

      {/* Contact Options */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Phone Section */}
        <div className="flex flex-col items-center text-center p-8 gap-4 border rounded-md shadow-sm">
          <div className="text-blue-500">
            <FaPhone className="w-10 h-10" />
          </div>
          <p className="text-gray-500">georgia.young@example.com</p>
          <p className="text-gray-500">georgia.young@ple.com</p>
          <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white">
            Submit Request
          </button>
        </div>

        {/* Location Section */}
        <div className="flex flex-col items-center text-center p-8 gap-4 bg-gray-900 text-white rounded-md shadow-sm">
          <div className="text-blue-400">
            <FaLocationDot className="w-10 h-10" />
          </div>
          <p>georgia.young@example.com</p>
          <p>georgia.young@ple.com</p>
          <button className="px-4 py-2 border border-blue-500 text-blue-500 bg-white rounded-full hover:bg-blue-500 hover:text-white">
            Submit Request
          </button>
        </div>

        {/* Email Section */}
        <div className="flex flex-col items-center text-center p-8 gap-4 border rounded-md shadow-sm">
          <div className="text-blue-500">
            <TfiEmail className="w-10 h-10" />
          </div>
          <p className="text-gray-500">georgia.young@example.com</p>
          <p className="text-gray-500">georgia.young@ple.com</p>
          <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white">
            Submit Request
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <section className="flex flex-col items-center mt-10 bg-white">
        <PiArrowBendRightDownThin className="text-blue-400 w-12 h-12 rotate-45 mb-4" />
        <div className="text-center">
          <h5 className="text-sm font-bold text-gray-900">WE Can not WAIT TO MEET YOU</h5>
          <h2 className="text-4xl font-bold text-gray-900 mt-4">Let s Talk</h2>
        </div>
        <div className="mt-6">
          <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600">
            Try it free now
          </button>
        </div>
      </section>
    </div>
  )
};

export default ContactSection;
