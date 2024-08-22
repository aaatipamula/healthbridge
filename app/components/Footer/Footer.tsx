'use client'

import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {

  const handleScrollClick = () => {
    window.scrollTo({
      top: 0, 
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className="flex flex-row justify-around content-center p-1 mt-5 w-full text-center bg-sky-900 text-gray-200">
      <div>
        Made by <a href="https://github.com/aaatipamula" className="text-sky-200 hover:text-sky-100">Aniketh A.</a>
      </div>
      <div>
        KU HealthBridge Initiative @ 2024
      </div>
      <div className="hidden lg:block cursor-pointer text-sky-200 hover:text-sky-100" onClick={handleScrollClick}>
        Scroll to Top 
      </div>
      <Image
        width="64"
        height="64"
        src="/img/logo.png"
        alt="HealthBridge"
        className="fixed bottom-0 right-0 opacity-50"
      />
    </div>
  );
};

export default Footer;
