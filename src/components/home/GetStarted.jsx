import BigLink from "../common/BigLink";

export default function GetStarted() {
  return (
    <div className=" flex items-center flex-wrap justify-between md:px-[50px] px-[37px] lg:px-[170px] bg-[#FF9E01] py-[73px] lg:py-[69px]">
      <div className=" mb-7 lg:mb-0">
        <h3 className=" text-[30px] capitalize text-[#240046] font-cairo font-[700]">
          To get Started?
        </h3>
        <p className=" font-semibold font-cairo text-[#240046]  text-[30px]">
          Step Up A Free Account Today
        </p>
      </div>
      <div>
        <BigLink href="https://test.pg.terraswitch.ng/register">
          Create a Free Account
        </BigLink>
      </div>
    </div>
  );
}
