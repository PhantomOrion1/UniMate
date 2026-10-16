import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/progress";
import { Loader2, ArrowLeft, Upload } from "lucide-react";
import { Link } from "react-router-dom";

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [transcript, setTranscript] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setUploadProgress(0);

    try {
      // Simulate file upload progress
      if (transcript) {
        // Simulate chunked upload with progress
        for (let progress = 0; progress <= 100; progress += 10) {
          await new Promise(resolve => setTimeout(resolve, 200));
          setUploadProgress(progress);
        }
      }

      // Simulate final API call
      await new Promise(resolve => setTimeout(resolve, 500));

      toast({
        title: "You're on the list!",
        description: "We'll notify you as soon as UniMate is ready.",
      });

      setEmail('');
      setTranscript(null);
      setUploadProgress(0);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 10MB",
          variant: "destructive",
        });
        e.target.value = '';
        return;
      }
      setTranscript(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-24">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-unimate-500 hover:text-unimate-600 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <img
                src="/assets/68a7f19c-23a8-4976-8d08-acec778551c2.png"
                alt="UniMate Logo"
                className="h-16 w-auto"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Join the Waitlist</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Be among the first to experience UniMate's intelligent course planning and get early access to exclusive features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="border-gray-200 focus:border-unimate-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="transcript" className="block">
                    Academic transcript (optional)
                  </Label>
                  <p className="text-sm text-gray-500 mb-2">
                    Upload your transcript to help us personalise your experience when we launch.
                    Maximum file size: 10MB.
                  </p>
                  <div className="relative">
                    <Input
                      id="transcript"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      disabled={isSubmitting}
                      className="border-gray-200 focus:border-unimate-500"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <Upload className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                  {transcript && (
                    <div className="space-y-2">
                      <p className="text-sm text-green-600 flex items-center">
                        <span className="bg-green-50 rounded-full p-1 mr-2">
                          <svg className="h-3 w-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {transcript.name}
                      </p>
                      {isSubmitting && uploadProgress > 0 && (
                        <div className="space-y-1">
                          <Progress value={uploadProgress} className="h-2" />
                          <p className="text-xs text-gray-500 text-right">{uploadProgress}%</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-unimate-500 hover:bg-unimate-600 text-white"
                  disabled={isSubmitting || !email}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {transcript ? "Uploading..." : "Joining..."}
                    </span>
                  ) : (
                    "Join Waitlist"
                  )}
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Join Early?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-unimate-50 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-4 w-4 text-unimate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600">Priority access to all features when we launch</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-unimate-50 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-4 w-4 text-unimate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600">Exclusive early-bird benefits and rewards</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-unimate-50 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-4 w-4 text-unimate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600">Shape the future of UniMate with your feedback</p>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-unimate-500 to-unimate-600 rounded-xl shadow-lg p-8 text-white">
                <h2 className="text-2xl font-semibold mb-4">Have Questions?</h2>
                <p className="mb-6 opacity-90">
                  Check out our FAQ section or reach out to our team directly.
                </p>
                <div className="flex flex-col space-y-4">
                  <Link to="/#faq">
                    <Button variant="secondary" className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20">
                      View FAQ
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="secondary" className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-8 text-center max-w-2xl mx-auto">
            By joining the waitlist, you agree to receive updates about UniMate.
            We'll never share your information with third parties.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Waitlist; 