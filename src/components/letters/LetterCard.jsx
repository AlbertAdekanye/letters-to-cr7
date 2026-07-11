import { motion } from "framer-motion";

const LetterCard = ({ letter }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        y: -8,
        transition: { duration: 0.2 },
      }}
      className="rounded-3xl border border-white/10 bg-zinc-900 p-8 transition-all duration-300"
    >
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">
            {letter.nickname}
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            {letter.country}
          </p>

          <p className="mt-2 text-xs uppercase tracking-[3px] text-gray-500">
            Just now
          </p>
        </div>

        <span className="text-2xl text-yellow-500">✉️</span>
      </div>

      {/* Letter */}
      <p className="leading-8 text-gray-300">
        "{letter.message}"
      </p>
    </motion.article>
  );
};

export default LetterCard;