import { motion } from "framer-motion";

const LetterCounter = ({ count }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mx-auto mb-16 max-w-md rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8 text-center"
    >
      <p className="text-5xl">⭐</p>

      <h3 className="mt-4 text-5xl font-black text-yellow-500">
        {count}
      </h3>

      <p className="mt-3 uppercase tracking-[6px] text-gray-400">
        Letters Shared
      </p>
    </motion.div>
  );
};

export default LetterCounter;