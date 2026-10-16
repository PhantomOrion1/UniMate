import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate sending message
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setName('');
      setEmail('');
      setMessage('');
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about UniMate? We're here to help you make the most of your academic journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={isSubmitting}
                    placeholder="Your name"
                    className="border-gray-200 focus:border-unimate-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                    placeholder="your.email@example.com"
                    className="border-gray-200 focus:border-unimate-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    disabled={isSubmitting}
                    placeholder="How can we help?"
                    className="min-h-[150px] border-gray-200 focus:border-unimate-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-unimate-500 hover:bg-unimate-600 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-unimate-50 rounded-full p-3">
                    <Mail className="h-6 w-6 text-unimate-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Contact Details</h3>
                    <p className="text-gray-600">Our contact details are being updated.</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Please check back for updated ways to reach the UniMate team.
                </p>
              </div>

              <div className="bg-gradient-to-br from-unimate-500 to-unimate-600 rounded-xl shadow-lg p-8 text-white">
                <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
                <div className="space-y-4">
                  <Link 
                    to="/waitlist" 
                    className="block hover:opacity-80 transition-opacity"
                  >
                    → Join the Waitlist
                  </Link>
                  <Link 
                    to="/#features" 
                    className="block hover:opacity-80 transition-opacity"
                  >
                    → Explore Features
                  </Link>
                  <Link 
                    to="/#faq" 
                    className="block hover:opacity-80 transition-opacity"
                  >
                    → View FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 