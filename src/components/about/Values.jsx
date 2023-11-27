import { valuesData } from "@/data";
import AccordionComponent from "../common/AccordionComponent";
import BigLink from "../common/BigLink";
import CloudImage from "../common/CloudImage";

export default function Values() {
  return (
    <>
      <div className=" py-[150px] px-[170px] flex items-center justify-between w-full">
        <div className=" w-[43%]">
          <AccordionComponent
            data={valuesData}
            title="Our Values"
            description=" At TerraSwitch, our core values are the bedrock of our operations, guiding us as we navigate the complex landscape of payment switching and processing. These principles not only define who we are but also shape the way we interact with our clients, partners, and the broader community. We’re a deeply mission-driven company, and these are the core ideas guiding us as we navigate the complex landscape of payment switching and processing"
          />
        </div>
        <div className="w-[40%]">
          <CloudImage
            src="Terra/im4_4x_dsg2xh"
            width={1832}
            height={1848}
            alt=""
            className=" w-full object-cover"
          />
        </div>
      </div>
      <div className=" bg-[#F4F4F4] py-[92px] px-[170px] flex justify-between items-center">
        <div>
          <h3 className=" font-barlow text-[50px] text-darkPurple font-bold max-w-[402px]">
            Working<br></br> With TerraSwitch
          </h3>
          <p className=" font-cairo text-darkPurple text-lg font-medium capitalize max-w-[430px]">
            Come do meaningful work with kind, smart colleagues who&apos;re
            invested in your growth
          </p>
        </div>
        <div>
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
