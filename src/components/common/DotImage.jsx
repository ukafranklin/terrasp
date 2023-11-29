import { dots } from "@/assets";
import Image from "next/image";
import CloudImage from "./CloudImage";
export default function DotImage({
  image = "Terra/im2_4x_ztcnb9",
  radius = "rounded-tr-[60%]",
}) {
  return (
    <div className=" w-full lg:w-[50%] mb-8 lg:mb-0 mt-8 lg:mt-0  flex  lg:min-h-[540px] min-h-[350px] relative isolate ">
      <div className=" w-[90%] lg:w-[86%] max-w-[471px] mt-auto  self-end">
        <CloudImage
          src={image}
          alt=""
          width={3564}
          height={2376}
          className={`min-h-[321px] lg:min-h-[471px] w-full object-cover  ${radius}`}
          style={!radius && "object-position: -200px 0"}
        />
      </div>
      <Image
        src={dots}
        alt=""
        className=" lg:w-auto w-[269px] absolute top-0 right-0 -z-[1]"
      />
    </div>
  );
}
