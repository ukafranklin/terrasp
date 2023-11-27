import Image from "next/image";

export default function TestimonyCard({
  logo,
  testimony,
  image,
  name,
  title,
  up,
}) {
  return (
    <div
      className={`  px-[18px] py-5 bg-white border border-solid border-[#b3b3b3] rounded-[16px]`}
    >
      <div>
        <Image src={logo} alt="" />
      </div>
      <p className=" mb-4 text-[10px] font-manrope font-semibold text-[#0a0a0a] capitalize">
        {testimony}
      </p>
      <div className=" flex gap-2 items-center">
        <Image src={image} alt="" />
        <div>
          <h3 className=" text-black font-manrope text-sm capitalize mb-1">
            {name}
          </h3>
          <p className=" text-[#5b5b5b] text-[10px] font-semibold capitalize">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
