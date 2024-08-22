import React from "react"
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  weight: '700',
  subsets: ['latin']  
});

const Contact: React.FC = () => {
  return (
    <div id="contact" className="lg:h-[50vh] w-full lg:w-3/4 m-auto flex flex-col content-center text-center">
      <hr className="border-t-2 border-neutral-400 my-4" />
      <h2 className={notoSans.className + ' font-bold text-3xl text-sky-900 mb-3 text-center mt-10'}>Contact Us</h2>
      <div className="grid lg:grid-cols-2 space-y-5 lg:space-y-0 lg:flex-row lg:justify-around text-slate-500">
        <div className="flex flex-col justify-center space-y-2">
          <a href="mailto:healthbridgeinitiativeku@gmail.com,asmakkapati@ku.edu,krishivanamamaly@ku.edu?subject=More%20Info%20on%20HealthBridge">
            <span className="material-symbols-outlined rounded-full p-2 bg-sky-100 hover:text-slate-600" style={{ fontSize: '2rem' }}>mail</span>
          </a>
          <p className="text-lg text-sky-900">Email</p>
          <p className="text-neutral-500">Have any questions or want to find out more?</p>
          <a
            className="text-sky-700 hover:text-sky-600"
            href="mailto:healthbridgeinitiativeku@gmail.com,asmakkapati@ku.edu,krishivanamamaly@ku.edu?subject=More%20Info%20on%20HealthBridge"
          >
            healthbridgeinitiativeku@gmail.com
          </a>
        </div>
        <div className="flex flex-col justify-center space-y-2">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdS2n1Tu9rcF0zfRbYvFKwCbzH7I6TXtM5LrtdG9GtMUOilUw/viewform"
            target="_blank" rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined rounded-full p-2 bg-sky-100 hover:text-slate-600" style={{ fontSize: '2rem' }}>check_box</span>
          </a>
          <p className="text-lg text-sky-900">Volunteer</p>
          <p className="text-neutral-500">Volunteer with us!</p>
          <a
            className="text-sky-700 hover:text-sky-600"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdS2n1Tu9rcF0zfRbYvFKwCbzH7I6TXtM5LrtdG9GtMUOilUw/viewform"
            target="_blank" rel="noopener noreferrer"
          >
            Sign Up Form
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
