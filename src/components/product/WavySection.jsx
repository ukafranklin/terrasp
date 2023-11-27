import { coloredWave } from "@/assets";
import Image from "next/image";

export default function WavySection() {
  const wavyContent = [
    {
      id: 1,
      title: "Store",
      backgroundColor: "bg-yellow",
      top: "top-[-250px]",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="552"
          viewBox="0 0 1440 552"
          fill="none"
        >
          <path
            d="M1444 153.891C897.639 -50.0399 477.373 -52.5503 -69 153.891V552H1444V153.891Z"
            fill="#FF9E01"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Payment Link",
      backgroundColor: "bg-white",
      top: "top-[-100px]",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="553"
          viewBox="0 0 1440 553"
          fill="none"
        >
          <path
            d="M1446 154.17C900 -50.1306 480.012 -52.6455 -66 154.17V553H1446V154.17Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Invoices",
      backgroundColor: "bg-[#893687]",
      top: "top-[-17px]",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="552"
          viewBox="0 0 1440 552"
          fill="none"
        >
          <path
            d="M1446 153.891C900 -50.0399 480.012 -52.5503 -66 153.891V552H1446V153.891Z"
            fill="#893687"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Subscriptions",
      backgroundColor: "bg-darkPurple",
      top: "top-[60px]",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="553"
          viewBox="0 0 1440 553"
          fill="none"
        >
          <path
            d="M1442 154.17C896 -50.1306 476.012 -52.6455 -70 154.17V553H1442V154.17Z"
            fill="#16022A"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className=" bg-[#240046;]  relative mb-[-50px] h-[552px] isolate">
      <Image src={coloredWave} alt="" className=" w-full object-cover" />
      <div className=" absolute z-50 bottom-[-350px] left-[50%] translate-x-[-50%] w-full">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="553"
          viewBox="0 0 1440 553"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M1442 154.17C896 -50.1306 476.012 -52.6455 -70 154.17V553H1442V154.17Z"
            fill="#16022A"
          />
        </svg>
      </div>
      <p className=" absolute top-[32px] font-manrope text-[48px] font-extrabold text-white z-[-1] rotate-[-17deg] left-[70px]">
        Store
      </p>
      <p className=" absolute top-[100px] font-manrope text-[48px] font-extrabold text-darkPurple   rotate-[12.671deg] right-[190px]">
        Payment Link
      </p>
      <p className=" absolute top-[210px] font-manrope text-[48px] font-extrabold text-darkPurple   rotate-[-8.911deg] left-[230px]">
        Invoices
      </p>
      <p className=" absolute top-[340px] font-manrope text-[48px] font-extrabold text-white  rotate-[11.163deg] right-[190px]">
        Subscriptions
      </p>
    </div>
  );
}
