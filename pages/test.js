import React, { useState } from "react";

const RadioWave = () => {
  return (
    <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-4 max-w-7xl text-white h-full lg:h-600 relative">
      <div
        className="bg-cover bg-center h-600"
        style={{ backgroundImage: 'url("/images/slider/slide-bg.jpg")' }}
      >
        <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:p-4 max-w-7xl text-white h-full relative">
          <div className="grid grid-rows-8 h-full relative">
            <div className="wifi-symbol">
              <div className="wifi-circle first" />
              <div className="wifi-circle second" />
              <div className="wifi-circle third" />
              <div className="wifi-circle fourth"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioWave;
