import React from "react";
import { Noto_Sans } from "next/font/google";

interface HeroProps {
  title: string,
  subtitle: string
}

const notoSans = Noto_Sans({
  weight: ['400', '700'],
  subsets: ['latin']  
});

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <div id="hero" className="w-full h-screen flex flex-col justify-center content-center space-y-3 bg-gradient-to-b from-sky-800 via-cyan-400 to-transparent">
      <h1 className={notoSans.className + ' font-bold text-3xl lg:text-5xl text-sky-900 mb-3 text-center'}>{title}</h1>
      <h3 className={notoSans.className + ' lg:text-xl text-neutral-600 text-center'}>{subtitle}</h3>
    </div>
  );
};

export default Hero;
