import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function AccordionComponent({ data, title, description }) {
  return (
    <>
      {title && (
        <h2 className=" text-[36px] text-darkPurple font-barlow font-bold">
          {title}
        </h2>
      )}
      {description && (
        <p className=" text-lg font-cairo font-medium text-darkPurple capitalize ">
          {description}
        </p>
      )}
      <div className=" w-full mt-8">
        <Accordion type="single" collapsible>
          {data.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className=" font-barlow font-semibold text-[25px] text-darkPurple">
                {item.key}
              </AccordionTrigger>
              <AccordionContent className=" p-9 text-justify text-lg font-cairo font-medium text-darkPurple capitalize">
                {item.value}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}
