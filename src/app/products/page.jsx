import HeroSection from "@/components/product/HeroSection";
import OtherProduct from "@/components/product/OtherProduct";
import ProductsFeatures from "@/components/product/ProductsFeatures";
import WavySection from "@/components/product/WavySection";

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
