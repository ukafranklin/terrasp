import { orangeDots } from "@/assets";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import CloudImage from "../common/CloudImage";

export default function HeroSection() {
  return (
    <div className=" relative  bg-purpleGradient w-full md:mb-[320px]  min-[500px]:mb-[150px] sm:mb-[250px]  h-[430px] lg:min-h-[602px] lg:py-[120px] lg:px-[170px] px-[37px] md:px-[50px] py-[150px] ">
      <div className=" flex h-full flex-wrap items-center justify-center">
        <div className=" w-full lg:w-[30%]">
          <h1 className=" font-barlow  lg:text-left text-center text-white font-bold text-[40px] lg:text-[50px] mb-2 lg:mb-6">
            Our Story
          </h1>
          <p className=" lg:text-lg text-[13px] lg:text-left text-center font-cairo font-medium text-[#ffffff86]">
            Solving Financial problems through inspired solutions.
          </p>
        </div>
        <div className=" relative top-[41px] lg:top-0 w-full lg:w-[58%] border-dashed border border-[#FF9E01] rounded-[30px] ">
          <div className=" relative  lg:top-[-24px] left-[10px] Lg:left-[21px]">
            <CloudImage
              src="Terra/im1_4x_nf09hb"
              alt=""
              width={2532}
              height={1584}
              className=" rounded-[30px]"
            />
            <div className=" text-white w-[70px] h-[70px] rounded-full bg-yellow grid place-items-center absolute left-[45%] tranlate-x-[-50%] top-[42%]">
              <FaPlay />
            </div>
          </div>
          <div className=" absolute lg:block hidden bottom-[62px] right-[42px] ">
            <Image alt="" src={orangeDots} />
          </div>
        </div>
      </div>
    </div>
  );
}
