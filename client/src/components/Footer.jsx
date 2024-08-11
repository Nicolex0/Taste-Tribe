import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import Image from "../assets/logo.svg";
const Footer = () => {
  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "Recipes", href: "/recipes" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contactUs" },
  ];

  const socialMediaIcons = [
    { icon: <FaTiktok size={20} />, href: "https://www.tiktok.com/" },
    { icon: <FaFacebookSquare size={20} />, href: "https://www.facebook.com/" },
    { icon: <FaInstagram size={20} />, href: "https://www.instagram.com/" },
    { icon: <FaYoutube size={20} />, href: "https://www.youtube.com/" },
  ];

  return (
    <>
      <footer className="bottom-0 border-t border-gray-200 dark:border-gray-900 w-full shadow bg-green-800 dark:bg-dark-bg">
        <div className="w-full max-w-screen-xl mx-auto p-4 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            {/* Logo and Brand Name on the Left */}
            <div className="flex justify-center sm:justify-start sm:order-1">
              <div className="flex items-center">
                <img src={Image} className=" mr-3 " />
                <div className="self-center text-md capitalize font-semibold sm:text-2xl">
                  <span className="text-yellow-600">Taste Tribe</span>
                </div>
              </div>
            </div>

            {/* Navigation Links in the Middle */}
            <ul className="flex justify-center items-center mb-6 sm:mb-0 sm:order-2 space-x-4">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-50 text-lg font-semibold  hover:underline dark:text-gray-50"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media Icons on the Right */}
            <div className="flex justify-center sm:justify-end sm:order-3">
              {socialMediaIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-50 dark:text-gray-50 mx-2"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <hr className="my-3 border-gray-200 sm:mx-auto shadow dark:border-gray-700 lg:my-4" />
          <h4 className="block text-md text-center font-medium capitalize text-gray-200 dark:text-gray-50 sm:text-center">
            &copy; {new Date().getFullYear()} Taste Tribe. All rights reserved.
          </h4>
        </div>
      </footer>
    </>
  );
};

export default Footer;