import { motion } from "framer-motion";
import formatDate from "../../utils/formatDate";

const FeaturedLetters = ({ letters }) => {
  const featuredLetters = [...letters]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  if (featuredLetters.length === 0) return null;

  return (
    <section className="pt-10">
      <div className="mb-14 text-center">
        <p className="text-sm uppercase tracking-[8px] text-yellow-500">
          Community
        </p>

        <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
          Voices From Around The World
        </h2>

        <div className="mx-auto my-6 h-[2px] w-24 bg-yellow-500" />

        <p className="mx-auto max-w-3xl text-center leading-8 text-gray-400">
          Every message is a reminder that Cristiano Ronaldo's
          legacy has inspired millions of people across different
          countries, cultures, and generations.
        </p>
      </div>

      <div className="grid gap-8 pt-6 lg:grid-cols-3">
        {featuredLetters.map((letter, index) => (
          <motion.div
            key={letter._id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-zinc-900 to-black p-8 shadow-xl"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="text-3xl">💛</span>

              <span className="text-xs uppercase tracking-[3px] text-yellow-500">
                Fan Letter
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white">
              {letter.nickname}
            </h3>

            <p className="mt-2 text-gray-400">
              {letter.country}
            </p>

            <p className="mt-2 text-xs uppercase tracking-[3px] text-gray-500">
              {formatDate(letter.createdAt)}
            </p>

            <div className="my-6 h-px bg-white/10" />

            <p className="italic leading-8 text-gray-300">
              "{letter.message}"
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedLetters;