import Link from "next/link";
export default function BigLink({
  bg = "bg-[#240046]",
  children,
  color = "text-white",
  href = "#",
}) {
  return (
    <Link
      href={href}
      className={` ${bg} rounded-[10px] py-[19px] px-[51px] text-[15px] font-manrope font-[700] ${color}`}
    >
      {children}
    </Link>
  );
}
