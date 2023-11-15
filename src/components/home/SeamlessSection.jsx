"use client";
import { checkAll, dots } from "@/assets";
import { CldImage } from "next-cloudinary";
import Image from "next/image";

export default function SeamlessSection() {
  const list = [
    "Collect one-time and recurring payments from your app or website",
    "Retrieve all your transaction and customer data",
    "Verify the identity of customers",
  ];
  return (
    <div className=" flex gap-[50px] pt-[56px] px-[170px] pb-[127px]">
      <div className=" w-[50%]  flex  min-h-[540px] relative isolate ">
        <div className=" w-[86%] mt-auto  self-end">
          <CldImage
            src="Terra/im2_4x_ztcnb9"
            alt=""
            width={3564}
            height={2376}
            className=" min-h-[471px] w-full object-cover rounded-tr-[300px]"
            style={{ objectPosition: "-200px 0" }}
          />
        </div>
        <Image src={dots} alt="" className=" absolute top-0 right-0 -z-[1]" />
      </div>
      <div className=" w-[41%] self-center">
        <h1 className=" leading-[141.463%] font-barlow font-[700] text-[41px] max-w-[470px] text-[#240046] ">
          Seamless <br></br>
          <span className=" text-purple">
            Payments Experience <br></br>{" "}
          </span>
          for Enterprises
        </h1>
        <p className=" text-darkPurple capitalize font-cairo font-medium text-lg mb-6 mt-3">
          Give your customers the gift of modern, frictionless, painless
          payments. Integrate TerraSwitch once and let your customers pay you
          however they want.
        </p>
        <ul className=" z-40">
          {list.map((list) => (
            <li
              key={list}
              className=" mb-[12px] font-medium  text-darkPurple font-cairo text-lg flex gap-2 items-center"
            >
              <Image src={checkAll} alt="" className=" min-w-[39px] block" />{" "}
              <span className="capitalize ">{list}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
