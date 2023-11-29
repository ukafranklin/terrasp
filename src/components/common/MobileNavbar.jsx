"use client";
import { navigationLinks } from "@/data";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { VscClose } from "react-icons/vsc";

import { Logo } from "@/assets";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Button } from "../ui/button";
export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState("");
  return (
    <header className="z-[90000000] border-b-[1px] border-white border-solid fixed w-full top-0 bg-white">
      <nav className="relative bg-white  z-[8999999999] items-center w-full flex justify-between md:px-[40px] px-[20px] py-[20px] lg:hidden">
        <Link href="/" className="w-30%">
          <Image
            src={Logo}
            height={40}
            style={{ width: "108px", objectFit: "contain" }}
            width={108}
            alt="LOGO"
          />
        </Link>
        <div className="text-darkPurple">
          <button
            className="text-darkPurple text-[30px]"
            onClick={() => setOpen(!open)}
          >
            {!open ? <RiMenu3Fill /> : <VscClose />}
          </button>
        </div>
      </nav>
      {open && (
        <AnimatePresence>
          <motion.ul
            key={open ? "open" : null}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className=" lg:hidden z-[90000000] text-black h-screen absolute top-[80px] left-0 w-full  bg-white py-10  "
          >
            {navigationLinks.map((link) => (
              <div key={link.id} className=" text-darkPurple hover:text-white ">
                <Button
                  onClick={() => setDropdown(link.id)}
                  className=" text-lg h-[55px] hover:text-white   px-[41px] py-[19px] hover:bg-purple bg-transparent font-barlow font-bold text-darkPurple rounded-none flex w-full justify-between items-center  "
                >
                  {link.title}{" "}
                  <span className=" self-center ">
                    <MdKeyboardArrowDown fontSize="20px" />
                  </span>
                </Button>
                {dropdown === link.id && (
                  <div className="text-[15px]  text-darkPurple  px-[48px] py-[10px]">
                    {link.subLinks.map((subLinks, index) => (
                      <Link
                        key={index}
                        href={subLinks.href}
                        className=" block w-full py-3 "
                        onClick={() => setOpen(false)}
                      >
                        {subLinks.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className=" h-[55px] text-lg hover:text-white   px-[41px] py-[19px] hover:bg-purple bg-transparent font-barlow font-bold text-darkPurple rounded-none flex w-full justify-between items-center"
            >
              Contact Us
            </Link>
            <div className="  px-[41px] mt-[32px]">
              <a
                href="#"
                target="_blank"
                onClick={() => setOpen(false)}
                className="py-3 px-5 text-black border-[2px] border-solid w-max  rounded-[10px] border-black"
              >
                Sign In
              </a>
            </div>
          </motion.ul>
        </AnimatePresence>
      )}
    </header>
  );
}
