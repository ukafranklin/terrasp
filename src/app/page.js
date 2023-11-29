import FeatureSection from "@/components/home/FeatureSection";
import GetStarted from "@/components/home/GetStarted";
import HeroSection from "@/components/home/HeroSection";
import MapSection from "@/components/home/MapSection";
import Partners from "@/components/home/Partners";
import PaymentSection from "@/components/home/PaymentSection";
import SeamlessSection from "@/components/home/SeamlessSection";
import TestimonialSection from "@/components/home/TestimonialSection";
export const metadata = {
  title: "HomePage",
  description:
    "Experience secure, innovative payment solutions with TerraSwitch - your trusted partner in seamless transaction processing.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <Partners />
      <SeamlessSection />
      <PaymentSection />
      <TestimonialSection />
      <FeatureSection />
      <MapSection />
      <GetStarted />
    </>
  );
}
