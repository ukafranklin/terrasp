import { Input } from "../ui/input";

export default function InputField({ label, value, ...rest }) {
  return (
    <>
      <label className=" text-barlow mb-2 text-sm font-medium text-[#0A0A0A]">
        {label}
      </label>
      <Input
        {...rest}
        className=" border-solid border border-[#DBE0E4] shadow-sm  bg-white rounded-md px-[14px] py-[10px]"
      />
    </>
  );
}
