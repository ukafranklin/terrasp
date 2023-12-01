"use client";
import { orangeDots } from "@/assets";
import { CldVideoPlayer } from "next-cloudinary";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className=" relative  bg-purpleGradient w-full md:mb-[220px]  min-[500px]:mb-[80px] sm:mb-[150px] lg:mb-0  h-[430px] lg:min-h-[602px] lg:py-[120px] lg:px-[170px] px-[37px] md:px-[50px] py-[150px] ">
      <div className=" flex h-full flex-wrap items-center justify-center">
        <div className=" w-full lg:w-[30%]">
          <h1 className=" font-barlow  lg:text-left text-center text-white font-bold text-[40px] lg:text-[50px] mb-2 lg:mb-6">
            Our Story
          </h1>
          <p className=" lg:text-lg text-[13px] lg:text-left text-center font-cairo font-medium text-[#ffffff86]">
            Solving Financial problems through inspired solutions..
          </p>
        </div>
        <div className=" relative top-[51px] lg:top-0 w-full lg:w-[58%] border-dashed border border-[#FF9E01] rounded-[30px] ">
          <div className=" relative top-[10px]  lg:top-[-24px] left-[10px] lg:left-[21px]">
            <CldVideoPlayer
              src="Terra/Terra_Main_fbbokn"
              alt=""
              width={1920}
              height={1080}
              className=" rounded-[30px] object-cover"
              colors={{
                accent: "#FFF",
                base: "#FF9E01",
                text: "#fff",
              }}
            />
          </div>
        </div>
        <div className=" absolute lg:block hidden bottom-[62px] right-[42px] ">
          <Image alt="" src={orangeDots} />
        </div>
      </div>
    </div>
  );
}
