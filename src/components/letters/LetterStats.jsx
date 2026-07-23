import { motion } from "framer-motion";

const LetterStats = ({
  totalLetters,
  totalLikes,
  totalCountries,
  showing,
}) => {
  const stats = [
    {
      icon: "💌",
      label: "Letters",
      value: totalLetters,
    },
    {
      icon: "❤️",
      label: "Hearts",
      value: totalLikes,
    },
    {
      icon: "🌍",
      label: "Countries",
      value: totalCountries,
    },
    {
      icon: "🔎",
      label: "Showing",
      value: showing,
    },
  ];

  return (
    <div className="pb-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.1,
            duration: 0.5,
          }}
          whileHover={{
            y: -6,
            scale: 1.03,
          }}
          className="rounded-3xl border border-white/10 bg-zinc-900 p-8 text-center shadow-lg"
        >
          <div className="mb-3 text-4xl">
            {stat.icon}
          </div>

          <h3 className="text-4xl font-black text-white">
            {stat.value}
          </h3>

          <p className="mt-2 uppercase tracking-[3px] text-sm text-gray-400">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default LetterStats;