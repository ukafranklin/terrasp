import { dots } from "@/assets";
import { paymentData } from "@/data";
import Image from "next/image";
import PaymentCard from "./PaymentCard";

export default function PaymentSection() {
  return (
    <div className=" isolate bg-[#D29ED02B] pt-[31px]  lg:pt-[130px] pb-[106px] md:px-[50px] px-[30px] lg:px-[170px] ">
      <div className=" absolute z-[-1] right-0  lg:top-[130px]">
        <Image src={dots} alt="" className=" w-[193px] lg:w-auto" />
      </div>
      <div className=" mb-6">
        <h1 className=" leading-[141.463%] font-barlow font-[700] text-[41px] max-w-[470px] text-[#240046] ">
          Use{" "}
          <span className=" text-purple">
            Terra Payments Switching and Processing for{" "}
          </span>
          Small Businesses
        </h1>
      </div>
      <div className=" grid grid-cols-1  md:grid-cols-3 gap-6">
        {paymentData.map((payment) => (
          <PaymentCard
            icon={payment.image}
            description={payment.description}
            cta={payment.cta}
            key={payment.id}
            href={payment.href}
          />
        ))}
      </div>
    </div>
  );
}
