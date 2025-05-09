
import React, { useEffect, useState, useRef } from 'react';
import { BookOpen, Search, GraduationCap, Users } from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  index 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current!);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const animationDelay = `${index * 200}ms`;

  return (
    <div 
      ref={ref} 
      className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: animationDelay }}
    >
      <div className="bg-unimate-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        <Icon className="text-unimate-600 h-8 w-8" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(featuresRef.current!);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);
  
  const features = [
    {
      icon: BookOpen,
      title: "Transcript Analysis",
      description: "Upload your transcript and get instant insights about your completed courses and remaining requirements."
    },
    {
      icon: Search,
      title: "Subject Recommendations",
      description: "Receive personalized course suggestions based on your academic history, student reviews, and performance data."
    },
    {
      icon: GraduationCap,
      title: "Academic Planning",
      description: "Visualize your academic roadmap and ensure you're on track to meet all graduation requirements."
    },
    {
      icon: Users,
      title: "Community Insights",
      description: "Benefit from aggregated anonymized data and sentiment analysis from student discussions."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div 
          ref={featuresRef} 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Intelligent Features for Smarter Course Selection
          </h2>
          <p className="text-xl text-gray-600">
            UniMate combines powerful analysis with user-friendly tools to make your academic planning effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
