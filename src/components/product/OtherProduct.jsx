import BigLink from "../common/BigLink";

export default function OtherProduct() {
  return (
    <div className=" px-[170px] pt-10 isolate pb-[200px] relative bg-[#240046]">
      <div className="absolute z-[-1]  top-[-220px] left-0 w-full ">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          preserveAspectRatio="none"
          height="505"
          viewBox="0 0 1440 505"
          fill="none"
        >
          <path
            d="M237 33.7845L0 188.907V505H1442V211.362L353 2.45082C291.5 -6.8734 279 11.8863 237 33.7845Z"
            fill="#240046"
          />
        </svg>
      </div>
      <div
        className=" min-h-[700px] flex justify-between mb-[100px]"
        id="store"
      >
        <div className=" w-[45.3%] self-start min-h-[503px] border-dashed border border-yellow rounded-[30px] px-[53px] pt-[50px] h-auto pb-[63px] pr-[63px]">
          <h2 className="  text-[41px] font-barlow font-bold leading-[58px] text-yellow">
            Store
          </h2>
          <p className=" mt-[15px] mb-11 text-justify text-white text-lg font-medium font-cairo capitalize">
            Give your customers the gift of modern, frictionless, painless
            payments. Integrate TerraSwitach once and let your customers pay you
            however they want. Give your customers the gift of modern,
            frictionless, painless payments. Integrate TerraSwitach once and let
            your customers pay you however they want.
          </p>
          <BigLink
            href="https://test.pg.terraswitch.ng/register"
            bg="bg-white"
            color="text-darkPurple"
          >
            Create A Store
          </BigLink>
        </div>
        <div
          id="api"
          className=" w-[45.3%] self-end  min-h-[503px] border-dashed border border-yellow rounded-[30px] px-[53px] pt-[50px] pb-[63px] pr-[63px]"
        >
          <h2 className="  text-[41px] font-barlow font-bold leading-[58px] text-yellow">
            API
          </h2>
          <p className=" mt-[15px] mb-11 text-justify text-white text-lg font-medium font-cairo capitalize">
            Give your customers the gift of modern, frictionless, painless
            payments. Integrate TerraSwitach once and let your customers pay you
            however they want. Give your customers the gift of modern,
            frictionless, painless payments. Integrate TerraSwitach once and let
            your customers pay you however they want.
          </p>
          <BigLink
            href="https://terrapg.readme.io/reference/getting-started-with-your-direct-api"
            bg="bg-white"
            color="text-darkPurple"
          >
            See Documentation
          </BigLink>
        </div>
      </div>
      <p className="  mb-11 text-justify text-white text-lg font-medium font-cairo capitalize max-w-[599px] w-full">
        Give your customers the gift of modern, frictionless, painless payments.
        Integrate TerraSwitach once and let your customers pay you however they
        want. Give your customers the gift of modern, frictionless, painless
        payments. Integrate TerraSwitach once and let your customers pay you
        however they want.{" "}
      </p>
    </div>
  );
}
