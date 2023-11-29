import { map } from "@/assets";
import Image from "next/image";

export default function MapSection() {
  return (
    <div className=" lg:py-[140px] py-[79px]  lg:pl-[170px] pl-0 overflow-hidden">
      <h1 className=" mb-8 capitalize max-w-[599px] pl-[30px] text-darkPurple font-barlow font-[700] text-[41px] leading-[141.403%]">
        Building a <span className=" text-purple">Global payment </span>
        Infrastructure starting from
        <span className=" text-yellow"> Africa</span>
      </h1>
      <div className="  w-full">
        <Image src={map} alt="" style={{ marginLeft: "auto" }} />
      </div>
    </div>
  );
}
