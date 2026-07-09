import { motion } from "framer-motion";

const LetterForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-zinc-900 p-8 md:p-14"
    >
      <p className="mb-10 text-3xl text-white">
        Dear Cristiano,
      </p>

      <textarea
        rows="8"
        placeholder="Thank you for inspiring millions around the world..."
        className="w-full resize-none border-none bg-transparent text-lg leading-9 text-white placeholder:text-gray-500 focus:outline-none"
      />

      <div className="mt-12 flex justify-end">
        <button
          className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
        >
          Send My Letter
        </button>
      </div>
    </motion.div>
  );
};

export default LetterForm;