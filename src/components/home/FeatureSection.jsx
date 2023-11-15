import { checkAll, htmlLogo, securityLock } from "@/assets";
import Image from "next/image";
import Link from "next/link";

export default function FeatureSection() {
  const list = [
    "Two-Factor Authentication",
    "NDPR Compliant",
    "Guaranteed Transaction Security",
    "Secure Cloud Option",
  ];
  return (
    <div className=" flex">
      <div className=" overflow-hidden relative min-h-[531px] w-[50%] text-white pl-[81px] pt-[73px] pb-[69px] bg-darkPurple">
        <h2 className=" z-40 leading-[117.5%] max-w-[377px]  font-barlow font-[700] text-[40px] ">
          Enterprise Grade Security
        </h2>
        <p className=" z-50 max-w-[348px] my-2  font-normal text-[15px] font-cairo capitalize">
          We adhere to best-in-class security recommendations, providing
          solutions that align with global standards of utmost security.
        </p>
        <ul className=" z-40">
          {list.map((list) => (
            <li
              key={list}
              className=" font-medium  text-[#c5c5c5] font-cairo text-[15px] flex gap-2 items-center"
            >
              <Image src={checkAll} alt="" /> <span>{list}</span>
            </li>
          ))}
        </ul>
        <Image
          src={securityLock}
          alt=""
          className=" top-[73px] absolute right-[-120px]"
        />
      </div>
      <div className=" overflow-hidden relative min-h-[531px] w-[50%] text-white pl-[58px] pt-[73px] pb-[69px] bg-purple">
        <h2 className=" z-40 leading-[117.5%] font-barlow font-[700] text-[40px] max-w-[377px] ">
          Well documented and <span className="text-yellow">easy-to-use </span>
          APIs for developers
        </h2>
        <p className=" z-40 max-w-[348px] font-normal mt-8 text-[15px] font-cairo capitalize">
          We have done the core payments integrations and abstractions, so your
          team can easily integrate with our APIs and access multiple payment
          functionalities.
        </p>
        <div className="mt-9 z-50">
          <Link
            href="#"
            className="  bg-[#240046] rounded-[10px] py-[19px] px-[51px] text-[15px] font-manrope font-[700] text-white"
          >
            Read Our API Docs
          </Link>
        </div>
        <Image
          src={htmlLogo}
          alt=""
          className=" top-[73px] absolute right-[-6px]"
        />
      </div>
    </div>
  );
}
