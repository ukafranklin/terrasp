import { deskWave, mobileWave } from "@/assets";
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
      <Image
        src={deskWave}
        alt=""
        className=" w-full object-fill hidden lg:block"
      />
      <Image
        src={mobileWave}
        alt=""
        className="  block lg:hidden w-full object-fill"
      />
      <div className=" absolute lg:block hidden z-50 bottom-[-300px] left-[50%] translate-x-[-50%] w-full">
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
      <div className=" lg:hidden  absolute z-50 bottom-[40px] left-[50%] translate-x-[-50%] w-full">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="332"
          viewBox="0 0 430 332"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M581 92.5577C315.222 -30.0965 110.784 -31.6063 -155 92.5577V332H581V92.5577Z"
            fill="#16022A"
          />
        </svg>
      </div>
    </div>
  );
}
