"use client";
import { CldImage } from "next-cloudinary";

export default function Partners() {
  const logos = [
    "uba_4x_mytbdm",
    "payattitude_new_logo__4x_htw660",
    "nibss_4x_syfl3c",
    "echo5a_4x_p6xwfp",
    "providus_4x_srmxou",
    "up_3x_fljvyu",
  ];
  return (
    <div className="clip bg-white mt-[-70px] md:px-[50px] px-[37px] lg:px-[170px] pb-[55px] pt-6">
      <h2 className=" mb-[18px] text-darkPurple font-barlow text-xl font-semibold">
        Trusted By Excellent Partners
      </h2>
      <div className=" flex gap-[26px] lg:gap-[52px] items-center">
        {logos.map((logo) => (
          <CldImage
            src={`Terra/${logo}`}
            alt=""
            width={328}
            height={212}
            key={logo}
            className=" max-w-[65px] w-full object-cover"
          />
        ))}
      </div>
    </div>
  );
}
