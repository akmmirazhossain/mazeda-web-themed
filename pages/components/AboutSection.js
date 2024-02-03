// Navbar.js
import Link from "next/link";
import Image from "next/image";

function AboutSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pb-6 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className=" rounded-full inline-flex items-center justify-center  text-gray-400">
                <Image
                  src="/images/house.png"
                  width={100}
                  height={100}
                  alt="house"
                />
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <h1 className="text-3xl border-b pb-2">About Mazeda Networks</h1>
              <div className="text-gray-600 body-font">
                <div className="container mx-auto py-8">
                  <p className="text-lg leading-relaxed mb-8">
                    Mazeda Networks Limited stands as a leading internet service
                    provider, headquartered in Dhanmondi, Dhaka-1209,
                    Bangladesh, with branches strategically placed in and
                    outside Dhaka. Established in 2003, we bring over 15 years
                    of expertise to deliver high-speed internet services
                    tailored for both home and corporate users, meeting the
                    diverse needs of our customers.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    With a dedicated support team, we guarantee quick solutions
                    to any broadband internet-related issues within just 30
                    minutes. Currently, we proudly serve more than 8000+ home
                    users in various locations, including Uttara, Banani,
                    Bashundhara, Sher-E-Bangla Nagor, Mohammadpur, Kallayanpur,
                    Kamrangirchor, Atibazar, Rayer Bazar, Khilkhet, Zigatola,
                    Bosila, Green Road, North Balur-Chor, Kolatia, Chakbazar,
                    Elephent Road, and beyond.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    At Mazeda, we constantly strive to stay one step ahead in
                    this competitive field. We empower our users with the
                    freedom to access entertainment content and surf without
                    limitations. Our commitment to innovation is evident in our
                    pioneering efforts, such as the elimination of restrictive
                    industry practices like bandwidth caps and traffic shaping.
                    Additionally, we ensure best practices like best path
                    routing to guarantee that subscribers receive the fast
                    internet access they deserve. Our network is fully compiled
                    with IPv6 routing.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Our customer service helpdesk operates 24/7 with a personal
                    touch. No voice machines, no scripted responses—just
                    passionate human assistance. Reach out to us through phone,
                    chat, or email; our customer service teams are ready to
                    assist you 24/7/365.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
