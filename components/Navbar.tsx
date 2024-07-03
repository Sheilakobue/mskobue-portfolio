"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const navLinks = [
  { id: 1, name: "Home", route: "#home" },
  { id: 2, name: "Projects", route: "#projects" },
  { id: 3, name: "Testimonials", route: "#testimonials" },
  { id: 4, name: "Skills", route: "#skills" },
  { id: 5, name: "Contact", route: "#contact" },
];

export default function Navbar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const handleOpenMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  return (
    <nav className="w-full top-0 z-[99999] py-6 relative">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center w-[91%]">
        <Link href={"home"}>
          <h1 className="text-3xl text-blue-700 font-bold">MMS</h1>
        </Link>
        <ul className="flex gap-10 max-md:hidden text-black">
{navLinks.map((link)=>(
    <Link href={link.route} key={link.id}
    className="hover:underline hover:text-blue-700 transition duration-500"
    >
        <li>{link.name}</li>
    </Link>
))}
        </ul>
      </div>
    </nav>
  );
}
