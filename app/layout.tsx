import React from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { NAVLINKS } from "./other/constants";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode
}

const roboto = Roboto({
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "HealthBridge",
  description: "A place to find afforable health care near you.",
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body className={roboto.className}>
        <Navbar items={NAVLINKS}/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

export default RootLayout

