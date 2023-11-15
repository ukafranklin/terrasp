import { paymentData } from "@/data";
import PaymentCard from "./PaymentCard";

export default function PaymentSection() {
  return (
    <div className=" bg-[#D29ED02B]   pt-[130px] pb-[106px] px-[170px] ">
      <div className=" mb-6">
        <h1 className=" leading-[141.463%] font-barlow font-[700] text-[41px] max-w-[470px] text-[#240046] ">
          Seamless{" "}
          <span className=" text-purple">Payments Experience for </span>Small
          Businesses
        </h1>
      </div>
      <div className=" grid  grid-cols-3 gap-6">
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
