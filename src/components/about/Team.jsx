import Image from "next/image";
import CloudImage from "../common/CloudImage";
export default function Team({ image, name, title }) {
  return (
    <div className=" min-w-[181px]">
      <div>
        <CloudImage
          src={image}
          width={1536}
          height={1530}
          alt=""
          className=" w-[180px] h-[180px] rounded-full mx-auto "
        />
      </div>
      <div className=" text-center w-dull">
        <h3 className=" text-darkPurple font-cairo text-xl font-extrabold capitalize">
          {name}
        </h3>
        <p className=" text-darkPurple font-cairo text-lg capitalize font-medium">
          {title}
        </p>
      </div>
    </div>
  );
}
