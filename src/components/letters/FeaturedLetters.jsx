import { motion } from "framer-motion";
import formatDate from "../../utils/formatDate";

const FeaturedLetters = ({ letters }) => {
  const featuredLetters = [...letters]
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, 3);

  if (featuredLetters.length === 0) return null;

  return (
    <section className="mb-20">
      <div className="mb-10 text-center">
        <p className="uppercase tracking-[8px] text-yellow-500">
          Featured
        </p>

        <h2 className="mt-4 text-4xl font-black text-white">
          Most Loved Letters
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-gray-400">
          These heartfelt messages have received the most love from
          the community.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {featuredLetters.map((letter, index) => (
          <motion.div
            key={letter._id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
            }}
            whileHover={{
              y: -10,
            }}
            className="rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-zinc-900 p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="text-4xl">🏆</span>

              <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-sm font-bold text-yellow-400">
                ❤️ {letter.likes || 0}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white">
              {letter.nickname}
            </h3>

            <p className="mt-1 text-gray-400">
              {letter.country}
            </p>

            <p className="mt-2 text-xs uppercase tracking-[3px] text-gray-500">
              {formatDate(letter.createdAt)}
            </p>

            <p className="mt-8 leading-8 text-gray-300">
              "{letter.message}"
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedLetters;