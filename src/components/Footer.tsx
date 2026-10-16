import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img
                src="/assets/68a7f19c-23a8-4976-8d08-acec778551c2.png"
                alt="UniMate Logo"
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-bold">UniMate</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-xs">
              Helping university students make smarter academic choices with
              data-driven insights.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/unimate-io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/unimate.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap w-full md:w-2/3 justify-end">
            <div className="w-1/2 md:w-1/3 mb-8 md:mb-0">
              <h3 className="font-bold mb-4 text-lg">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/#features"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#how-it-works"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    to="/waitlist"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Early Access
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-1/2 md:w-1/3 mb-8 md:mb-0">
              <h3 className="font-bold mb-4 text-lg">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/#faq"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/3 mt-8 md:mt-0">
              <h3 className="font-bold mb-4 text-lg">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} UniMate. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/privacy"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
