import { dots } from "@/assets";
import Image from "next/image";
import CloudImage from "../common/CloudImage";

export default function PoweredSection() {
  return (
    <div className=" px-[170px] pt-[95px] pb-[100px]">
      <h2 className=" text-darkPurple text-[50px] font-bold font-barlow max-w-[849px] mx-auto text-center leading-[116%]">
        Powering A New Generation Of Businesses In Africa
      </h2>
      <div className=" flex justify-between mt-[72px]">
        <div className=" w-[48%]   flex  min-h-[370px] relative isolate ">
          <div className=" w-[90%] mt-auto ml-auto self-end">
            <CloudImage
              src="Terra/im2_4x_zzotae"
              alt=""
              width={3564}
              height={2376}
              className={` min-h-[324px] w-full object-cover  rounded-[30px]  rounded-bl-none`}
            />
          </div>
          <Image
            src={dots}
            alt=""
            className=" w-[272px] h-[240px] object-cover absolute top-0 left-0 -z-[1]"
          />
        </div>
        <div className=" w-[45%] self-center">
          <p className=" text-purple font-cairo font-medium text-lg capitalize">
            In the heart of Lagos, 2021 marked the beginning of an extraordinary
            journey for TerraSwitch, born from a vision to redefine the payment
            industry.
            <br></br>
            <br></br>
            Our founders, driven by a passion for innovation and reliability,
            set out to create a company that not only offered cutting-edge
            payment solutions but also built lasting relationships with
            customers across diverse markets.
          </p>
        </div>
      </div>
    </div>
  );
}
