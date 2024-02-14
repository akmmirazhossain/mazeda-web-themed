import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSpinner } from "@fortawesome/free-solid-svg-icons";

const initialData = [
  {
    region: "Dhaka",
    area: "Dhanmondi (Headquarters)",
    address:
      "+8809613-334455, 01788808881-2 info@mazedanetworks.com Zaman Rose Garden, House # 123, Flat # 4B, Road # 13/A, West Dhanmondi.",
  },

  {
    region: "Dhaka",
    area: "Uttara ",
    address:
      "Manager :  Liton Talukder 01712-465019, +8809613-334466 info@mazedanetworks.com House # 27, Flat # 202, Road # 19, Sector # 13, Uttara, Dhaka.",
  },
  {
    region: "Dhaka",
    area: "Banani ",
    address:
      "Manager :  Md Imran Mumit 01792-395752, +8809613-334477 info@mazedanetworks.com House # 54,5th floor,Kemal attaturk avenue,Dhaka-1213.  bKash: 01883002052",
  },
  {
    region: "Dhaka",
    area: "Bashundhara",
    address:
      "Manager :  Raju Ahmed 01737-338946 info@mazedanetworks.com Ka/7, Jagannathpur,Bashundara Avenue,Dhaka. bKash: 01883002057",
  },
  {
    region: "Dhaka",
    area: "Sher-e-Bangla Nagor",
    address:
      "Manager :  Md Monirul Hasan Sagar 01716-294848 info@mazedanetworks.com House # 57/11, East East Raja Bazar, Sher-e-Bangla Nagor, Dhaka.",
  },
  {
    region: "Dhaka",
    area: "Mohammadpur ",
    address:
      "Manager :  Md Hasanuzzaman 01719-322738 info@mazedanetworks.com Krisi Market Shoping Complex, 3rd Floor, Mohammadpur, Dhaka.",
  },
  {
    region: "Dhaka",
    area: "Kallyanpur",
    address:
      "Manager :  Ahasanul Haque khan   01620-139855   info@mazedanetworks.com   1, Kallanpur, Main Road, Mirpur, Dhaka. bKash : 01883002058",
  },
  {
    region: "Dhaka",
    area: "Kamrangirchor",
    address:
      "Manager :  Ripon Hossain 01670-842554 info@mazedanetworks.com FM Tower, Ground Floor, Shop # 1-2, Kamrangichor, Dhaka.",
  },
  {
    region: "Dhaka",
    area: "Ati Bazar",
    address:
      "Manager :  Suraj Khan 01977-740006 info@mazedanetworks.com H-15, Ground Floor, Atibazar, Keraniganj, Dhaka.",
  },
  {
    region: "Dhaka",
    area: "Rayer Bazar",
    address:
      "Manager : Tanver Ahmed Ashiq 01688-847491 info@mazedanetworks.com 274/3, Sultangonj, 4th floor, Rayerbazar, Dhaka.",
  },
  {
    region: "Dhaka",
    area: "Khilkhet",
    address:
      "Manager : Shiduzzaman Khan Didar 01920-822233 info@mazedanetworks.com H-46,Road-11,Nilkhet-2, Khilkhet,Dhaka.",
  },
  {
    region: "Dhaka",
    area: "Zigatola",
    address:
      "Manager :  Md Rashedul Hasan Rony 01742-999400 info@mazedanetworks.com House – 44/A, Road – Zigatola, Dhaka.",
  },
  {
    region: "Dhaka",
    area: "Bosila",
    address:
      "Manager :  Shohel Hossen 01921-204130 info@mazedanetworks.com  House – 124/11, Road – Bosila, Mohammadpur, Dhaka.",
  },
  {
    region: "Dhaka",
    area: "Green Road",
    address:
      "Manager :  Rakib Uddin 01719-389830 info@mazedanetworks.com House – 35, Road – Green Road, Dhaka.",
  },
  {
    region: "Dhaka",
    area: "North Balur-Chor",
    address:
      "Manager :  Shipu Mondol 01852-036149 info@mazedanetworks.com Uttor Balurchor, Shamlapur, Keraniganj Model, Dhaka.",
  },
  {
    region: "Dhaka",
    area: "Kolatia",
    address:
      "Manager :  Tanver Hasan 01672-595901 info@mazedanetworks.com Fatenagar, Kolatia, Keraniganj, Dhaka.",
  },
  {
    region: "Dhaka",
    area: "Chakbazar",
    address:
      "Manager :  Zulfiqar Hossain 01707-771289 info@mazedanetworks.com House # 7, Road # komoldaha Road, Chakbazar, Dhaka.",
  },

  {
    region: "Dhaka",
    area: "Elephant Road",
    address:
      "Manager :  FM Sharifuddin 01883-002046 info@mazedanetworks.com House # 100, Road # New Elephant Road, Flat # 4, Dhaka.",
  },
  {
    region: "Tangail",
    area: "Tangail Main City",
    address: "Some info here",
  },
];

const CoverageBlocks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select a region");
  const [filteredData, setFilteredData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setLoading(true); // Show loading spinner

    setTimeout(() => {
      let filtered;
      if (option === "All over Bangladesh") {
        // Show all data if "All over Bangladesh" is selected
        filtered = initialData;
      } else {
        // Filter data based on the selected region
        filtered = initialData.filter((item) => item.region === option);
      }
      setFilteredData(filtered);
      setLoading(false); // Hide loading spinner
    }, 500); // Wait for 0.5 seconds before updating data
  };
  return (
    <section className="section_akm">
      <div className="text-center pb-4">
        <h1 className="heading_akm">Our coverage</h1>
        <p className="subheading_akm ">
          Our network grows daily, so stay tuned for updates here.
        </p>
      </div>

      <div className=" box_round_shadow mb_akm ">
        <div className="relative w-full md:w-1/3">
          <div
            className="flex items-center  pr-3 cursor-pointer border"
            onClick={toggleDropdown}
          >
            <input
              id="region"
              type="text"
              readOnly
              value={selectedOption}
              className="block  px-4 py-2 w-full rounded cursor-pointer focus:outline-none "
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
      </div>
      {loading ? (
        // Show loading spinner if loading is true
        <div className="body_text_akm text-center ">
          Loading <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center gap-4 sm:gap-5 md:gap-6">
          {filteredData.map((item, index) => (
            <div key={index} className="box_round_shadow">
              <h2 className="title-font text-2xl font-medium mb-4">
                {item.area}
              </h2>
              <p>{item.address}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CoverageBlocks;
