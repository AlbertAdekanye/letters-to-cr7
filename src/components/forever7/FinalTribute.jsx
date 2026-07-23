import { motion } from "framer-motion";

const FinalTribute = () => {
  return (
    <section className="flex justify-center overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-2">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-yellow-500/5 blur-3xl" />

      {/* Giant 7 */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="text-[18rem] font-black text-white/[0.03] md:text-[26rem]">
          7
        </span>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[10px] text-yellow-500">
            Final Tribute
          </p>

          <div className="mx-auto my-8 h-[2px] w-24 bg-yellow-500" />

          <h2 className="text-5xl font-black leading-tight text-white md:text-7xl">
            One Dream.
            <br />
            One Legend.
            <br />
            One Legacy.
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="mt-24 grid items-center gap-20 lg:grid-cols-2">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="space-y-8 text-left"
          >
            <p className="text-xl leading-10 text-gray-300">
              Cristiano Ronaldo's story is more than goals, trophies,
              or records.
            </p>

            <p className="text-lg leading-9 text-gray-400">
              It is the story of discipline, sacrifice, resilience,
              and the belief that impossible dreams can become
              reality through relentless hard work.
            </p>

            <p className="text-lg leading-9 text-gray-400 mb-2">
              Millions of fans from every continent have celebrated
              every victory, stood by every defeat, and found
              inspiration in a journey that continues to motivate
              generations.
            </p>

            <div className="h-px w-28 bg-yellow-500" />

            <div className="pt-6">
              <h3 className="text-4xl font-black text-white">
                Thank You.
              </h3>

              <p className="mt-6 text-lg leading-9 text-gray-400">
                Thank you for visiting.
                <br />
                Thank you for sharing your memories.
                <br />
                Thank you for celebrating the greatest football
                journey ever witnessed.
              </p>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            whileHover={{ y: -8 }}
            className="rounded-[32px] border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-zinc-900 p-10 backdrop-blur-md"
          >
            <span className="block text-7xl leading-none text-yellow-500">
              “
            </span>

            <p className="mt-4 text-3xl italic leading-relaxed text-white">
              Dreams are not what you see in your sleep.
            </p>

            <p className="mt-6 text-2xl italic leading-relaxed text-gray-300">
              Dreams are the things which do not let you sleep.
            </p>

            <div className="mt-10 h-px w-full bg-yellow-500/20" />

            <p className="mt-8 text-xl font-semibold tracking-wide text-yellow-500">
              — Cristiano Ronaldo
            </p>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-28 text-center"
        >
          <p className="text-2xl font-semibold text-yellow-400">
            From Every Country.
          </p>

          <h3 className="mt-3 text-5xl font-black text-white md:text-6xl">
            For One Legend.
          </h3>

          <p className="mt-10 text-sm uppercase tracking-[10px] text-gray-500">
            SIUUUU ❤️
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalTribute;