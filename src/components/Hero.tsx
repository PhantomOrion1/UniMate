
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Plan Your Academic Journey{" "}
              <span className="text-transparent bg-clip-text bg-blue-gradient">
                Smarter
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:pr-10 leading-relaxed">
              UniMate helps university students choose the right courses by analyzing
              transcripts and providing personalized recommendations based on
              prerequisites, reviews, and past performance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-unimate-500 hover:bg-unimate-600 text-white text-lg px-6 py-6 h-auto rounded-lg w-full sm:w-auto">
                Get Early Access
              </Button>
              <Button variant="outline" className="border-unimate-500 text-unimate-500 hover:bg-unimate-50 text-lg px-6 py-6 h-auto rounded-lg w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative animate-float">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-unimate-300 to-unimate-500 rounded-lg blur opacity-30"></div>
            <div className="relative bg-white p-6 rounded-lg shadow-xl">
              <div className="bg-gradient-to-r from-unimate-100 to-unimate-200 p-4 rounded-md mb-4">
                <img
                  src="/lovable-uploads/68a7f19c-23a8-4976-8d08-acec778551c2.png"
                  alt="UniMate Mascot"
                  className="h-24 mx-auto"
                />
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-100 rounded-full w-3/4"></div>
                <div className="h-4 bg-gray-100 rounded-full"></div>
                <div className="h-4 bg-gray-100 rounded-full w-5/6"></div>
                <div className="h-8 bg-unimate-100 rounded-md w-full mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-700">15,000+</p>
            <p className="text-gray-500">Students</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-700">25+</p>
            <p className="text-gray-500">Universities</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-700">95%</p>
            <p className="text-gray-500">Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-700">50,000+</p>
            <p className="text-gray-500">Courses Analyzed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
