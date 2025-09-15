import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "motion/react";

export default function FaqSection() {

    return (
        <section className="max-w-1400 mx-auto scroll-mt-24 px-4">
            <motion.h2
                className="md:mt-25 mt-12 text-2xl sm:text-5xl font-bold text-start mb-5"
                initial={ { opacity: 0, y: 30 } }
                whileInView={ { opacity: 1, y: 0 } }
                viewport={ { once: true } }
                transition={ { duration: 0.6 } }
            >
                FAQ
            </motion.h2>

            <motion.div
                className="w-full mx-auto my-8"
                initial={ { opacity: 0 } }
                whileInView={ { opacity: 1 } }
                viewport={ { once: true } }
                transition={ { duration: 0.6, delay: 0.2 } }
            >
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="border-b border-[#4F4F4F]">
                        <AccordionTrigger className="text-lg font-semibold font-quicksand">
                            What is your return policy?
                        </AccordionTrigger>
                        <AccordionContent className="text-base font-quicksand text-gray-400">
                            We offer a 30-day return policy with a full refund, provided the product is in its
                            original condition.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border-b border-[#4F4F4F]">
                        <AccordionTrigger className="text-lg font-semibold font-quicksand">
                            How long does shipping take?
                        </AccordionTrigger>
                        <AccordionContent className="text-base font-quicksand text-gray-400">
                            Shipping usually takes 5–7 business days depending on your location.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border-b border-[#4F4F4F]">
                        <AccordionTrigger className="text-lg font-semibold font-quicksand">
                            Do you offer international shipping?
                        </AccordionTrigger>
                        <AccordionContent className="text-base font-quicksand text-gray-400">
                            Yes! We ship internationally, and delivery times vary depending on the destination
                            country.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </motion.div>
        </section>
    )
}
