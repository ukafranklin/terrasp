import { LuHome, LuInbox } from "react-icons/lu";
import { PiPhoneCallFill } from "react-icons/pi";

export default function HeroSection() {
  const contactDetails = [
    {
      id: 1,
      icon: <LuInbox />,
      detail: "info@terraswitch.ng",
    },
    {
      id: 1,
      icon: <PiPhoneCallFill />,
      detail: "+234 (0) 808 951 5550",
    },
    {
      id: 1,
      icon: <LuHome />,
      detail: "5A, Iweanya Ugbogor Street, Lekki Phase 1, Lagos, Nigeria.",
    },
  ];
  return (
    <>
      <div className=" bg-purpleGradient h-[460px] flex items-center justify-center ">
        <div className=" text-center text-white max-w-[446px] mx-auto">
          <h1 className=" font-barlow text-[50px] leading-[116%] font-bold mb-7">
            Got Questions Or Inquiries?
          </h1>
          <p className="capitalize text-lg font-cairo opacity-[0.85]">
            Drop us A line
          </p>
        </div>
      </div>
      <div className=" flex justify-between items-center px-[170px] py-[125px]">
        <div>
          <h2 className=" text-darkPurple font-barlow font-bold mb-6 text-[35px]">
            Contact Information
          </h2>
          <div className=" mt-2">
            {contactDetails.map((contact, index) => (
              <div
                key={contact.id}
                className=" flex items-center gap-2 font-cairo capitalize mb-2 text-lg font-medium text-darkPurple"
              >
                <span>{contact.icon}</span>
                <p className={` ${index === 0 && "underline"}`}>
                  {contact.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.645739429615!2d3.4569492740628607!3d6.439520724135488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4fff0e1c30d%3A0x6a46a5c6eae79c6!2s5a%20Iweanya%20Ugbogoh%20Cres%2C%20Lekki%20Phase%20I%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700780171336!5m2!1sen!2sng"
            width="460"
            height="292"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
