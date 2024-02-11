import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    area: "Dhanmondi (Headquarters)",
    address:
      "+8809613-334455, 01788808881-2 info@mazedanetworks.com Zaman Rose Garden, House # 123, Flat # 4B, Road # 13/A, West Dhanmondi.",
  },

  {
    area: "Uttara ",
    address:
      "Manager :  Liton Talukder 01712-465019, +8809613-334466 info@mazedanetworks.com House # 27, Flat # 202, Road # 19, Sector # 13, Uttara, Dhaka.",
  },
  {
    area: "Banani ",
    address:
      "Manager :  Md Imran Mumit 01792-395752, +8809613-334477 info@mazedanetworks.com House # 54,5th floor,Kemal attaturk avenue,Dhaka-1213.  bKash: 01883002052",
  },
  {
    area: "Bashundhara",
    address:
      "Manager :  Raju Ahmed 01737-338946 info@mazedanetworks.com Ka/7, Jagannathpur,Bashundara Avenue,Dhaka. bKash: 01883002057",
  },
  {
    area: "Sher-e-Bangla Nagor",
    address:
      "Manager :  Md Monirul Hasan Sagar 01716-294848 info@mazedanetworks.com House # 57/11, East East Raja Bazar, Sher-e-Bangla Nagor, Dhaka.",
  },
  {
    area: "Mohammadpur ",
    address:
      "Manager :  Md Hasanuzzaman 01719-322738 info@mazedanetworks.com Krisi Market Shoping Complex, 3rd Floor, Mohammadpur, Dhaka.",
  },
  {
    area: "Kallyanpur",
    address:
      "Manager :  Ahasanul Haque khan   01620-139855   info@mazedanetworks.com   1, Kallanpur, Main Road, Mirpur, Dhaka. bKash : 01883002058",
  },
  {
    area: "Kamrangirchor",
    address:
      "Manager :  Ripon Hossain 01670-842554 info@mazedanetworks.com FM Tower, Ground Floor, Shop # 1-2, Kamrangichor, Dhaka.",
  },
  {
    area: "Ati Bazar",
    address:
      "Manager :  Suraj Khan 01977-740006 info@mazedanetworks.com H-15, Ground Floor, Atibazar, Keraniganj, Dhaka.",
  },
  {
    area: "Rayer Bazar",
    address:
      "Manager : Tanver Ahmed Ashiq 01688-847491 info@mazedanetworks.com 274/3, Sultangonj, 4th floor, Rayerbazar, Dhaka.",
  },
  {
    area: "Khilkhet",
    address:
      "Manager : Shiduzzaman Khan Didar 01920-822233 info@mazedanetworks.com H-46,Road-11,Nilkhet-2, Khilkhet,Dhaka.",
  },
  {
    area: "Zigatola",
    address:
      "Manager :  Md Rashedul Hasan Rony 01742-999400 info@mazedanetworks.com House – 44/A, Road – Zigatola, Dhaka.",
  },
  {
    area: "Bosila",
    address:
      "Manager :  Shohel Hossen 01921-204130 info@mazedanetworks.com  House – 124/11, Road – Bosila, Mohammadpur, Dhaka.",
  },
  {
    area: "Green Road",
    address:
      "Manager :  Rakib Uddin 01719-389830 info@mazedanetworks.com House – 35, Road – Green Road, Dhaka.",
  },
  {
    area: "North Balur-Chor",
    address:
      "Manager :  Shipu Mondol 01852-036149 info@mazedanetworks.com Uttor Balurchor, Shamlapur, Keraniganj Model, Dhaka.",
  },
  {
    area: "Kolatia",
    address:
      "Manager :  Tanver Hasan 01672-595901 info@mazedanetworks.com Fatenagar, Kolatia, Keraniganj, Dhaka.",
  },
  {
    area: "Chakbazar",
    address:
      "Manager :  Zulfiqar Hossain 01707-771289 info@mazedanetworks.com House # 7, Road # komoldaha Road, Chakbazar, Dhaka.",
  },

  {
    area: "Elephant Road",
    address:
      "Manager :  FM Sharifuddin 01883-002046 info@mazedanetworks.com House # 100, Road # New Elephant Road, Flat # 4, Dhaka.",
  },
];

const CoverageBlocks = () => {
  return (
    <section className="section_akm">
      <div className="text-center pb-4">
        <h1 className="heading_akm">Our coverage</h1>
        <p className="subheading_akm ">
          Our network grows daily, so stay tuned for updates right here.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center gap-4 sm:gap-5 md:gap-6">
        {data.map((item, index) => (
          <div key={index} className="box_round_shadow">
            <h2 className="title-font text-2xl font-medium mb-4">
              {item.area}
            </h2>
            <p>{item.address}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoverageBlocks;
