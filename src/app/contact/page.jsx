import AccordionComponent from "@/components/common/AccordionComponent";
import ContactForm from "@/components/contact/ContactForm";
import HeroSection from "@/components/contact/HeroSection";
import GetStarted from "@/components/home/GetStarted";
import { faqData } from "@/data";

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
