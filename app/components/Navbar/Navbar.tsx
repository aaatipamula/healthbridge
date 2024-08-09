import React from "react";
import { NavItem } from "../../other/models";
import Link from "next/link";

interface NavbarProps {
  items: NavItem[]
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <nav 
      className="fixed top-0 flex flex-row justify-between content-center w-full p-3 lg:w-4/5 lg:left-1/2 lg:-translate-x-1/2 lg:rounded shadow-md bg-neutral-100"
    >
      <div className="hidden lg:flex content-center h-12 space-x-3">
        {items.map((item, index) => (
          <Link
            key={index} href={item.href}
            className={"p-2 text-lg text-zinc-800 rounded transition ease-out hover:text-zinc-500"}
          >
            {item.title}
          </Link> 
        ))}
      </div>
        {/* Add Alternate Icon Dropdown for Mobile */}
      <div>
      </div>
      <Link href="/">
        <h1 className="absolute left-1/2 -translate-x-1/2 font-bold text-3xl text-sky-900 text-center">HealthBridge</h1>
      </Link>
      <a 
        className="p-2 text-lg text-zinc-800 rounded transition ease-out hover:text-zinc-500"
        href="/signup" target="_blank" rel="noopener noreferrer"
      >
        Sign Up
      </a>
    </nav>
  );
};

export default Navbar;
