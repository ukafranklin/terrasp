"use client";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex bg-linear justify-between md:px-[50px] px-[22px] lg:px-[170px] pt-[113px] lg:pt-[89px] pb-[170px]">
      <div className=" lg:w-[45%] self-center">
        <h1 className=" leading-[141.463%] font-barlow font-[700] text-[41px] max-w-[470px] text-[#240046] ">
          Flexible Payment <br></br> Options to Solve Your <br></br>Everyday{" "}
          <span className=" text-purple">Business Needs</span>
        </h1>
        <p className=" font-cairo text-justify text-lg font-medium text-darkPurple mt-10 capitalize">
          Whether you&apos;re a Startup or a multinational company, digital
          savvy or not, our innovative solutions ensure efficient, secure.
        </p>
        <div className=" mt-8 lg:mt-11 flex gap-8">
          <Link
            href="#"
            className=" bg-[#240046] rounded-[10px] py-[19px]  text-[15px] font-manrope font-[700] text-white max-w-[224px] text-center w-full"
          >
            Create A Free Account
          </Link>
          <Link
            href="#"
            className=" bg-transparent  rounded-[10px] py-[19px] text-[15px] font-manrope font-[700]  max-w-[154px] text-center w-full text-darkPurple border border-solid border-darkPurple"
          >
            Contact Sales
          </Link>
        </div>
      </div>
      <div className=" lg:block hidden relative isolate w-[45%]">
        <div className=" relative isolate w-[75%] min-w-[369px] mx-auto">
          <CldImage
            src="Terra/im1_4x_ar1up1"
            alt=""
            width={1476}
            height={1728}
            className=" rounded-[30px]"
          />
          <div className=" absolute -z-[1]  w-[46px] h-[46px] rounded-full bg-yellow top-[-10px] right-[-10px]"></div>
        </div>
        <CldImage
          src="Terra/arc_msvyx6"
          alt=""
          width={1132}
          height={1975}
          className=" absolute top-[-30px] right-[-30px] w-[283px] 2xl:w-[350px]"
        />
        <CldImage
          src="Terra/chart_4x_qpnjgp"
          className=" absolute bottom-0 left-[-50px] w-[189px]"
          alt=""
          width={1952}
          height={1550}
        />
        <CldImage
          className=" absolute right-[-20px] bottom-[120px] w-[119px] "
          src="Terra/Cha_4x_mjypjz"
          alt=""
          width={1568}
          height={876}
        />
        <div className=" w-[150px] rounded-full h-[150px] bg-darkPurple absolute top-[20%] left-0 -z-[1]"></div>
      </div>
    </div>
  );
}
