
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRef, useState, useEffect } from "react";

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current!);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const faqs = [
    {
      question: "How does UniMate protect my personal data?",
      answer:
        "UniMate prioritizes your privacy. We only store anonymized academic information without any personally identifying details. Your transcript data is used to improve our recommendations but is never linked back to you individually.",
    },
    {
      question: "Is UniMate available for all universities?",
      answer:
        "We're rapidly expanding our university coverage. Currently, UniMate supports major universities across Australia, with plans to expand internationally. If your university isn't supported yet, let us know and we'll prioritize adding it.",
    },
    {
      question: "How accurate are the subject recommendations?",
      answer:
        "UniMate's recommendations are based on three key factors: your academic history, aggregated performance data, and sentiment analysis from student reviews. Our AI continuously improves as more students use the platform, making recommendations increasingly accurate over time.",
    },
    {
      question: "Will UniMate always be free?",
      answer:
        "UniMate's core features will always be available for free. As we grow, we may introduce premium features under a freemium model, but our commitment is to keep the essential academic planning tools accessible to all students.",
    },
    {
      question: "Can I use UniMate on my mobile device?",
      answer:
        "Yes! UniMate is designed to be fully responsive and works seamlessly on desktops, tablets, and mobile phones. Access your academic planning tools wherever you are.",
    },
  ];

  return (
    <section ref={sectionRef} id="faq" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about UniMate and how it can help with
            your academic journey.
          </p>
        </div>

        <div
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-gray-800 font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="text-gray-600">
            Don't see your question here?{" "}
            <a href="#" className="text-unimate-500 hover:text-unimate-600 underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
