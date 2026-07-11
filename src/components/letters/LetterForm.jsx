import { useState } from "react";
import { motion } from "framer-motion";

const MAX_CHARACTERS = 500;

const LetterForm = ({ onAddLetter }) => {
  const [formData, setFormData] = useState({
    nickname: "",
    country: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.message.trim()) return;

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    const newLetter = {
      id: crypto.randomUUID(),
      nickname: formData.nickname.trim() || "Anonymous Fan",
      country: formData.country.trim() || "🌍 Somewhere on Earth",
      message: formData.message.trim(),
      createdAt: new Date(),
    };

    onAddLetter(newLetter);

    setFormData({
      nickname: "",
      country: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-zinc-900 p-6 shadow-2xl md:p-12"
    >
      <h3 className="mb-8 text-3xl font-bold text-white">
        Dear Cristiano,
      </h3>

      {/* Message */}

      <textarea
        name="message"
        rows={8}
        value={formData.message}
        onChange={handleChange}
        maxLength={MAX_CHARACTERS}
        placeholder="Thank you for inspiring millions around the world..."
        className="w-full resize-none rounded-2xl border border-white/10 bg-black p-6 text-lg leading-8 text-white placeholder:text-gray-500 focus:border-yellow-500 focus:outline-none"
      />

      <div className="mt-2 flex justify-end">
        <span
          className={`text-sm ${
            formData.message.length >= MAX_CHARACTERS
              ? "text-red-500"
              : "text-gray-500"
          }`}
        >
          {formData.message.length}/{MAX_CHARACTERS}
        </span>
      </div>

      {/* Inputs */}

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          placeholder="Your name (optional)"
          className="rounded-xl border border-white/10 bg-black px-5 py-4 text-white placeholder:text-gray-500 focus:border-yellow-500 focus:outline-none"
        />

        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country (optional)"
          className="rounded-xl border border-white/10 bg-black px-5 py-4 text-white placeholder:text-gray-500 focus:border-yellow-500 focus:outline-none"
        />

      </div>

      {/* Button */}

      <button
        type="submit"
        disabled={!formData.message.trim() || isSubmitting}
        className="mt-10 w-full rounded-full bg-yellow-500 py-4 text-lg font-bold text-black transition duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send My Letter"}
      </button>
    </motion.form>
  );
};

export default LetterForm;