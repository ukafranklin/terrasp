import { productsSections } from "@/data";
import FlexCard from "../common/FlexCard";

export default function ProductsFeatures() {
  return (
    <div>
      {productsSections.map((product) => (
        <FlexCard
          key={product.id}
          title={product.title}
          link={product.link}
          description={product.description}
          href={product.href}
          cta={product.cta}
          reverse={product.reverse}
          bg={product.backgroundColor}
          list={product.list}
          image={product.image}
          id={product.id}
        />
      ))}
    </div>
  );
}
