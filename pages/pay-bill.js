import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseSignal,
  faBriefcase,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import theme from "../config/theme";

const PayBillPage = () => {
  return (
    <div className=" py-10 mx-auto  lg:py-16">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-xl font-bold leading-none tracking-tight text-gray-900 sm:text-2xl md:mx-auto">
          Our Services
        </h2>
      </div>

      <div className="grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2  md:grid-cols-3 ">
        <div className="flex flex-col justify-between p-5 rounded-2xl  shadow-xl bg-white">
          <div>
            <div
              className="flex items-center justify-center w-16 h-16 mb-4 rounded-full"
              style={{ backgroundColor: theme.colorPalette.secondaryRed }}
            >
              <FontAwesomeIcon
                className="text-2xl text-white"
                icon={faHouseSignal}
              />
            </div>
            <h6 className="mb-2 font-semibold text-2xl leading-5">
              Home Internet
            </h6>
            <p className="mb-3 text-sm">
              Elevate your home experience with high-speed internet at your
              fingertips.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between p-5  rounded-2xl shadow-xl bg-white">
          <div>
            <div
              className="flex items-center justify-center w-16 h-16 mb-4 rounded-full"
              style={{ backgroundColor: theme.colorPalette.secondaryRed }}
            >
              <FontAwesomeIcon
                className="text-2xl text-white"
                icon={faBriefcase}
              />
            </div>
            <h6 className="mb-2 font-semibold text-2xl leading-5">
              Corporate Internet
            </h6>
            <p className="mb-3 text-sm">
              Boost your business efficiency with our Corporate Internet: fast,
              secure, and reliable connectivity solutions.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between p-5  rounded-2xl shadow-xl bg-white">
          <div>
            <div
              className="flex items-center justify-center w-16 h-16 mb-4 rounded-full"
              style={{ backgroundColor: theme.colorPalette.secondaryRed }}
            >
              <FontAwesomeIcon className="text-2xl text-white" icon={faVideo} />
            </div>
            <h6 className="mb-2 font-semibold text-2xl leading-5">
              CCTV Solutions
            </h6>
            <p className="mb-3 text-sm">
              Securing peace of mind with our advanced CCTV solutions for
              comprehensive and reliable surveillance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayBillPage;
