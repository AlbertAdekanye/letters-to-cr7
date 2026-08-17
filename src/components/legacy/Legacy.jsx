import { motion } from "framer-motion";
import StatCard from "./StatCard";
import stats from "../../data/legacyData";

const Legacy = () => {
  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      {/* Golden Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[140px]" />

      <div className="relative z-10 flex flex-col items-center px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 w-full max-w-4xl text-center md:mb-24"
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[10px] text-yellow-500">
            Legacy
          </p>

          <h2 className="text-5xl font-black leading-tight text-white md:text-7xl">
            More Than
            <br />
            Numbers
          </h2>

          <div className="mx-auto my-8 h-[2px] w-28 bg-yellow-500" />

          <p className="mx-auto max-w-3xl text-center text-lg leading-9 text-gray-400">
            Records can be broken. Trophies can be matched.
            But the mentality, discipline, resilience, and belief
            Cristiano Ronaldo gave to a generation will live far
            beyond the final whistle.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid w-full max-w-6xl gap-8 md:grid-cols-2 xl:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 w-full max-w-4xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[8px] text-yellow-500 py-5">
            What The Numbers Cannot Measure
          </p>

          <h3 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
            The Millions Who
            <br />
            Learned To Believe.
          </h3>

          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-9 text-gray-400">
            To work when nobody is watching. To rise after failure.
            To keep going when the world says stop. That may be the
            greatest record Cristiano Ronaldo ever created.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Legacy;