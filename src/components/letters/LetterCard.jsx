import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import formatDate from "../../utils/formatDate";
import {
  hasLikedLetter,
  saveLikedLetter,
} from "../../utils/localStorage";

const LetterCard = ({ letter, onLike }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(hasLikedLetter(letter._id));
  }, [letter._id]);

  const handleLike = async () => {
    if (liked) return;

    try {
      await onLike(letter._id);

      saveLikedLetter(letter._id);
      setLiked(true);
    } catch (error) {
      console.error(error);
    }
  };

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
            {formatDate(letter.createdAt)}
          </p>
        </div>

        <div className="flex flex-col items-center">
          <motion.button
            whileHover={!liked ? { scale: 1.2 } : {}}
            whileTap={!liked ? { scale: 0.9 } : {}}
            animate={
              liked
                ? {
                    scale: [1, 1.35, 1],
                  }
                : {}
            }
            transition={{ duration: 0.3 }}
            onClick={handleLike}
            disabled={liked}
            className={`text-2xl transition-all duration-300 ${
              liked
                ? "cursor-default text-red-500"
                : "hover:text-red-500"
            }`}
            aria-label="Like letter"
          >
            {liked ? "❤️" : "🤍"}
          </motion.button>

          <span className="mt-2 text-sm font-semibold text-gray-400">
            {letter.likes ?? 0}
          </span>
        </div>
      </div>

      {/* Letter */}
      <p className="leading-8 text-gray-300">
        "{letter.message}"
      </p>
    </motion.article>
  );
};

export default LetterCard;