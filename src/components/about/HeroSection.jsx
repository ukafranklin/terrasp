import { orangeDots } from "@/assets";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import CloudImage from "../common/CloudImage";

export default function HeroSection() {
  return (
    <div className=" relative  bg-purpleGradient w-full min-h-[602px] py-[120px] px-[170px] ">
      <div className=" flex h-full items-center justify-center">
        <div className=" w-[30%]">
          <h1 className=" font-barlow text-white font-bold text-[50px] mb-6">
            Our Story
          </h1>
          <p className=" text-lg font-cairo font-medium text-[#ffffff86]">
            Solving Financial problems through inspired solutions.
          </p>
        </div>
        <div className=" w-[58%] border-dashed border border-[#FF9E01] rounded-[30px] ">
          <div className=" relative top-[-24px] left-[21px]">
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
          <div className=" absolute bottom-[62px] right-[42px] ">
            <Image alt="" src={orangeDots} />
          </div>
        </div>
      </div>
    </div>
  );
}
