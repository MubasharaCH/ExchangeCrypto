// components/Footer.js
import { useState } from "react";
import {
  FaDiscord,
  FaTelegram,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaRedditAlien,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { GiWorld } from "react-icons/gi";

const Footer = () => {
  type SectionKey =
    | "about"
    | "products"
    | "business"
    | "learn"
    | "service"
    | "support"
    | "community";
  const [openSections, setOpenSections] = useState<{
    [key in SectionKey]: boolean;
  }>({
    about: false,
    products: false,
    business: false,
    learn: false,
    service: false,
    support: false,
    community: false,
  });

  // Function to toggle the section
  const toggleSection = (section: SectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  // Declare data arrays for each section
  const communityLinks = [
    { label: "Discord", icon: <FaDiscord size={24} /> },
    { label: "Telegram", icon: <FaTelegram size={24} /> },
    { label: "Twitter", icon: <FaTwitter size={24} /> },
    { label: "Facebook", icon: <FaFacebook size={24} /> },
    { label: "Instagram", icon: <FaInstagram size={24} /> },
    { label: "Reddit", icon: <FaRedditAlien size={24} /> },
    { label: "YouTube", icon: <FaYoutube size={24} /> },
    { label: "WhatsApp", icon: <FaWhatsapp size={24} /> },
  ];

  const aboutLinks = [
    { label: "About", link: "#" },
    { label: "Careers", link: "#" },
    { label: "Announcements", link: "#" },
    { label: "News", link: "#" },
    { label: "Press", link: "#" },
    { label: "Legal", link: "#" },
    { label: "Terms", link: "#" },
    { label: "Privacy", link: "#" },
    { label: "Building Trust", link: "#" },
    { label: "Community", link: "#" },
    { label: "Risk Warning", link: "#" },
    { label: "Notices", link: "#" },
    { label: "Downloads", link: "#" },
    { label: "Desktop Application", link: "#" },
  ];

  const productLinks = [
    { label: "Exchange", link: "#" },
    { label: "Buy Crypto", link: "#" },
    { label: "Pay", link: "#" },
    { label: "Academy", link: "#" },
    { label: "Live", link: "#" },
    { label: "Tax", link: "#" },
    { label: "Gift Card", link: "#" },
    { label: "Launchpool", link: "#" },
    { label: "Auto-Invest", link: "#" },
    { label: "ETH Staking", link: "#" },
    { label: "NFT", link: "#" },
    { label: "BABT", link: "#" },
    { label: "Research", link: "#" },
    { label: "Charity", link: "#" },
  ];

  const businessLinks = [
    { label: "P2P Merchant Application", link: "#" },
    { label: "P2Pro Merchant Application", link: "#" },
    { label: "Listing Application", link: "#" },
    { label: "Institutional & VIP Services", link: "#" },
    { label: "Labs", link: "#" },
    { label: "Binance Connect", link: "#" },
  ];
  const LearnLuinks = [
    { label: "Learn & Earn", link: "#" },
    { label: "Browse Crypto Prices", link: "#" },
    { label: "Bitcoin Price", link: "#" },
    { label: "Ethereum Price", link: "#" },
    { label: "Browse Crypto Price Predictions", link: "#" },
    { label: "Bitcoin Price Prediction", link: "#" },
    { label: "Ethereum Price Prediction", link: "#" },
    { label: "Ethereum Upgrade (Pectra)", link: "#" },
    { label: "Buy Bitcoin", link: "#" },
    { label: "Buy BNB", link: "#" },
    { label: "Buy XRP", link: "#" },
    { label: "Buy Dogecoin", link: "#" },
    { label: "Buy Ethereum", link: "#" },
    { label: "Buy Tradable Altcoins", link: "#" },
  ];
  const servicestLinks = [
    { label: "Affiliate", link: "#" },
    { label: "Referral", link: "#" },
    { label: "OTC Trading", link: "#" },
    { label: "Historical Market Data", link: "#" },
    { label: "Proof of Reserves", link: "#" },
  ];
  const supportLinks = [
    { label: "24/7 Chat Support", link: "#" },
    { label: "Support Center", link: "#" },
    { label: "Product Feedback & Suggestions", link: "#" },
    { label: "Fees", link: "#" },
    { label: "APIs", link: "#" },
    { label: "Binance Verify", link: "#" },
    { label: "Trading Rules", link: "#" },
    { label: "Binance Airdrop Portal", link: "#" },
    { label: "Law Enforcement Requests", link: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container  px-4 md:px-10">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Community Section */}
          <div className=" lg:block hidden">
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <div className="flex gap-4 flex-wrap items-start">
              {communityLinks.map((link, index) => (
                <div
                  key={index}
                  className="text-gray-500 hover:text-yellow-500 cursor-pointer"
                >
                  {link.icon}
                </div>
              ))}
            </div>
            <div className="mt-4 flex space-x-4">
              <span className="text-gray-500 cursor-pointer">English</span>
              <span className="text-gray-500 cursor-pointer">USD-$</span>
              <div className="flex items-center cursor-pointer">
                <GiWorld className="text-gray-500" size={20} />
                <span className="ml-2">Theme</span>
              </div>
            </div>
          </div>

          {/* About Us Section */}
          <div>
            <h3
              className="text-white font-semibold mb-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("about")}
            >
              <span>About Us</span>
              <span className="md:hidden">
                {openSections.about ? "-" : "+"}
              </span>
            </h3>
            {openSections.about && (
              <ul>
                {aboutLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.link} className="hover:text-yellow-500">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            <ul className="lg:block hidden">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="hover:text-yellow-500">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h3
              className="text-white font-semibold mb-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("products")}
            >
              <span>Products</span>
              <span className="md:hidden">
                {openSections.products ? "-" : "+"}
              </span>
            </h3>
            {openSections.products && (
              <ul>
                {productLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.link} className="hover:text-yellow-500">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            <ul className="lg:block hidden">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="hover:text-yellow-500 text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Section */}
          <div>
            <h3
              className="text-white font-semibold mb-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("business")}
            >
              <span>Business</span>
              <span className="md:hidden">
                {openSections.business ? "-" : "+"}
              </span>
            </h3>
            {openSections.business && (
              <ul>
                {businessLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.link} className="hover:text-yellow-500">
                      {link.label}
                    </a>
                  </li>
                ))}
                <h3
                  className="text-white font-semibold mb-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection("learn")}
                >
                  <span>Learn</span>
                  <span className="md:hidden">
                    {openSections.learn ? "-" : "+"}
                  </span>
                </h3>
              </ul>
            )}
            <ul className="lg:block hidden">
              {businessLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="hover:text-yellow-500 text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
              <h3 className="text-white font-semibold my-4 ">Learn</h3>
              {LearnLuinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="hover:text-yellow-500 text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:hidden">
            <h3
              className="text-white font-semibold mb-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("learn")}
            >
              <span>Learn</span>
              <span className="md:hidden">
                {openSections.learn ? "-" : "+"}
              </span>
            </h3>
            {openSections.learn && (
              <ul>
                {LearnLuinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.link} className="hover:text-yellow-500">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            <ul className="lg:block hidden">
              {businessLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="hover:text-yellow-500 text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
              <h3 className="text-white font-semibold my-4 ">Learn</h3>
              {LearnLuinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="hover:text-yellow-500 text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Support Section */}
          <div>
            <h3
              className="text-white font-semibold mb-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("service")}
            >
              <span>Service</span>
              <span className="md:hidden">
                {openSections.service ? "-" : "+"}
              </span>
            </h3>
            {openSections.service && (
              <ul>
                {servicestLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.link} className="hover:text-yellow-500">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            <ul className="lg:block hidden">
              {servicestLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="hover:text-yellow-500 text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
              <h3 className="text-white font-semibold mb-4">Support</h3>
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="hover:text-yellow-500 text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:hidden">
            <h3
              className="text-white font-semibold mb-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("support")}
            >
              <span>Support</span>
              <span className="md:hidden">
                {openSections.support ? "-" : "+"}
              </span>
            </h3>
            {openSections.support && (
              <ul>
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.link} className="hover:text-yellow-500">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="lg:hidden">
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <div className="flex gap-4 flex-wrap items-start">
              {communityLinks.map((link, index) => (
                <div
                  key={index}
                  className="text-gray-500 hover:text-yellow-500 cursor-pointer"
                >
                  {link.icon}
                </div>
              ))}
            </div>
            <div className="mt-4 flex space-x-4">
              <span className="text-gray-500 cursor-pointer">English</span>
              <span className="text-gray-500 cursor-pointer">USD-$</span>
              <div className="flex items-center cursor-pointer">
                <GiWorld className="text-gray-500" size={20} />
                <span className="ml-2">Theme</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2024 Aisstock Exchang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
