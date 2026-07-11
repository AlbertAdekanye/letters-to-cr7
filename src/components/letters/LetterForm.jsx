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
  const [showSuccess, setShowSuccess] = useState(false);

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

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);

    setFormData({
      nickname: "",
      country: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  const remainingCharacters =
    MAX_CHARACTERS - formData.message.length;

  return (
    <>
    {showSuccess && (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="fixed top-6 right-6 z-50 rounded-2xl border border-yellow-500/20 bg-zinc-900 px-6 py-4 shadow-2xl"
  >
    <div className="flex items-center gap-3">
      <span className="text-2xl">⭐</span>

      <div>
        <h4 className="font-bold text-white">
          Letter Sent!
        </h4>

        <p className="text-sm text-gray-400">
          Your message is now part of the tribute.
        </p>
      </div>
    </div>
  </motion.div>
)}

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

      {/* Character Counter */}

      <div className="mt-3 flex items-center justify-between text-sm">
        <p className="text-gray-500">
          Maximum {MAX_CHARACTERS} characters
        </p>

        <span
          className={`font-medium transition-colors ${
            remainingCharacters <= 0
              ? "text-red-500"
              : remainingCharacters <= 50
              ? "text-yellow-500"
              : "text-gray-500"
          }`}
        >
          {remainingCharacters} characters remaining
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

        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="rounded-xl border border-white/10 bg-black px-5 py-4 text-white focus:border-yellow-500 focus:outline-none"
        >
          <option value="">🌍 Select Your Country (Optional)</option>

          <option value="🇳🇬 Nigeria">🇳🇬 Nigeria</option>
          <option value="🇵🇹 Portugal">🇵🇹 Portugal</option>
          <option value="🇧🇷 Brazil">🇧🇷 Brazil</option>
          <option value="🇦🇷 Argentina">🇦🇷 Argentina</option>
          <option value="🇪🇸 Spain">🇪🇸 Spain</option>
          <option value="🇫🇷 France">🇫🇷 France</option>
          <option value="🇮🇹 Italy">🇮🇹 Italy</option>
          <option value="🇩🇪 Germany">🇩🇪 Germany</option>
          <option value="🇬🇧 United Kingdom">🇬🇧 United Kingdom</option>
          <option value="🇺🇸 United States">🇺🇸 United States</option>
          <option value="🇯🇵 Japan">🇯🇵 Japan</option>
          <option value="🇰🇷 South Korea">🇰🇷 South Korea</option>
          <option value="🇮🇳 India">🇮🇳 India</option>
          <option value="🇨🇦 Canada">🇨🇦 Canada</option>
          <option value="🇦🇺 Australia">🇦🇺 Australia</option>
        </select>
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
    </>
  );
};

export default LetterForm;