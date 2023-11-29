import Image from "next/image";
import Link from "next/link";
export default function BlogCard({
  title,
  image,
  category,
  date,
  description,
  link,
}) {
  return (
    <Link href={`/blog/${link}`}>
      <div className=" flex justify-between flex-wrap-reverse items-center mb-[80px] lg:mb-[100px]">
        <div className=" w-full mt-7 lg:mt-0 lg:w-[53%]">
          <div className=" flex  gap-2 items-center text-black capitalize font-cairo text-lg ">
            {category && <h5 className="font-[700]">{category}</h5>}
            <p className=" font-medium">{date}</p>
          </div>
          <h2 className="lg:mb-4 font-bold font-barlow leading-[143.333%]   text-[30px] lg:text-[35px] text-darkPurple lg:leading-[141.429%]">
            {title}
          </h2>
          <p className=" text-truncate text-justify text-darkPurple font-cairo font-medium capitalize">
            {description}
          </p>
        </div>
        <div className=" w-full lg:w-[33%]">
          <Image
            src={image}
            alt=""
            width={1000}
            height={1000}
            className=" h-[167px] lg:h-[207px] object-cover"
          />
        </div>
      </div>
    </Link>
  );
}
