import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your data.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We collect the following types of information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Academic transcripts (optional)</li>
                  <li>Email address</li>
                  <li>Course selection and preferences</li>
                  <li>Usage data and interactions with our platform</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <div className="space-y-4 text-gray-600">
                <p>Your information is used to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide personalized course recommendations</li>
                  <li>Improve our AI models and prediction accuracy</li>
                  <li>Analyze trends and enhance user experience</li>
                  <li>Send important updates about our service</li>
                </ul>
                <p>
                  We never sell your personal data to third parties or use it for advertising purposes.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Protection</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We implement robust security measures to protect your data:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>End-to-end encryption for all sensitive data</li>
                  <li>Regular security audits and updates</li>
                  <li>Strict access controls and authentication</li>
                  <li>Data anonymization for analytics</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <div className="space-y-4 text-gray-600">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal data</li>
                  <li>Request data deletion</li>
                  <li>Opt-out of communications</li>
                  <li>Update your information</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to This Policy</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <div className="space-y-4 text-gray-600">
                <p>Contact details are currently being updated.</p>
              </div>
            </section>
          </div>

          <p className="text-sm text-gray-500 mt-8 text-center">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 