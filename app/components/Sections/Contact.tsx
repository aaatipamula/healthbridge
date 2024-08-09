import React from "react"
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  weight: '700',
  subsets: ['latin']  
});

const Contact: React.FC = () => {
  return (
    <div id="about" className="lg:h-[50vh] w-full flex flex-col  content-center text-center">
      <hr className="border-t-2 border-neutral-400 my-4 w-3/4 m-auto" />
      <h2 className={notoSans.className + ' font-bold text-3xl text-sky-900 mb-3 text-center mt-10'}>Contact Us</h2>
    </div>
  );
};

export default Contact;
