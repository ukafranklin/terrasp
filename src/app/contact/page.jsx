import AccordionComponent from "@/components/common/AccordionComponent";
import ContactForm from "@/components/contact/ContactForm";
import HeroSection from "@/components/contact/HeroSection";
import GetStarted from "@/components/home/GetStarted";
import { faqData } from "@/data";
export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with TerraSwitch for top-notch payment solutions – our expert team is ready to assist and elevate your business.",
};

export default function page() {
  return (
    <>
      <HeroSection />
      <ContactForm />
      <div
        className=" md:px-[50px] px-[37px] lg:px-[170px] py-[81px] lg:py-[120px]"
        id="FAQ"
      >
        <AccordionComponent
          title="Frequently Asked Questions (FAQ)"
          data={faqData}
        />
      </div>

      <GetStarted />
    </>
  );
}
