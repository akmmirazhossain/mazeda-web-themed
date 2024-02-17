import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseSignal,
  faBriefcase,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import theme from "../../config/theme";

const PayBillSection = () => {
  return (
    <div className=" py-10 mx-auto  lg:py-16">
      <div className="pb-8 mb-4 text-center mx-auto">
        <h1 className="text-3xl  leading-none font-medium">
          Seeking payment options?
        </h1>
      </div>

      <div className="grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2  md:grid-cols-3 ">
        <div className="flex flex-col justify-between p-5 rounded-2xl  shadow-xl bg-white">
          <div>
            <h6 className="mb-2 font-semibold text-xl leading-5">
              Bkash Payment Steps
            </h6>
            <div className="flex items-center justify-center w-32 h-32 mb-4 rounded-full">
              <Image
                src="/images/logos/bkash-logo.png"
                width={300}
                height={174}
                alt="Slider"
              />
            </div>

            <div>
              <p>
                1. Press <strong>*247#</strong>
              </p>
              <p>2. Select Payment Option</p>
              <p>3. Enter Merchant bKash Wallet No:</p>
              <ul>
                <li>Dhanmondi: 01883002030</li>
                <li>Banani: 01883002052</li>
                <li>Basundhara: 01883002057</li>
                <li>Kallyanpur: 01883002058</li>
              </ul>
              <p>4. Enter Amount: Like 1000</p>
              <p>5. Enter Reference No (Customer ID): 12345</p>
              <p>6. Enter Counter No: 1</p>
              <p>7. Enter Menu PIN to Confirm: 1234</p>
              <p>8. Payment successful</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between p-5 rounded-2xl  shadow-xl bg-white">
          <div>
            <h6 className="mb-2 font-semibold text-xl leading-5">
              Nagad Payment Steps
            </h6>
            <div className="flex items-center justify-center w-32 h-32 mb-4 rounded-full">
              <Image
                src="/images/logos/nagad-logo.png"
                width={300}
                height={174}
                alt="Slider"
              />
            </div>

            <div>
              <p>Steps for Nagad payment goes here...</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between p-5 rounded-2xl  shadow-xl bg-white">
          <div>
            <h6 className="mb-2 font-semibold text-xl leading-5">
              Visa/MasterCard Payment Steps
            </h6>
            <div className="flex items-center justify-center w-32 h-32 mb-4 rounded-full">
              <Image
                src="/images/logos/visa-logo.png"
                width={300}
                height={174}
                alt="Slider"
              />
            </div>

            <div>
              <p>1. You can pay using cards such as AMEX and DBBL Nexus</p>
              <p>
                2. Net banking options available for AB Bank, Islami Bank
                Bangladesh, City Bank, MTB, and Bank Asia.
              </p>
              <p>3. Reach our support team: +88 09613 334455</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayBillSection;
