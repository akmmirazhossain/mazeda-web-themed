import Image from "next/image";

const ClientsSection = () => {
  return (
    <div className="my-20">
      <div className="pb-8 mb-4 text-center mx-auto">
        <h1 className="text-3xl  leading-none font-medium">
          Successful Partners
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 py-4">
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
    </div>
  );
};

export default ClientsSection;
