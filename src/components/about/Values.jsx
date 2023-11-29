import { valuesData } from "@/data";
import AccordionComponent from "../common/AccordionComponent";
import BigLink from "../common/BigLink";
import CloudImage from "../common/CloudImage";

export default function Values() {
  return (
    <>
      <div className=" md:py-[80px] py-[78px] lg:py-[150px] md:px-[50px] px-[37px] flex-wrap lg:px-[170px] flex items-center justify-between w-full">
        <div className=" w-full lg:w-[43%]">
          <AccordionComponent
            data={valuesData}
            title="Our Values"
            description=" At TerraSwitch, our core values are the bedrock of our operations, guiding us as we navigate the complex landscape of payment switching and processing. These principles not only define who we are but also shape the way we interact with our clients, partners, and the broader community. We’re a deeply mission-driven company, and these are the core ideas guiding us as we navigate the complex landscape of payment switching and processing"
          />
        </div>
        <div className="w-full lg:w-[40%] mt-8 lg:mt-0">
          <CloudImage
            src="Terra/im4_4x_dsg2xh"
            width={1832}
            height={1848}
            alt=""
            className=" w-full object-cover"
          />
        </div>
      </div>
      <div className=" bg-[#F4F4F4] flex-wrap py-[83px] lg:py-[92px] md:px-[50px] px-[37px] lg:px-[170px] flex justify-between items-center">
        <div className="mb-[70px] lg:mb-0">
          <h3 className=" font-barlow text-[40px] lg:text-[50px] text-darkPurple font-bold max-w-[402px]">
            Working<br></br> With TerraSwitch
          </h3>
          <p className=" font-cairo text-darkPurple text-lg font-medium capitalize max-w-[430px]">
            Come do meaningful work with kind, smart colleagues who&apos;re
            invested in your growth
          </p>
        </div>
        <div className="  ">
          <BigLink
            bg="bg-yellow"
            href="https://www.bamboohr.com/signup/"
            color="text-darkPurple"
          >
            See Open Roles
          </BigLink>
        </div>
      </div>
    </>
  );
}
