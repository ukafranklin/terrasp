import HeroSection from "@/components/product/HeroSection";
import OtherProduct from "@/components/product/OtherProduct";
import ProductsFeatures from "@/components/product/ProductsFeatures";
import WavySection from "@/components/product/WavySection";
export const metadata = {
  title: "Products",
  description:
    "Explore TerraSwitch's advanced payment solutions: seamless integration, top-tier security, and unmatched reliability for your business.",
};
export default function page() {
  return (
    <>
      <HeroSection />
      <ProductsFeatures />
      <OtherProduct />
      <WavySection />
    </>
  );
}
