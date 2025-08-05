import React from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Server,
  Figma,
  ShieldCheck,
  Search,
  LifeBuoy,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const headerLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Projects', to: '/projects' },
    { label: 'Our Team', to: '/team' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Testimonial', to: '/testimonial' },
    { label: 'Contact', to: '/contact' },
  ];

  const services = [
    {
      name: "Website Development",
      icon: <Globe size={16} />,
      items: [
        { label: "Custom Business Websites", to: "/ServicesPage#custom-business" },
        { label: "E-commerce Websites", to: "/ServicesPage#ecommerce" },
        { label: "Portfolio Websites", to: "/ServicesPage#portfolio" },
        { label: "Landing Pages", to: "/ServicesPage#landing-pages" },
        { label: "Redesign & UI Upgrades", to: "/ServicesPage#redesign" },
      ],
    },
    {
      name: "Hosting & Domain Services",
      icon: <ShieldCheck size={16} />,
      items: [
        { label: "Domain Management", to: "/ServicesPage#domain" },
        { label: "Web Hosting", to: "/ServicesPage#hosting" },
        { label: "SSL Setup", to: "/ServicesPage#ssl" },
        { label: "Email Hosting", to: "/ServicesPage#email" },
        { label: "Website Migration", to: "/ServicesPage#migration" },
      ],
    },
    {
      name: "Mobile App Development",
      icon: <Smartphone size={16} />,
      items: [
        { label: "Cross-Platform Apps", to: "/ServicesPage#cross-platform" },
        { label: "Custom App Solutions", to: "/ServicesPage#custom-apps" },
        { label: "UI/UX Design", to: "/ServicesPage#mobile-uiux" },
        { label: "Performance Optimization", to: "/ServicesPage#mobile-performance" },
      ],
    },
    {
      name: "Digital Marketing & SEO",
      icon: <Search size={16} />,
      items: [
        { label: "SEO", to: "/ServicesPage#seo" },
        { label: "Performance Optimization", to: "/ServicesPage#performance" },
        { label: "Speed & Core Web Vitals", to: "/ServicesPage#speed" },
      ],
    },
    {
      name: "IT & Software Solutions",
      icon: <Server size={16} />,
      items: [
        { label: "Enterprise Development", to: "/ServicesPage#enterprise" },
        { label: "Custom Software", to: "/ServicesPage#custom-software" },
        { label: "Admin Dashboards", to: "/ServicesPage#dashboards" },
        { label: "CRM & ERP Systems", to: "/ServicesPage#crm-erp" },
      ],
    },
    {
      name: "Consulting & IT Support",
      icon: <LifeBuoy size={16} />,
      items: [
        { label: "IT Consulting", to: "/ServicesPage#consulting" },
        { label: "Maintenance", to: "/ServicesPage#maintenance" },
        { label: "Troubleshooting", to: "/ServicesPage#troubleshooting" },
      ],
    },
    {
      name: "UI/UX Design",
      icon: <Figma size={16} />,
      items: [
        { label: "Prototyping", to: "/ServicesPage#prototyping" },
        { label: "Web & App UI/UX", to: "/ServicesPage#uiux" },
        { label: "Branding & Logo", to: "/ServicesPage#branding" },
      ],
    },
  ];

  const companyLinks = [
    { label: 'About', to: '/about' },
    { label: 'Terms of Service', to: '/terms' },
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Fiverr', to: 'https://www.fiverr.com/sellers/ranjithkumar31/' },
    { label: 'Upwork', to: '' },
  ];

  const serviceBoxes = [[], [], [], []];
  services.forEach((item, index) => {
    serviceBoxes[index % 4].push(item);
  });

  return (
    <footer className="bg-[#0D5F53] text-[#FBFBFD] font-[Montserrat] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
        {/* Column 0: Brand Description */}
        <div>
          <div className="flex items-center mb-3 space-x-0 text-white text-lg font-bold tracking-wider">
            <span className="text-[#FF6F00]">RanCo</span>
            <span>Tech</span>
          </div>
          <p className="text-sm text-gray-300">
            Empowering businesses with digital solutions that drive growth, innovation,
            and impact. Your tech partner for the future.
          </p>
        </div>

        {/* Column 1: Menu */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {headerLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="hover:text-[#FF6F00]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="hover:text-[#FF6F00]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Newsletter */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <h6 className="text-sm mb-3">Stay Ahead of the Curve</h6>
          <p className="text-sm text-gray-300 mb-3">
            Subscribe to the Ranco Tech newsletter for the latest updates in technology,
            innovation, and digital transformation.
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#1B8579] placeholder-gray-300 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6F00]"
            />
            <button
              type="submit"
              className="bg-[#FF6F00] hover:bg-orange-600 text-white px-5 py-2 rounded-md font-semibold transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Services Section Title */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {serviceBoxes.map((group, idx) => (
          <div key={idx} className="space-y-6">
            {group.map((service, index) => (
              <div key={index}>
                <h4 className="flex items-center text-sm font-semibold mb-2 space-x-2">
                  <span>{service.icon}</span>
                  <span>{service.name}</span>
                </h4>
                <ul className="text-sm text-gray-300 space-y-1 ml-4">
                  {service.items.map((item, i) => (
                    <li key={i}>
                      <Link to={item.to} className="hover:text-[#FF6F00]">• {item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-[#1B8579] pt-6 px-6 max-w-7xl mx-auto text-sm text-gray-400">
        <div className="flex flex-col md:flex-row md:justify-between items-center text-center md:text-left gap-3">
          {/* Left Side */}
          <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-2">
            <div className="flex space-x-0 text-white text-base md:text-lg font-bold tracking-wider">
              <span className="text-[#FF6F00]">RanCo</span>
              <span className="text-white">Tech</span>
            </div>
            <span className="text-sm font-normal text-gray-400 md:inline block">
              All rights reserved. &copy; {new Date().getFullYear()}
            </span>
          </div>

          {/* Right Side*/}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/YourPage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-[#1B8579] hover:text-white transition-all"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://twitter.com/YourProfile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-[#1B8579] hover:text-white transition-all"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/YourCompany"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-[#1B8579] hover:text-white transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/ranco.tech?igsh=b3BreTIwdnhwdTU5"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-[#1B8579] hover:text-white transition-all"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
