'use client'

import React, {useState} from "react";
import { NavItem } from "../../other/models";
import Link from "next/link";

interface NavbarProps {
  items: NavItem[]
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <nav 
      className="fixed top-0 flex flex-row justify-between content-center w-full p-3 lg:w-4/5 lg:left-1/2 lg:-translate-x-1/2 lg:rounded shadow-md bg-neutral-200"
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
      <div className="lg:hidden">
        <span
          className="cursor-pointer absolute top-1/2 -translate-y-1/2 material-symbols-outlined"
          onClick={() => setShowMenu(prev => !prev)}
        >
          {showMenu ? 'close' : 'menu'}
        </span>
        <div
          className={`absolute bottom-0 left-0 translate-y-full flex flex-col p-2 bg-neutral-200 transition ease-out ${!showMenu && '-translate-x-full'}`}
        >
          {items.map((item, index) => (
            <Link
              key={index} href={item.href}
              className={"p-2 text-lg text-zinc-800 transition ease-out hover:text-zinc-500"}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <Link href="/">
        <h1 className="absolute left-1/2 -translate-x-1/2 font-bold text-3xl text-sky-900 text-center">HealthBridge</h1>
      </Link>
      <a 
        className="p-2 text-lg text-zinc-800 rounded transition ease-out hover:text-zinc-500"
        href="/signup" target="_blank" rel="noopener noreferrer"
      >
        Volunteer
      </a>
    </nav>
  );
};

export default Navbar;
