import { Logo } from "@/assets";
import { navigationLinks } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <>
      <header className="px-[170px] hidden md:block py-4  border-solid border-[#4E0F4E2B] border-b-solid border-b ">
        <nav className="  flex items-center font-barlow justify-between">
          <Link href="/">
            <Image src={Logo} alt="" />
          </Link>
          <div className=" flex gap-7 text-[15px] font-barlow font-medium">
            {navigationLinks.map((link) => (
              <Popover key={link.id} className="p-0 h-0">
                <PopoverTrigger className=" flex gap-1 p-0 py-0 ">
                  {link.title}{" "}
                  <span className=" self-center ">
                    <MdKeyboardArrowDown />
                  </span>
                </PopoverTrigger>
                <PopoverContent className="text-[15px] p-0">
                  {link.subLinks.map((subLinks, index) => (
                    <Link
                      key={index}
                      href={subLinks.href}
                      className=" block p-4 w-full hover:bg-purple hover:text-white"
                    >
                      {subLinks.title}
                    </Link>
                  ))}
                </PopoverContent>
              </Popover>
            ))}
          </div>
          <div className=" flex gap-6 items-center">
            <a
              target="_blank"
              href="https://test.pg.terraswitch.ng/login"
              className=" text-[15px] font-semibold text-black"
            >
              Sign In
            </a>
            <Link
              href="/contact"
              className="bg-purple rounded-[10px] py-[19px] px-[51px] text-[15px] font-manrope font-[700] text-white"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </header>
      <MobileNavbar />
    </>
  );
}
