import { bigLogo } from "@/assets";
import { testimonials } from "@/data";
import Image from "next/image";
import TestimonyCard from "./TestimonyCard";

export default function TestimonialSection() {
  return (
    <div className=" text-center px-[170px] pt-[130px] pb-[157px]">
      <h2 className=" text-darkPurple font-barlow text-[41px] font-[700]">
        Why Customers Love Us
      </h2>
      <p className=" text-[18px] text-darkPurple font-medium font-cairo capitalize max-w-[550px] mx-auto">
        Receive one-off of recurring payments from anyone, anywhere, via your
        unique payment link.
      </p>
      <div className="  pl-10 pr-6 h-[500px] flex justify-between mt-[60px] bg-[#f9f8f9] rounded-[10px]">
        <div className=" h-full remove-scrollbar  flex overflow-y-auto w-[51%] justify-between">
          <div className=" remove-scrollbar  h-full text-left overflow-y-auto w-[45%]">
            <div className=" h-full space-y-4 ">
              {testimonials.map((testimony) => (
                <TestimonyCard
                  up
                  key={testimony.id}
                  image={testimony.image}
                  testimony={testimony.testimony}
                  logo={testimony.logo}
                  name={testimony.name}
                  title={testimony.title}
                />
              ))}
            </div>
          </div>
          <div className=" remove-scrollbar text-left h-full overflow-y-auto w-[45%]">
            <div className="h-full  space-y-4 ">
              {testimonials.map((testimony) => (
                <TestimonyCard
                  key={testimony.id}
                  image={testimony.image}
                  testimony={testimony.testimony}
                  logo={testimony.logo}
                  name={testimony.name}
                  title={testimony.title}
                />
              ))}
            </div>
          </div>
        </div>
        <div className=" self-end w-[40%] ">
          <Image src={bigLogo} alt="" />
        </div>
      </div>
    </div>
  );
}
