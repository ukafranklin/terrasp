"use client";
import { headphone } from "@/assets";
import Image from "next/image";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import InputField from "./InputField";
import PhoneInput from "./PhoneInput";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [capVal, setCapVal] = useState();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const resetFormData = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <div className=" pt-[53px] lg:pt-[79px] pb-[54px] pr-[37px] md:pr-[50px] lg:pr-0 lg:pl-[170px] bg-[#F7EFF7;] pl-[37px] flex justify-between items-center ">
      <div className=" w-full lg:w-[45%] ">
        <h2 className=" text-darkPurple font-barlow text-[35px] font-bold ">
          Start A Conversation
        </h2>
        <form className=" w-full lg:w-[80%]">
          <div className=" mb-5">
            <InputField
              value={formData.firstName}
              name="firstName"
              onChange={handleChange}
              label="First Name"
            />
          </div>
          <div className=" mb-5">
            <InputField
              value={formData.firstName}
              name="lastName"
              onChange={handleChange}
              label="Last Name"
            />
          </div>
          <div className=" mb-5">
            <InputField
              type="email"
              value={formData.firstName}
              name="email"
              onChange={handleChange}
              label="Email Address"
            />
          </div>
          <div className=" mb-5">
            <label className=" text-barlow mb-2 text-sm font-medium text-[#0A0A0A]">
              Phone Number(Optional)
            </label>
            <div className=" bg-white flex  rounded-[10px] drop-shadow">
              <PhoneInput />
              <Input className="  border-0 rounded-none bg-transparent" />
            </div>
          </div>

          <div>
            <label className="  block text-barlow mb-2 text-sm font-medium text-[#0A0A0A]">
              Message
            </label>
            <textarea
              className=" w-full resize-none"
              value={formData.message}
              name="message"
              rows={3}
            />
          </div>
          <div className=" mt-2">
            <ReCAPTCHA
              sitekey="6LeWeB4pAAAAAO0yiWHbjCvpmmFRXpMigiV2IqrR"
              onChange={(value) => setCapVal(value)}
            />
          </div>
          <div>
            <Button className=" bg-yellow mt-5 text-darkPurple font-manrope text-[15px] font-bold py-[19px] px-[51px]">
              Send
            </Button>
          </div>
        </form>
      </div>
      <div className=" hidden lg:block w-[53%] ">
        <Image src={headphone} alt="" className=" ml-auto" />
      </div>
    </div>
  );
}
