import Gallery from "@/components/about/Gallery";
import HeroSection from "@/components/about/HeroSection";
import PoweredSection from "@/components/about/PoweredSection";
import TeamMembers from "@/components/about/TeamMembers";
import Values from "@/components/about/Values";
import GetStarted from "@/components/home/GetStarted";

export const metadata = {
  title: "About Us",
  description:
    "Discover TerraSwitch: Leading in payment innovation with a commitment to security, reliability, and exceptional client service.",
};
export default function page() {
  return (
    <>
      <HeroSection />
      <PoweredSection />
      <TeamMembers />
      <Values />
      <Gallery />
      <GetStarted />
    </>
  );
}
