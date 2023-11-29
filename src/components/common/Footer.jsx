import { FooterLogo } from "@/assets";
import { footerNavigationLinks } from "@/data";
import Image from "next/image";
import Link from "next/link";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoTwitter,
} from "react-icons/bi";

export default function Footer() {
  const socialLinks = [
    {
      icon: <BiLogoInstagram />,
      href: "#",
    },
    {
      icon: <BiLogoFacebook />,
      href: "#",
    },
    {
      icon: <BiLogoLinkedinSquare />,
      href: "#",
    },
    {
      icon: <BiLogoTwitter />,
      href: "#",
    },
  ];
  return (
    <footer className=" z-[700000] isolate md:px-[50px] px-[37px] py-[56px] lg:pl-[170px] lg:pr-[83px] lg:py-[68px] bg-[#16022A] ">
      <div className=" flex  flex-wrap-reverse justify-between mb-[92px]">
        <div>
          <div className=" mb-11">
            <Image src={FooterLogo} alt="" />
          </div>
          <div className=" flex gap-4  ">
            {socialLinks.map((links, index) => (
              <Link
                className=" text-[18px] w-[32px] h-[32px] grid place-items-center bg-purple text-white rounded-full"
                key={index}
                href={links.href}
              >
                {links.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className=" mb-[79px] lg:mb-0 flex lg:justify-normal justify-between lg:gap-9 flex-wrap ">
          {footerNavigationLinks.map((links) => (
            <div key={links.id} className=" min-w-[161px] mb-6 lg:mb-0 ">
              <h3 className=" mb-4 text-[#893687] font-barlow font-bold text-xl leading-10 capitalize">
                {links.title}
              </h3>
              <ul className=" list-none">
                {links.subLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      className=" font-cairo text-[19px] font-semibold text-white"
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className=" text-[#8B8B8B] text-[18px] font-cairo font-semibold ">
          <span>&copy;</span> TerraSwitch
        </p>
      </div>
    </footer>
  );
}
