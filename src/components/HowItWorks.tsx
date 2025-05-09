
import { useEffect, useRef, useState } from "react";

type StepProps = {
  number: number;
  title: string;
  description: string;
  index: number;
  isVisible: boolean;
};

const Step = ({ number, title, description, index, isVisible }: StepProps) => {
  const animationDelay = `${index * 200}ms`;

  return (
    <div
      className={`flex transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: animationDelay }}
    >
      <div className="mr-6 flex-shrink-0">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-unimate-500 text-white text-xl font-bold">
          {number}
        </div>
        {index < 3 && (
          <div className="h-full w-0.5 bg-unimate-200 mx-auto mt-2"></div>
        )}
      </div>
      <div className="pb-10">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  const steps = [
    {
      number: 1,
      title: "Upload Your Transcript",
      description:
        "Simply upload your academic transcript - your data remains private and secure with no personally identifying information stored.",
    },
    {
      number: 2,
      title: "Review Your Analysis",
      description:
        "UniMate instantly analyzes your completed courses and identifies remaining requirements, prerequisites, and breadth options.",
    },
    {
      number: 3,
      title: "Explore Recommendations",
      description:
        "Browse recommended subjects based on your academic history, student reviews, and aggregated performance data.",
    },
    {
      number: 4,
      title: "Create Your Wishlist",
      description:
        "Add potential courses to your wishlist and plan your ideal academic schedule for future semesters.",
    },
  ];

  return (
    <section ref={sectionRef} id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            How UniMate Works
          </h2>
          <p className="text-xl text-gray-600">
            Follow these simple steps to optimize your academic journey with data-driven insights.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-700 transform delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center justify-center px-6 py-3 bg-unimate-100 rounded-full text-unimate-700">
            <span className="font-semibold">Coming Soon</span>
            <span className="ml-2 px-2 py-1 bg-unimate-500 text-white rounded-full text-xs">
              Beta
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
