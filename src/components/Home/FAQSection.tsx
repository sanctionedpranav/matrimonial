"use client";
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";


const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I create a profile?",
      answer:
        'Creating A Profile Is Simple! Click On "Sign Up," Fill In Your Details, And Upload A Picture. You’ll Be Ready To Start Your Search For The Perfect Match.',
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, we prioritize user privacy and implement strict security measures to protect your data.",
    },
    {
      question: "Can I filter matches based on my preferences?",
      answer: "Absolutely! Our platform allows you to set preferences and find matches that align with your values.",
    },
    {
      question: "What happens if I need help or face issues?",
      answer: "Our support team is available 24/7 to assist you with any issues or concerns.",
    },
    {
      question: "Is there a subscription fee to use premium features?",
      answer: "Yes, we offer premium plans with exclusive features. Check our pricing page for details.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-2">Got Questions? We’ve Got Answers!</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-[1.1rem]">
          We’re here to make your experience as smooth and hassle-free as possible. Explore our FAQs to find quick answers to common questions about profiles, matches, privacy, and more.
        </p>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 gap-2 mt-8">
          {faqs.map((faq, index) => (
            <div
              data-aos="fade-up" data-aos-delay="100"
              key={index}
              className={`bg-white shadow-md rounded-lg border ${openIndex === index ? "border-red-500" : "border-gray-200"}`}
            >
              <div onClick={() => toggleFAQ(index)} className="flex justify-between items-center cursor-pointer py-2 px-4">
                <h3 className="text-md font-semibold">{faq.question}</h3>
                <button
                  className={`w-8 h-8 flex items-center justify-center rounded-sm text-white transition ${openIndex === index ? "bg-[#c90413] hover:bg-red-700" : "bg-[#ffe7e7] text-[#000] hover:bg-red-200"
                    }`}
                  onClick={() => toggleFAQ(index)}
                >
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
              {openIndex === index && (
                <p className="text-gray-600 transition-all text-start pt-0 pb-5 px-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection