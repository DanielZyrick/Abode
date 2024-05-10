"use client";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Header() {
  const pathname = usePathname();
  const navItems = [
    { name: "Explore", href: "/explore" },
    { name: "AboutUs", href: "/about" },
    { name: "Blogs", href: "/blogs" },
  ];
  return (
    <header className="relative max-w-[1440px] w-full h-[10vh] flex justify-between items-center m-auto py-5 px-10">
      <div>
        <span className="cursor-pointer">
          <Link href={"/"}>Abode</Link>
        </span>
      </div>
      <div className=" hidden md:flex gap-x-10">
        <ul className="flex items-center gap-x-10">
          {navItems.map((item, i) => (
            <Link
              className={
                item.href === pathname
                  ? "underline underline-offset-8"
                  : "hover:underline underline-offset-8"
              }
              href={item.href}
              key={i}
            >
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
        <div className="flex gap-x-5">
          <div>
            <button className="border border-black px-5 py-2 rounded-3xl">
              Login
            </button>
          </div>
          <div>
            <button className="bg-[#151515] text-white border border-black px-5 py-2 rounded-3xl">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <AlignJustify />
      </div>
    </header>
  );
}
