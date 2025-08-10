// src/components/FAQ.jsx
import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "How long does it take to learn a new language?",
    answer:
      "It depends on your dedication, consistency, and the complexity of the language. With daily practice, conversational fluency is achievable within 6–12 months.",
  },
  {
    question: "What’s the best way to start learning a language?",
    answer:
      "Begin with basic vocabulary and common phrases. Mix listening, speaking, reading, and writing for balanced skill development.",
  },
  {
    question: "How can I improve my pronunciation?",
    answer:
      "Listen to native speakers via podcasts, movies, or music. Imitate their tone, rhythm, and intonation while practicing aloud.",
  },
  {
    question: "Should I focus on grammar first or vocabulary?",
    answer:
      "Start with vocabulary to communicate basic ideas, then learn grammar gradually to improve accuracy and fluency.",
  },
  {
    question: "How do I stay motivated while learning?",
    answer:
      "Set short-term goals, track your progress, celebrate milestones, and engage with language-learning communities.",
  },
  {
    question: "Can I learn two languages at the same time?",
    answer:
      "Yes, but it’s challenging. If the languages are similar, master one first to avoid mixing them up.",
  },
  {
    question: "Is it necessary to talk to native speakers?",
    answer:
      "Speaking with natives boosts your confidence, teaches cultural context, and accelerates your learning process.",
  },
  {
    question: "What are the common mistakes beginners make?",
    answer:
      "Waiting too long to practice speaking, ignoring listening skills, and aiming for perfection instead of progress.",
  },
  {
    question: "How can technology help in language learning?",
    answer:
      "Apps, online platforms, and tools like LanguagePal provide interactive lessons, real-time feedback, and flexible learning schedules.",
  },
];

export default function FAQ() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-emerald-700 flex justify-center items-center gap-3">
          <FaQuestionCircle className="text-emerald-500 text-4xl" />
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-emerald-600 text-lg">
          Your guide to mastering languages, answers from experience and research.
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            tabIndex={0}
            className="collapse collapse-arrow border border-emerald-100 bg-white hover:shadow-md rounded-xl transition-all duration-300"
          >
            <div className="collapse-title text-lg font-semibold text-emerald-800">
              {faq.question}
            </div>
            <div className="collapse-content text-emerald-700">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
