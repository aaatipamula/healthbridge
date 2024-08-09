import React from "react"
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  weight: '700',
  subsets: ['latin']  
});

const About: React.FC = () => {
  return (
    <div id="about" className="lg:h-[50vh] w-full flex flex-col  content-center text-center">
      <hr className="border-t-2 border-neutral-400 my-4 w-3/4 m-auto" />
      <h2 className={notoSans.className + ' font-bold text-3xl text-sky-900 mb-3 text-center mt-10'}>About Us</h2>
      <p className=' text-slate-500 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  );
};

export default About;
