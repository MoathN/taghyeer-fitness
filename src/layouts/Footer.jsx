import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gymmawy-purple border-t border-gymmawy-gray/10 text-gymmawy-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand & Description */}
          <div className="space-y-5">
            <Link to="/" className="inline-block">
              <h2 className="text-3xl font-extrabold uppercase tracking-wider text-primary">TAGHYEER</h2>
            </Link>
            <p className="text-gymmawy-gray">
              Transforming lives through fitness, nutrition, and wellness.
              Join our community and start your journey to a healthier you.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white" aria-label="Instagram">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white" aria-label="Facebook">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white" aria-label="Twitter">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="https://tiktok.com" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white" aria-label="TikTok">
                <FaTiktok className="h-5 w-5" />
              </a>
              <a href="https://wa.me/+1234567890" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white" aria-label="WhatsApp">
                <FaWhatsapp className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/workout-plans" className="hover:text-primary transition-colors">Workout Plans</Link>
              </li>
              <li>
                <Link to="/nutrition" className="hover:text-primary transition-colors">Nutrition Guides</Link>
              </li>
              <li>
                <Link to="/trainers" className="hover:text-primary transition-colors">Our Trainers</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/memberships" className="hover:text-primary transition-colors">Memberships</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold uppercase tracking-wider">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MdLocationOn className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>123 Fitness Street, Gym City, Workout 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdPhone className="h-5 w-5 text-primary" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdEmail className="h-5 w-5 text-primary" />
                <span>info@taghyeer.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gymmawy-gray/10 flex flex-col md:flex-row justify-between">
          <p className="text-gymmawy-gray text-sm">
            © {currentYear} TAGHYEER. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <span className="text-sm text-gymmawy-gray">Designed with ♥ for fitness enthusiasts</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
