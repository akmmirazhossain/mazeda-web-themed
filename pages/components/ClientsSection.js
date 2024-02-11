import Image from "next/image";

const ClientsSection = () => {
  return (
    <section className="section_akm">
      <div className="heading_akm">Our Successful Partners</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap_akm pad_akm">
        {" "}
        {/* Adjust gap as needed */}
        <div className="flex items-center justify-center h-full">
          <Image
            src="/images/logos/dummy-logo.png"
            alt="Client 1 Logo"
            width={200}
            height={50}
          />
        </div>
        <div className="flex items-center justify-center h-full">
          <Image
            src="/images/logos/dummy-logo.png"
            alt="Client 1 Logo"
            width={200}
            height={50}
          />
        </div>
        <div className="flex items-center justify-center h-full">
          <Image
            src="/images/logos/dummy-logo.png"
            alt="Client 1 Logo"
            width={200}
            height={50}
          />
        </div>
        <div className="flex items-center justify-center h-full">
          <Image
            src="/images/logos/dummy-logo.png"
            alt="Client 1 Logo"
            width={200}
            height={50}
          />
        </div>
        <div className="flex items-center justify-center h-full">
          <Image
            src="/images/logos/dummy-logo.png"
            alt="Client 1 Logo"
            width={200}
            height={50}
          />
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
