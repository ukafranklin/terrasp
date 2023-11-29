"use client";
import { headphone } from "@/assets";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import InputField from "./InputField";
import PhoneInput from "./PhoneInput";

export default function ContactForm() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [success, setSuccess] = useState("");
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
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r63yug7",
        "template_hzickql",
        formRef.current,

        "u1CSpkPJwZQkHm9kL"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            setSuccess(
              "Message sent successfully. My team will reach out to you soon"
            );
          }
        },
        (error) => {
          console.log(error.text);
          setSuccess("Something went wrong, please try again");
        }
      );
    resetFormData();
  };
  console.log(formData);
  return (
    <div className=" pt-[53px] lg:pt-[79px] pb-[54px] pr-[37px] md:pr-[50px] lg:pr-0 lg:pl-[170px] bg-[#F7EFF7;] pl-[37px] flex justify-between items-center ">
      <div className=" w-full lg:w-[45%] ">
        <h2 className=" text-darkPurple font-barlow text-[35px] font-bold ">
          Start A Conversation
        </h2>
        <form ref={formRef} className=" w-full lg:w-[80%]" onSubmit={sendEmail}>
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

              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="  border-0 rounded-none bg-transparent"
              />
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
              onChange={handleChange}
              rows={3}
            />
          </div>
          <div className=" mt-2">
            <ReCAPTCHA sitekey="6LeWeB4pAAAAAO0yiWHbjCvpmmFRXpMigiV2IqrR" />
          </div>
          <div>
            <p className="text-sm m-2 capitalize text-darkPurple font-cairo">
              {success}
            </p>
          </div>
          <div>
            <Button
              type="submit"
              className=" bg-yellow mt-5 text-darkPurple font-manrope text-[15px] font-bold py-[19px] px-[51px]"
            >
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
