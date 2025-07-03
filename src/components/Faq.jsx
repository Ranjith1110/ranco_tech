'use client';
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What services does Ranco Tech offer?",
    answer: `Ranco Tech provides end-to-end technology solutions including custom software
    development, mobile and web application development, cloud infrastructure design
    and deployment, AI/ML integration, and strategic IT consulting. We tailor every solution
    to align with your business goals and operational needs.`,
  },
  {
    question: "What industries do you work with?",
    answer: `We serve clients across a wide range of industries such as healthcare, logistics, ecommerce, education, retail, and finance. Our adaptable tech stack and agile
    approach make it easy to cater to the unique challenges of each sector.`,
  },
  {
    question: "How does your development process work?",
    answer: `Our process is built around agile principles and includes six core stages: discovery and
    planning, UI/UX design, development, testing and quality assurance, deployment, and
    ongoing support. This ensures a smooth, collaborative experience with regular
    feedback loops and fast delivery.`,
  },
  {
    question: "What technologies do you specialize in?",
    answer: `Ranco Tech specializes in modern, scalable technologies. For frontend, we use
    frameworks like React, Angular, and Vue.js. On the backend, we work with Node.js,
    Django, and Laravel. Our mobile development includes Flutter, React Native, and Swift.
    We're also experienced with cloud platforms such as AWS, Azure, and Google Cloud,
    and we integrate AI/ML capabilities using Python, TensorFlow, and natural language
    processing tools.`,
  },
  
];

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <section
      className="bg-gradient-to-br from-[#f4f9f9] to-[#e8f0f2] py-20 px-5 font-['Montserrat']"
      id="faq"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0D5F53] mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-[#4A6D6F] text-base md:text-lg max-w-2xl mx-auto">
          Find answers to some of the most common questions about our services and processes.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - FAQ List */}
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-[#0D5F53]">{faq.question}</h3>
                <span
                  className={`transform transition-transform duration-300 ${
                    selectedQuestion === index ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown size={20} className="text-[#FF6F00]" />
                </span>
              </div>
              {selectedQuestion === index && (
                <p className="mt-4 text-sm text-[#425E57]">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* Right - Image */}
        <div className="flex justify-center items-center">
          <img
            src="/faq.gif"
            alt="FAQ Illustration"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
