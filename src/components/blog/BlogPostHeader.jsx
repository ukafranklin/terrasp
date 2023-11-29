import Image from "next/image";
export default function BlogPostHeader({ title, category, date, image }) {
  return (
    <div className=" text-center relative isolate">
      <h1 className=" text-darkPurple font-barlow font-bold text-[28px] lg:text-[48px] leading-[103.125%] mb-2 lg:mb-8">
        {title}
      </h1>
      <div className=" flex text-center justify-center w-full  gap-2 items-center text-black capitalize font-cairo text-lg ">
        {category && <h5 className="font-[700]">{category}</h5>}
        <p className=" font-medium">{date}</p>
      </div>
      <div className=" mt-7 lg:mt-[98px] w-full mx-auto px-[26px] lg:px-[81px]">
        <Image
          src={image}
          alt=""
          width={2000}
          height={2000}
          className=" w-full rounded-[30px] h-[198px] lg:h-[540px] object-cover object-top"
        />
      </div>
      <div className=" z-[-1] w-full absolute h-[486px] bg-[#f7eff7] top-9 left-0"></div>
    </div>
  );
}
