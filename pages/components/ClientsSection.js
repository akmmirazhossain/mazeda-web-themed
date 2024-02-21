import Image from "next/image";

const logos = [
  "/images/logos/bengal-foundation.png",
  "/images/logos/creative-it.png",
  "/images/logos/oriental-group.png",
  "/images/logos/freeland.png",
  "/images/logos/inglot.png",
];

const ClientsSection = () => {
  return (
    <section className="section_akm">
      <div className="heading_akm">Our Successful Clients</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap_akm pad_akm box_round_shadow">
        {" "}
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center h-full ">
            <Image
              src={logo}
              alt={`Client ${index + 1} Logo`}
              width={200}
              height={200}
              className="rounded-2xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
