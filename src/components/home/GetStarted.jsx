import Link from "next/link";
import BigLink from "../common/BigLink";

export default function GetStarted() {
  return (
    <div className=" flex items-center justify-between px-[170px] bg-[#FF9E01] py-[69px]">
      <div>
        <h3 className=" text-[30px] text-[#240046] font-cairo font-[700]">
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
