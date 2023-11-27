"use client";
import DotImage from "../common/DotImage";
import Feature from "../common/Feature";

export default function SeamlessSection() {
  const list = [
    "Collect one-time and recurring payments from your app or website",
    "Retrieve all your transaction and customer data",
    "Verify the identity of customers",
  ];
  return (
    <div className=" flex gap-[50px] pt-[56px] px-[170px] pb-[127px]">
      <DotImage />
      <Feature
        list={list}
        description="Give your customers the gift of modern, frictionless, painless payments. Integrate TerraSwitach once and let your customers pay you however they want."
      />
    </div>
  );
}
