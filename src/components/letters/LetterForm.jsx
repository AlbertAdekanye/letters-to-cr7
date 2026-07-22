import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Select from "react-select";
import countryList from "react-select-country-list";

const MAX_CHARACTERS = 500;

const LetterForm = ({ onAddLetter }) => {
  const countries = useMemo(() => countryList().getData(), []);

  const [formData, setFormData] = useState({
    nickname: "",
    country: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

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
    setSubmitError("");

    try {
      await onAddLetter({
        nickname: formData.nickname.trim() || "Anonymous Fan",
        country:
          formData.country.trim() || "🌍 Somewhere on Earth",
        message: formData.message.trim(),
      });

      setShowSuccess(true);

      setTimeout(() => setShowSuccess(false), 3000);

      setFormData({
        nickname: "",
        country: "",
        message: "",
      });

      setTimeout(() => {
        document
          .getElementById("letter-wall")
          ?.scrollIntoView({
            behavior: "smooth",
          });
      }, 300);
    } catch {
      setSubmitError(
        "Unable to send your letter. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const remainingCharacters =
    MAX_CHARACTERS - formData.message.length;

  return (
    <>
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed right-6 top-6 z-50 rounded-2xl border border-yellow-500/20 bg-zinc-900 px-6 py-4 shadow-2xl"
        >
          <h4 className="font-bold text-white">
            ⭐ Letter Sent!
          </h4>

          <p className="mt-1 text-sm text-gray-400">
            Your message is now part of Ronaldo's legacy.
          </p>
        </motion.div>
      )}

      <div className="w-full py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[32px] border border-white/10 bg-zinc-900/70 p-8 shadow-2xl backdrop-blur-md md:p-14"
          >
            <div className="text-center">
              <p className="text-sm uppercase tracking-[8px] text-yellow-500">
                Write A Letter
              </p>

              <h3 className="mt-4 text-4xl font-black text-white md:text-5xl">
                Dear Cristiano Ronaldo,
              </h3>

              <div className="mx-auto my-6 h-[2px] w-24 bg-yellow-500" />

              <p className="mx-auto max-w-2xl text-gray-400">
                Tell Cristiano how he inspired you, your family,
                or your football journey.
              </p>
            </div>

            <textarea
              name="message"
              rows={10}
              value={formData.message}
              onChange={handleChange}
              maxLength={MAX_CHARACTERS}
              placeholder="Thank you Cristiano..."
              className="mt-10 w-full resize-none rounded-3xl border border-white/10 bg-black/60 p-8 text-lg leading-9 text-white placeholder:text-gray-500 focus:border-yellow-500 focus:outline-none"
            />

            <div className="mt-4 flex justify-between text-sm text-gray-500">
              <span>Maximum {MAX_CHARACTERS} characters</span>

              <span
                className={
                  remainingCharacters < 50
                    ? "text-yellow-500"
                    : ""
                }
              >
                {remainingCharacters} remaining
              </span>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <input
                type="text"
                name="nickname"
                value={formData.nickname}
                onChange={handleChange}
                placeholder="Your Name (optional)"
                className="rounded-2xl border border-white/10 bg-black/60 px-6 py-5 text-white placeholder:text-gray-500 focus:border-yellow-500 focus:outline-none"
              />

              <Select
                options={countries}
                placeholder="🌍 Search your country..."
                isSearchable
                value={
                  countries.find(
                    (country) =>
                      country.label === formData.country
                  ) || null
                }
                onChange={(selected) =>
                  setFormData((prev) => ({
                    ...prev,
                    country: selected?.label || "",
                  }))
                }
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: "rgba(0,0,0,.6)",
                    borderColor: "rgba(255,255,255,.1)",
                    borderRadius: "16px",
                    minHeight: "60px",
                    boxShadow: "none",
                  }),
                  menu: (base) => ({
                    ...base,
                    backgroundColor: "#18181b",
                    border: "1px solid rgba(255,255,255,.1)",
                  }),
                  option: (base, state) => ({
                    ...base,
                    backgroundColor: state.isFocused
                      ? "#eab308"
                      : "#18181b",
                    color: state.isFocused
                      ? "#000"
                      : "#fff",
                    cursor: "pointer",
                  }),
                  singleValue: (base) => ({
                    ...base,
                    color: "#fff",
                  }),
                  placeholder: (base) => ({
                    ...base,
                    color: "#9ca3af",
                  }),
                  input: (base) => ({
                    ...base,
                    color: "#fff",
                  }),
                }}
              />
            </div>

            <div className="pt-9 flex flex-col gap-10">
              <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 px-6 py-5 text-center">
                <p className="text-sm uppercase tracking-[5px] text-yellow-500">
                  One Legend • One World
                </p>

                <p className="mt-2 text-gray-300">
                  From every continent, every country, and every
                  generation—thank you for celebrating Cristiano
                  Ronaldo's incredible legacy.
                </p>
              </div>

              <button
                type="submit"
                disabled={
                  !formData.message.trim() || isSubmitting
                }
                className="w-full rounded-full bg-yellow-500 py-5 text-lg font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting
                  ? "Sending Letter..."
                  : "Send Letter ❤️"}
              </button>
            </div>

            {submitError && (
              <div className="mt-8 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-center text-red-400">
                {submitError}
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </>
  );
};

export default LetterForm;