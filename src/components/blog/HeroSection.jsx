import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function HeroSection() {
  return (
    <div className="relative bg-purpleGradient  h-[467px] flex  items-center md:pl-[50px] pl-[37px] lg:pl-[170px] pr-[70px]  text-white ">
      <div>
        <h1 className=" font-barlow text-[50px] leading-[116%] font-bold mb-7">
          Terra Blog
        </h1>
        <p className="capitalize text-lg font-cairo opacity-[0.85]">
          What&apos;s New?
        </p>
        <form className=" flex lg:gap-6 flex-wrap items-center mt-4 lg:mt-7">
          <div className="  w-full">
            <Input className="bg-transparent max-w-[390px] w-[312px] md::w-[390px] h-[46px] border border-solid border-[#98a2b3] rounded-[10px]" />
          </div>
          <div className=" ">
            <Button className=" absolute lg:static bottom-[50px] left-[37px] md:left-[50px] bg-yellow px-[51px] py-[19px] text-[15px] text-darkPurple rounded-[10px] ">
              Subscribe
            </Button>
          </div>
        </form>
        <p className="capitalize text-lg lg:mt-2 font-cairo opacity-[0.85]">
          Stay Updated. You can unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}
