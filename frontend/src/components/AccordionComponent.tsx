import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { accordionList } from "@/source/Accordion";

export const AccordionComponent = () => {
  return (
    <section className="container pb-10">
      <h2 className="font-bold text-center text-4xl mb-12">
        Frequently Asked <span className="text-green-accent">Questions</span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-[650px] mx-auto flex flex-col gap-5"
      >
        {accordionList.map((item) => (
          <AccordionItem
            className="bg-gray-900 rounded-2xl"
            key={item.id}
            value={`item-${item.id}`}
          >
            <AccordionTrigger className="px-6 ">{item.title}</AccordionTrigger>

            <AccordionContent className="flex flex-col text-balance pl-6">
              <p>{item.content}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
