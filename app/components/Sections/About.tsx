import React from "react"
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  weight: '700',
  subsets: ['latin']  
});

const About: React.FC = () => {
  return (
    <div id="about" className="lg:h-[40vh] w-full lg:w-3/4 m-auto flex flex-col content-center text-center">
      <hr className="border-t-2 border-neutral-400 my-4" />
      <h2 className={notoSans.className + ' font-bold text-3xl text-sky-900 mb-3 text-center mt-10'}>About Us</h2>
      <p className="text-slate-500 text-center">
        HealthBridge is a student led initiative that works to address health disparities across regions by constructing resource guides detailing primary care physician locations, pharmacies, substance use and addiction treatment centers, and dental clinics. The initiative is Kansas centered and aims to provide knowledgeable information regarding resources to each of our communities. Volunteers are crucial for our success and your work can truly have an impact on many groups of people
      </p>
    </div>
  );
};

export default About;
