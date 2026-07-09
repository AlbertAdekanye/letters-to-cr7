import { motion } from "framer-motion";

const LetterCard = ({ country, message }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      className="rounded-3xl border border-white/10 bg-zinc-900 p-8"
    >
      <p className="mb-6 text-yellow-500">
        {country}
      </p>

      <p className="leading-8 text-gray-300">
        "{message}"
      </p>
    </motion.div>
  );
};

export default LetterCard;