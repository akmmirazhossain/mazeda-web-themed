import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faLightbulb,
  faCalendarDays,
  faGrip,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const PayBillSection = () => {
  return (
    <section className="section_akm">
      <div className="text-center pb-4">
        <h1 className="heading_akm">Seeking payment options?</h1>
      </div>

      <div className="box_round_shadow mb_akm grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2 mb-4 md:mb-0">
          We offer a comprehensive range of payment solutions, find your best
          suited option to make a safe online transection.
        </div>
        <div className="text-center lg:text-right">
          <button className=" items-center mt-auto text-center text-white bg-[#03738C] border-0 py-2 px-4 focus:outline-none hover:bg-red-700 rounded-full">
            <Link href="https://isperp.mazedanetworks.net/ispcare">
              {" "}
              Pay from online portal
            </Link>
          </button>
        </div>
      </div>

      <div className="box_round_shadow mb_akm">
        <div className="mb_akm">
          <p className="subheading_akm">Steps for Bkash app payment</p>
        </div>
        <div className="">
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div className="steps_circle_akm">
              <FontAwesomeIcon icon={faRightToBracket} />
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                STEP 1
              </h2>
              <p className="leading-relaxed">
                Sign in to your bKash account using your account PIN, then
                select the <span className="font-bold"> Pay Bill </span> option.
              </p>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div className="steps_circle_akm">
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                STEP 2
              </h2>
              <p className="leading-relaxed">
                In the &quot;Pay Bill&quot; section, find and tap on{" "}
                <span className="font-bold"> Mazeda Networks Ltd. </span> to
                proceed.
              </p>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div className="steps_circle_akm">
              <FontAwesomeIcon icon={faCalendarDays} />
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                STEP 3
              </h2>
              <p className="leading-relaxed">
                From the dropdown menu,{" "}
                <span className="font-bold"> choose the month </span>for which
                you wish to pay your bill and enter your
                <span className="font-bold"> customer ID</span>, then tap on{" "}
                <span className="font-bold"> Proceed to pay </span>.
              </p>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <div className="steps_circle_akm">
                <FontAwesomeIcon icon={faGrip} />
              </div>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                STEP 4
              </h2>
              <p className="leading-relaxed">
                Select your package and make the payment.
              </p>
            </div>
          </div>

          <div className="flex relative">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <div className="steps_circle_akm">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                FINISH
              </h2>
              <p className="leading-relaxed">
                Upon completion, a payment successful message will confirm that
                all steps were executed correctly.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="box_round_shadow mb_akm">
        <div className="mb_akm">
          <p className="subheading_akm">Steps for Nagad app payment</p>
        </div>
        <div className="">
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div className="steps_circle_akm">
              <FontAwesomeIcon icon={faRightToBracket} />
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                STEP 1
              </h2>
              <p className="leading-relaxed">
                Sign in to your Nagad account using your account PIN, then
                select the <span className="font-bold"> Pay Bill </span> option.
              </p>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div className="steps_circle_akm">
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                STEP 2
              </h2>
              <p className="leading-relaxed">
                In the &quot;Pay Bill&quot; section, find and tap on{" "}
                <span className="font-bold"> Mazeda Networks Ltd. </span> to
                proceed.
              </p>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div className="steps_circle_akm">
              <FontAwesomeIcon icon={faCalendarDays} />
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                STEP 3
              </h2>
              <p className="leading-relaxed">
                From the dropdown menu,{" "}
                <span className="font-bold"> choose the month </span>for which
                you wish to pay your bill and enter your
                <span className="font-bold"> customer ID</span>, then tap on{" "}
                <span className="font-bold"> Proceed to pay </span>.
              </p>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <div className="steps_circle_akm">
                <FontAwesomeIcon icon={faGrip} />
              </div>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                STEP 4
              </h2>
              <p className="leading-relaxed">
                Select your package and make the payment.
              </p>
            </div>
          </div>

          <div className="flex relative">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <div className="steps_circle_akm">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                FINISH
              </h2>
              <p className="leading-relaxed">
                Upon completion, a payment successful message will confirm that
                all steps were executed correctly.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="box_round_shadow mb_akm">
        <div className="mb_akm">
          <p className="subheading_akm">Other Payment Options</p>
          <p className="body_text_akm">
            Bill payment on Mazeda Networks is doable in all sorts of ways, but
            for the below payment portals, you need to call our office and
            confirm our billing team about it.{" "}
          </p>
        </div>
        <div className="">
          <Image
            src="/images/more-payment-options.png"
            width={1500}
            height={100}
            alt="Slider"
          />
        </div>
      </div>
    </section>
  );
};

export default PayBillSection;
