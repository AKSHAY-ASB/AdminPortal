// import React, { useState } from "react";

const CustomAccordion = (props) => {
  const [openIndex, setOpenIndex] = useState(null);

  const items = props.items.items;
  // console.log("items", items);
  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center p-4 focus:outline-none transition-all duration-500 ease-in-out"
          >
            <span className="text-lg font-semibold">{item.title}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 transition-transform ${
                openIndex === index ? "transform rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-4 py-2 transition-all duration-500 ease-in-out">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomAccordion;
