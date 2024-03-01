import React from "react";
import Image from "next/image";

const PhoneNumbers = () => {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap_akm">
        <div className=" text-center border pad_akm rounded-2xl">
          <p className="font-bold body_text_akm">Inqueries</p>

          <img src="/images/chat.webp" className="p-4" />
          <p className="font-bold body_text_akm">09613 334455</p>
        </div>
        <div className=" text-center border pad_akm rounded-2xl">
          <p className="font-bold body_text_akm">Support</p>

          <img src="/images/customer-service.webp" className="p-4" />
          <p className="font-bold body_text_akm">09666 334455</p>
        </div>

        <div className=" text-center border pad_akm rounded-2xl">
          <p className="font-bold body_text_akm">New Connection</p>

          <img src="/images/lan.webp" className="p-4" />
          <p className="font-bold body_text_akm">09613 334455</p>
        </div>
      </div>
    </>
  );
};

export default PhoneNumbers;
