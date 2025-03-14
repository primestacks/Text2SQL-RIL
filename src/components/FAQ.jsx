import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
// Array of FQAs

const faqsData = [
  {
    question: "Do I need any technical skills to use this tool?",
    answer:
      "No, our tool is designed for anyone to use without any programming knowledge. Make your text2SQL simple.",
  },
  {
    question: "What databases does it support?",
    answer:
      "It integrates with popular databases like MySQL, Postgre SQL, SQLite, and more.",
  },
  {
    question: "How does Natural Language Work?",
    answer:
      "NLQ uses machine learning algorithms to parse natural language queries and generate corresponding SQL queries.",
  },
  {
    question: "Can i use Text2SQL for complex queries?",
    answer:
      "Yes, Text2SQL can handle complex queries, but may require breaking them down into simpler queries.",
  },
  {
    question: "How do i integrate Text2SQL with my application?",
    answer:
      "Use our api documentation and code sample to integrate Text2SQL seamlessly",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-10 px-6 bg-[#FBFBFB] w-full">
      {/* Header */}
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-[500] font-onest text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-3 font-onest font-[400] text-[16px]">
          Find solution to frequently asked question about our Natural Language
          Query API
        </p>
      </div>

      <div className="mt-10 max-w-[41.625rem] mx-auto space-y-4">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className="border  p-2 rounded-[10px] my-8 font-onest font-[400]"
          >
            <button
              className="w-full flex justify-between items-center text-lg font-medium text-left text-[#202020] "
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === index && (
              <div
                className={`mt-3 text-gray-600 transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
