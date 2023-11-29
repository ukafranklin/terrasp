import CompliancePolicy from "@/components/legal/CompliancePolicy";
import HeroSection from "@/components/legal/HeroSection";
export const metadata = {
  title: "Legal & Compliance",
  description:
    "Learn about TerraSwitch's commitment to legal compliance and security, ensuring the highest standards in payment processing.",
};
export default function page() {
  return (
    <>
      <HeroSection />
      <CompliancePolicy />
    </>
  );
}
