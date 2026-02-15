"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);
  
    try {
      // 1️⃣ Main email (CRITICAL)
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      
      
  
      
  
      setSuccess(true);
      formRef.current?.reset();
    } catch (err) {
      console.error("Contact email failed:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <section
      id="contact"
      className="w-full flex justify-center items-center py-32 px-6"
    >
      <div className="max-w-3xl w-full bg-[#030014]/80 backdrop-blur-xl rounded-2xl p-10 border border-purple-500/20 shadow-[0_0_40px_rgba(112,66,248,0.15)]">

      <h2 className="text-4xl font-bold text-center mb-10 text-white">

          Contact <span className="text-green-500">Me</span>
        </h2>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input"
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="input"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            className="input resize-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-600 text-center">

              ✅ Message sent successfully!
            </p>
          )}

          {error && (
           <p className="text-green-600 text-center">

              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
