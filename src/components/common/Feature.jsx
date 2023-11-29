import { checkAll } from "@/assets";
import Image from "next/image";

export default function Feature({ title, description, cta, href, list, link }) {
  return (
    <div className=" w-full lg:w-[41%] self-center" id={link}>
      <h1 className=" leading-[141.463%] font-barlow font-[700] text-[41px] max-w-[470px] text-[#240046] ">
        {title ? (
          title
        ) : (
          <>
            Seamless <br></br>
            <span className=" text-purple">
              Payments Experience <br></br>{" "}
            </span>
            for Enterprises
          </>
        )}
      </h1>
      <p className=" text-darkPurple capitalize font-cairo font-medium text-lg mb-6 mt-3">
        {description}
      </p>
      <ul className=" z-40">
        {list.map((list) => (
          <li
            key={list}
            className="  mb-[12px] font-medium  text-darkPurple font-cairo text-lg flex gap-2 items-center"
          >
            <Image
              src={checkAll}
              alt=""
              className="  hover:animate-bounce min-w-[39px] block"
            />{" "}
            <span className="capitalize ">{list}</span>
          </li>
        ))}
      </ul>
      {cta && (
        <div className=" mt-[34px]">
          <a
            href={href}
            target="_blank"
            className="bg-darkPurple hover:opacity-[0.5] rounded-[10px] py-[19px] px-[51px] text-[15px] font-manrope font-[700] truncate text-white"
          >
            {cta}
          </a>
        </div>
      )}
    </div>
  );
}
