'use client'

import React from "react";

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
        KU HealthBridge Club @ 2024
      </div>
      <div className="hidden lg:block cursor-pointer text-sky-200 hover:text-sky-100" onClick={handleScrollClick}>
        Scroll to Top 
      </div>
    </div>
  );
};

export default Footer;
