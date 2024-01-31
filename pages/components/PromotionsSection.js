// PromotionsSection.js
import Image from "next/image";

function PromotionsSection() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center">
      <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
        <div className="lg:w-1/2">
          <div className="h-64 bg-cover lg:h-full relative">
            <Image
              src="/images/plane.jpg" // Replace with your actual image path
              alt="Image Alt Text"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>

        <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Refer Mazeda and win plane tickets!
          </h2>

          <p className="mt-4 text-gray-500 dark:text-gray-300">
            Connect, refer, and explore the world! Our ISP rewards loyal
            customers with complimentary plane tickets for being top referrers.
            Spread the word, stay connected, and let your connections take you
            places!
          </p>

          <div className="inline-flex w-full mt-6 sm:w-auto">
            <a
              href="#"
              className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
            >
              Start Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromotionsSection;
