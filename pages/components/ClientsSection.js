import Image from "next/image";

const ClientsSection = () => {
  return (
    <div className="my-20">
      <div className="pb-8 mb-4 text-center mx-auto">
        <h1 className="text-3xl  leading-none font-medium">
          Successful Partners
        </h1>
      </div>
      <div className="flex gap-4 justify-between py-4">
        {" "}
        {/* Adjust gap as needed */}
        <Image
          src="/images/logos/dummy-logo.png"
          alt="Client 1 Logo"
          width={200}
          height={50}
        />
        <Image
          src="/images/logos/dummy-logo.png"
          alt="Client 1 Logo"
          width={200}
          height={50}
        />
        <Image
          src="/images/logos/dummy-logo.png"
          alt="Client 3 Logo"
          width={200}
          height={50}
        />
        <Image
          src="/images/logos/dummy-logo.png"
          alt="Client 4 Logo"
          width={200}
          height={50}
        />
        <Image
          src="/images/logos/dummy-logo.png"
          alt="Client 5 Logo"
          width={200}
          height={50}
        />
      </div>
    </div>
  );
};

export default ClientsSection;
