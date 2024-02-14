import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"; // Import the FontAwesome ChevronDown icon

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All over Bangladesh");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    // Do something with the selected option
    console.log("ZZZ SSS");
  };

  return (
    <div className="relative box_round_shadow">
      <div className="flex items-center">
        <input
          id="region"
          type="text"
          readOnly
          value={selectedOption}
          className="block w-full px-4 py-2 rounded cursor-pointer focus:outline-none"
          onClick={toggleDropdown}
        />
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`text-gray-400 ml-2 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className="absolute w-full mt-1 bg-white rounded-md shadow-lg z-10">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            onClick={() => handleOptionSelect("All over Bangladesh")}
          >
            All over Bangladesh
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            onClick={() => handleOptionSelect("Dhaka")}
          >
            Dhaka
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            onClick={() => handleOptionSelect("Tangail")}
          >
            Tangail
          </a>
        </div>
      )}
    </div>
  );
};

export default DropDown;
