import { profile } from "console";
import { Fullscreen } from "lucide-react";
import React from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import Image from "next/image";
import team1 from  "@/public/images/team1.png"
import team2 from "@/public/images/team2.jpg"
import team3 from "@/public/images/team3.png"



const TeamSection = () => {
  const teamMembers = [
    {
      name: "Username",
      profession: "profession",
      Image:team1 , 
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      name: "Username",
      profession: "profession",
      Image:team2, 
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      name: "Username" ,
      profession: "profession",
      Image: team3,
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-gray-500">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden text-center"
            >
              <Image
                src={member.Image}
                alt={member.name}
                width={316}
                height={231}
                className="object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-500">{member.profession}</p>
                <div className="flex justify-center mt-4 space-x-4 text-gray-500">
                  <a href={member.social.facebook} aria-label="Facebook">
                    <i className="fab fa-facebook"><IoLogoFacebook className="text-blue-500"/>
                    </i>
                  </a>
                  <a href={member.social.instagram} aria-label="Instagram">
                    <i className="fab fa-instagram"><CiInstagram className="text-blue-600" />
                    </i>
                  </a>
                  <a href={member.social.twitter} aria-label="Twitter">
                    <i className="fab fa-twitter"><FaTwitter className="text-blue-500" />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
