import React from "react"
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  weight: ['400', '700'],
  subsets: ['latin']  
});

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col justify-center content-center h-[95vh] w-fit m-auto text-center">
      <h1 className={notoSans.className + ' font-bold text-5xl text-sky-900 mb-3 text-center'}>Not Found</h1>
      <h3 className={notoSans.className + ' text-xl text-slate-500 text-center'}>This page does not exist.</h3>
    </div>
  );
};

export default NotFound
