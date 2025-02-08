import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AssistProps {
  data: {
    title: string;
    desc: string;
  }[];
  title: string;
  summary: string;
}

const Assist: React.FC<AssistProps> = ({ data, title, summary }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto">
          <div className=" mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-4xl mt-4 mb-8 text-center">
              {title}
            </h2>
            <p className="lg:w-3/4 mx-auto leading-relaxed text-base text-justify my-10">
              {summary}
            </p>
            <div className="flex justify-center">
              <Accordion
                type="single"
                collapsible
                className="bg-gray-200 w-full md:w-2/3 lg:w-2/3 p-2"
              >
                {data.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="ml-2 md:ml-10 text-sm md:text-lg font-semibold">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="bg-white p-2 md:p-10 text-sm md:text-lg">
                      <div dangerouslySetInnerHTML={{ __html: item.desc }} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Assist;
