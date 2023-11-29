import CloudImage from "../common/CloudImage";

export default function Gallery() {
  return (
    <div className="lg:text-center md:px-[50px] px-[37px] lg:px-[170px] pt-[69px] pb-[56px]">
      <h2 className=" text-darkPurple text-[40px] lg:text-[50px] font-barlow font-bold mb-3 lg:mb-6">
        Gallery
      </h2>
      <p className=" lg:max-w-[576px] w-full mx-auto font-cairo text-darkPurple text-lg font-medium">
        Terra in Pictures
      </p>

      <div className=" mt-6 grid gap-2 grid-cols-3 lg:grid-cols-8 lg:h-[480px] lg:grid-rows-4">
        <div className=" lg:col-span-2 lg:row-span-3">
          <CloudImage
            className="w-full h-full object-cover"
            src="Terra/team4_2x_hlv895"
            width={1884}
            height={1884}
          />
        </div>
        <div className="lg:col-span-2 lg:row-span-2">
          <CloudImage
            className="w-full h-full object-cover"
            src="Terra/team2_2x_yogwqs"
            width={1884}
            height={1884}
          />
        </div>
        <div className=" lg:col-span-1 lg:row-span-1">
          <CloudImage
            className="w-full h-full object-cover object-top"
            src="Terra/kayode_2x_ehsbhe"
            width={1884}
            height={1884}
          />
        </div>
        <div className=" lg:col-span-1 lg:row-span-1">
          <CloudImage
            className="w-full h-full object-cover object-top"
            src="Terra/uche_2x_nqtzrj"
            width={1884}
            height={1884}
          />
        </div>
        <div className=" lg:col-span-1 lg:row-span-1">
          <CloudImage
            className="w-full h-full object-cover object-top"
            src="Terra/confi_2x_izmcnt"
            width={1884}
            height={1884}
          />
        </div>
        <div className=" lg:col-span-1 lg:row-span-1">
          <CloudImage
            className="w-full h-full object-cover object-top"
            src="Terra/team3_1x_erimrs"
            width={1884}
            height={1884}
          />
        </div>
        <div className=" lg:col-start-1 lg:row-start-4 lg:col-span-2 lg:row-span-1">
          <CloudImage
            className="w-full h-full object-cover"
            src="Terra/team1_2x_jd0nx1"
            width={1884}
            height={1884}
          />
        </div>
        <div className=" lg:col-span-3 lg:col-start-3 lg:row-start-3 lg:row-span-2">
          <CloudImage
            className="w-full h-full object-cover "
            src="Terra/team2_2x_yogwqs"
            width={1884}
            height={1884}
          />
        </div>
        <div className=" lg:col-span-1 lg:row-span-1">
          <CloudImage
            className="w-full h-full object-cover object-top"
            src="Terra/team5_2x_c95yme"
            width={1884}
            height={1884}
          />
        </div>
        <div className=" lg:col-span-3 lg:row-span-3">
          <CloudImage
            className="w-full h-full object-cover object-top"
            src="Terra/team3_1x_erimrs"
            width={1884}
            height={1884}
          />
        </div>
      </div>
    </div>
  );
}
