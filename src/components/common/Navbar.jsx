import { Logo } from "@/assets";
import { navigationLinks } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export default function Navbar() {
  return (
    <header className="px-[170px] py-4  border-solid border-[#4E0F4E2B] border ">
      <nav className="  flex items-center font-barlow justify-between">
        <Link href="/">
          <Image src={Logo} alt="" />
        </Link>
        <div className=" flex gap-7 text-[15px] font-barlow font-medium">
          {navigationLinks.map((link) => {
            if (link.subLinks) {
              return link.subLinks.map((subLinks) => (
                <Popover key={link.id} className="p-0 h-0">
                  <PopoverTrigger className=" flex   gap-1 p-0 py-0 h-0">
                    {link.title}{" "}
                    <span className=" my-[6px]">
                      <MdKeyboardArrowDown />
                    </span>
                  </PopoverTrigger>
                  <PopoverContent className="text-[15px]">
                    <Link href={subLinks.href}>{subLinks.title}</Link>
                  </PopoverContent>
                </Popover>
              ));
            }

            if (!link.subLinks) {
              return (
                <div key={link.id}>
                  <Link href={link.href}>{link.title}</Link>
                </div>
              );
            }
          })}
        </div>
        <div className=" flex gap-6 items-center">
          <Link href="#" className=" text-[15px] font-semibold text-black">
            Sign In
          </Link>
          <Link
            href="/contact"
            className="bg-purple rounded-[10px] py-[19px] px-[51px] text-[15px] font-manrope font-[700] text-white"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
