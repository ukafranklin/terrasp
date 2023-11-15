import Image from "next/image";
import Link from "next/link";
export default function PaymentCard({ icon, description, cta, href }) {
  return (
    <div className=" bg-white text-[18px] col-span-1 font-cairo rounded-[10px] py-[69px] px-[45px] ">
      <div>
        <Image src={icon} alt="" />
      </div>
      <p className="  text-[#240046] min-h-[100px] font-medium capitalize">
        {description}
      </p>
      <Link className=" font-extrabold underline capitalize " href={href}>
        {cta}
      </Link>
    </div>
  );
}
