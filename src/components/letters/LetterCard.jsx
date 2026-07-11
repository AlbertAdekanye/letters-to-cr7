import { motion } from "framer-motion";

const LetterCard = ({ letter }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        transition: { duration: 0.2 },
      }}
      className="rounded-3xl border border-white/10 bg-zinc-900 p-8"
    >
      <div className="mb-6 flex items-center justify-between">

        <div>
          <h3 className="font-bold text-white">
            {letter.nickname}
          </h3>

          <p className="text-sm text-gray-400">
            {letter.country}
          </p>
        </div>

        <span className="text-yellow-500 text-xl">
          ✉️
        </span>

      </div>

      <p className="leading-8 text-gray-300">
        "{letter.message}"
      </p>
    </motion.article>
  );
};

export default LetterCard;