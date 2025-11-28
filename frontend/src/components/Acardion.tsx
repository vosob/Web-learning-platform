import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { acardionList } from "@/source/Acardion";

export const Acardion = () => {
  return (
    <section className="container">
      <h2 className="font-bold text-center text-4xl mb-12">
        Frequently Asked <span className="text-green-accent">Questions</span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-[650px] mx-auto bg-gray-900 rounded-xl"
      >
        {acardionList.map((item) => (
          <AccordionItem key={item.id} value={`item-${item.id}`}>
            <AccordionTrigger className="px-6">{item.title}</AccordionTrigger>

            <AccordionContent className="flex flex-col gap-4 text-balance pl-6">
              <p>{item.content}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
