import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const Questions = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: "What types of bindery services do you offer?",
      answer:
        "We offer a wide range of bindery services to meet various needs, including fine binding, thesis printing and binding, legal binding, library binding, textbook rebinding, and book plates. We also provide coil binding and wire binding for additional options.",
    },
    {
      id: 2,
      question: "What are your office hours?",
      answer:
        "Our office is open Monday to Sunday, from 7:00 AM to 7:00 PM, ensuring we’re available to assist you throughout the day.",
    },
    { id: 3, question: "Question number 3", answer: "Answer for question 3" },
    { id: 4, question: "Question number 4", answer: "Answer for question 4" },
  ];

  return (
    <div className="w-screen h-auto bg-white flex justify-center items-center">
      <div className="w-[89%] m-auto max-w-[1400px] bg-gray-200 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl mb-6 font-semibold text-secodary">
          Frequently Asked Questions
        </h2>
        {questions.map((q) => (
          <div key={q.id} className="mb-4 last:mb-0">
            <button
              className="w-full text-left text-xl focus:outline-none p-4 bg-gray-100 rounded-lg shadow-md flex justify-between"
              onClick={() =>
                setActiveQuestion(activeQuestion === q.id ? null : q.id)
              }
            >
              {q.question}
              {activeQuestion === q.id ? <FaMinusCircle /> : <FaPlusCircle />}
            </button>
            <AnimatePresence>
              {activeQuestion === q.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 text-gray-600 ml-4"
                >
                  <p>{q.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
