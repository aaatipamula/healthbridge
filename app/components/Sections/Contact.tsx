import React from "react"
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  weight: '700',
  subsets: ['latin']  
});

const Contact: React.FC = () => {
  return (
    <div id="contact" className="lg:h-[50vh] w-3/4 m-auto flex flex-col content-center text-center">
      <hr className="border-t-2 border-neutral-400 my-4" />
      <h2 className={notoSans.className + ' font-bold text-3xl text-sky-900 mb-3 text-center mt-10'}>Contact Us</h2>
      <div className="flex flex-col space-y-5 lg:grid lg:grid-flow-col lg:justify-stretch text-slate-500">
        <div className="flex flex-col justify-center space-y-2">
          <a href="mailto:asmakkapati@ku.edu,krishivanamamaly@ku.edu?subject=More%20Info%20on%20HealthBridge">
            <span className="material-symbols-outlined rounded-full p-2 bg-sky-100 hover:text-slate-600" style={{ fontSize: '2rem' }}>mail</span>
          </a>
          <p className="text-lg text-sky-900">Email</p>
          <p className="text-neutral-500">Have any questions or want to find out more?</p>
          <a href="mailto:asmakkapati@ku.edu,krishivanamamaly@ku.edu?subject=More%20Info%20on%20HealthBridge">
            krishivanamamaly@ku.edu
          </a>
        </div>
        <div className="flex flex-col justify-center space-y-2">
          <a href="tel:+19135551099">
            <span className="material-symbols-outlined rounded-full p-2 bg-sky-100 hover:text-slate-600" style={{ fontSize: '2rem' }}>phone</span>
          </a>
          <p className="text-lg text-sky-900">Phone</p>
          <p className="text-neutral-500">Talk to us about HealthBridge!</p>
          <a href="tel:+19135551099">
            +1(913)-555-1099
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
