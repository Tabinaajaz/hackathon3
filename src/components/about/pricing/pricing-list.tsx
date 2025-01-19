'use client'
import { useState } from "react";

export default function Pricinglist() {
  const [isYearly, setIsYearly] = useState(false);

  const toggleYearly = () => setIsYearly(!isYearly);

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Pricing</h2>
        <p className="text-gray-600 mt-4">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="flex justify-center items-center mb-8">
        <span className="text-gray-600">Monthly</span>
        <div
          onClick={toggleYearly}
          className="mx-4 flex items-center bg-gray-200 rounded-full p-1 cursor-pointer"
        >
          <div
            className={`bg-blue-600 w-8 h-8 rounded-full ${isYearly ? "translate-x-6" : "translate-x-0"}`}
          ></div>
        </div>
        <span className="text-gray-600">Yearly <span className="text-green-500">Save 25%</span></span>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {pricingData.map((plan, index) => (
          <div
            key={index}
            className={`flex flex-col items-center border   rounded-lg shadow-md p-6 w-80 transition-transform transform hover:scale-105 ${
              plan.isPopular ? "border-blue-600" : "border-gray-200"
            }`}
          >
             
            <h3 className="text-xl font-bold text-gray-800 ">{plan.name}</h3>
            <p className="text-gray-600 mt-2">{plan.description}</p>
            <p className="text-4xl font-bold mt-4 text-gray-800">
              {isYearly ? plan.priceYearly : plan.priceMonthly} <span className="text-lg">$</span>
            </p>
            <p className="text-gray-500 text-sm">Per Month</p>
            <ul className="mt-4 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-2">&#10003;</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`mt-6 px-6 py-2 rounded-full text-white font-medium ${
                plan.isPopular ? "bg-blue-600" : "bg-gray-800"
              } hover:opacity-90`}
            >
              Try for free
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const pricingData = [
  {
    name: "FREE",
    description: "Organize across all apps by hand",
    priceMonthly: 0,
    priceYearly: 0,
    features: ["Unlimited product updates", "1GB Cloud storage", "Email and community support"],
    isPopular: false,
  },
  {
    name: "STANDARD",
    description: "Organize across all apps by hand",
    priceMonthly: 9.99,
    priceYearly: 7.49,
    features: ["Unlimited product updates", "1GB Cloud storage", "Email and community support"],
    isPopular: true,
    
  },
  {
    name: "PREMIUM",
    description: "Organize across all apps by hand",
    priceMonthly: 19.99,
    priceYearly: 14.99,
    features: ["Unlimited product updates", "1GB Cloud storage", "Email and community support"],
    isPopular: false,
  },
];
