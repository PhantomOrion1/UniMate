
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

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
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:pr-10 leading-relaxed">
              <span className="font-semibold text-unimate-500">Ask questions</span> about subject assessments or{" "}
              <span className="font-semibold text-unimate-500">compare different subjects</span> with our AI chatbot
              to make informed decisions about your academic path.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-unimate-500 hover:bg-unimate-600 text-white text-lg px-6 py-6 h-auto rounded-lg w-full sm:w-auto">
                Get Early Access
              </Button>
              <Button variant="outline" className="border-unimate-500 text-unimate-500 hover:bg-unimate-50 text-lg px-6 py-6 h-auto rounded-lg w-full sm:w-auto flex items-center">
                <MessageCircle className="mr-2" />
                Try Demo Chat
              </Button>
            </div>
            <div className="text-sm text-gray-500 mt-6">
              <p>No sign-up required. Free to use.</p>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-center animate-float">
          <div className="relative w-full max-w-md">
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6">
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="ml-4 text-sm text-gray-500">UniMate Analysis</div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="h-2 bg-unimate-soft-purple rounded w-3/4 mb-2"></div>
                <div className="h-2 bg-unimate-soft-purple rounded w-1/2 mb-2"></div>
                <div className="h-2 bg-unimate-soft-purple rounded w-2/3"></div>
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <p className="font-medium text-sm text-gray-700 mb-2">Eligible Subjects</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-600">COMP3000</div>
                    <div className="text-xs text-green-600 font-medium">Recommended</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-600">MATH2023</div>
                    <div className="text-xs text-unimate-purple font-medium">High Rating</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-600">ECON1101</div>
                    <div className="text-xs text-gray-500 font-medium">Breadth Requirement</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-unimate-soft-purple mt-4 p-3 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-unimate-deep-purple font-medium">
                    Progress to Degree
                  </div>
                  <div className="text-xs text-unimate-deep-purple font-bold">
                    74%
                  </div>
                </div>
                <div className="w-full bg-white h-2 rounded-full mt-1">
                  <div className="bg-gradient-to-r from-unimate-purple to-unimate-deep-purple h-2 rounded-full w-3/4"></div>
                </div>
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
            <p className="text-3xl font-bold text-gray-700">1</p>
            <p className="text-gray-500">University</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-700">95%</p>
            <p className="text-gray-500">Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-700">10,000+</p>
            <p className="text-gray-500">Courses Analyzed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
