import { deskWave, mobileWave } from "@/assets";
import Image from "next/image";

export default function WavySection() {
  return (
    <div className=" bg-[#240046;]  relative mb-[-50px] max-[400px]:h-[500px] h-[552px] isolate">
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
      <div className=" absolute  lg:block hidden z-50  max-[1280px]:bottom-[-250px]  bottom-[-300px] left-[50%] translate-x-[-50%] w-full">
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
      <div className=" lg:hidden  absolute z-50 sm:bottom-[-80px] min-w-[400px]:bottom-[-90px]  bottom-[50px] left-[50%] translate-x-[-50%] w-full">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="280"
          viewBox="0 0 430 280"
          preserveAspectRatio="none"
          fill="none"
          className=" min-w-[400px]:h-[200px]"
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
