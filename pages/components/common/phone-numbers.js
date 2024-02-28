import React from "react";
import Image from "next/image";

const PhoneNumbers = () => {
  return (
    <>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap_akm">
        <div className=" text-center border pad_akm rounded-2xl">
          <p className="font-bold body_text_akm">Inqueries</p>
          <Image
            src={`/images/chat.png`}
            width={256}
            height={256}
            className="p-4"
            alt=""
          />
          <p className="font-bold body_text_akm">09613 334455</p>
        </div>
        <div className=" text-center border pad_akm rounded-2xl">
          <p className="font-bold body_text_akm">Support</p>
          <Image
            src={`/images/customer-service.png`}
            width={256}
            height={256}
            className="p-4"
            alt=""
          />
          <p className="font-bold body_text_akm">09666 334455</p>
        </div>

        <div className=" text-center border pad_akm rounded-2xl">
          <p className="font-bold body_text_akm">New Connection</p>
          <Image
            src={`/images/lan.png`}
            width={256}
            height={256}
            className="p-4"
            alt=""
          />
          <p className="font-bold body_text_akm">09613 334455</p>
        </div>
      </div>
    </>
  );
};

export default PhoneNumbers;
