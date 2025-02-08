"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  formatPhoneNumberIntl,
  isValidPhoneNumber,
  isPossiblePhoneNumber,
} from "react-phone-number-input";

interface FormData {
  name: string;
  email: string;
  phone: string;
}
const API_URL = process.env.NEXT_PUBLIC_LEAD_URL ?? "https://default-api.com";
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_LEAD_SECRET_KEY;

export default function EnquiryPopup() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const hasSubmitted = localStorage.getItem("enquiry_submitted");
    if (!hasSubmitted) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000); // Show after 5 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null); // Reset error on input change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    const requestData = {
      fields: {
        Name: formData.name,
        Phone: formData.phone,
        Email: formData.email,
      },
      actions: [
        {
          type: "SYSTEM_NOTE",
          text: "Lead Source: Contact Page",
        },
      ],
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) throw new Error(`Error: ${response.statusText}`);

      // Success handling
      localStorage.setItem("enquiry_submitted", "true");
      setIsVisible(false);
    } catch (error) {
      console.error("Form submission failed:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    isVisible && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          className="relative bg-white rounded-2xl p-8 shadow-xl w-[95%] sm:w-[500px]"
        >
          <h2 className="text-3xl font-bold text-center text-indigo-600">
            Enquire Now
          </h2>
          <p className="text-gray-500 text-center mt-2">
            Fill out your details and we'll get back to you.
          </p>

          <form className="mt-5 space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-md text-lg transition ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Enquire Now"}
            </button>
          </form>

          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
          >
            ✖
          </button>
        </motion.div>
      </div>
    )
  );
}
