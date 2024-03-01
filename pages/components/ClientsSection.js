import Image from "next/image";

const logos = [
  "/images/logos/bengal-foundation.webp",
  "/images/logos/creative-it.webp",
  "/images/logos/oriental-group.webp",
  "/images/logos/freeland.webp",
  "/images/logos/inglot.webp",
];

const ClientsSection = () => {
  return (
    <section className="section_akm">
      <div className="heading_akm">Our Successful Clients</div>
      <div className="grid grid-cols-2  lg:grid-cols-5 gap_akm pad_akm box_round_shadow">
        {" "}
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center h-full ">
            <img src={logo} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
