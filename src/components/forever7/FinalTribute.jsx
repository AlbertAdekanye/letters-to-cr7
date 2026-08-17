import { motion } from "framer-motion";

const FinalTribute = () => {
  return (
    <section className="relative flex justify-center overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-12">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-yellow-500/5 blur-3xl" />

      {/* Giant 7 */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="text-[18rem] font-black text-white/[0.03] md:text-[26rem]">
          7
        </span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[10px] text-yellow-500">
            The Final Chapter
          </p>

          <div className="mx-auto my-8 h-[2px] w-24 bg-yellow-500" />

          <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
            One Final Season.
            <br />
            One Last Journey.
            <br />
            One Eternal Legacy.
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-400">
            The journey is not over yet. But for the first time,
            the final whistle feels closer than ever.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-24 grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="space-y-8 text-center lg:text-left"
          >
            <p className="text-xl leading-10 text-gray-300">
              For more than two decades, Cristiano Ronaldo has given
              football moments that became memories for millions of us.
            </p>

            <p className="text-lg leading-9 text-gray-400">
              His story has never been only about goals, trophies,
              records, or celebrations. It has been about discipline,
              sacrifice, resilience, ambition, and refusing to stop
              believing.
            </p>

            <p className="text-lg leading-9 text-gray-400">
              From Madeira to the biggest stages in world football,
              generations have watched him rise, fall, return, fight,
              and continue chasing greatness.
            </p>

            <div className="mx-auto h-px w-28 bg-yellow-500 lg:mx-0" />

            <div className="pt-6">
              <h3 className="text-4xl font-black text-white">
                Before The Final Whistle...
              </h3>

              <p className="mt-6 text-lg leading-9 text-gray-400">
                This is our chance to say thank you while the journey
                is still being written.
                <br />
                To remember the moments.
                <br />
                To share the stories.
                <br />
                To celebrate the man who inspired millions.
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
            className="rounded-[32px] border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-zinc-900 p-8 text-center backdrop-blur-md md:p-10 lg:text-left"
          >
            <span className="block text-7xl leading-none text-yellow-500">
              “
            </span>

            <p className="mt-4 text-2xl italic leading-relaxed text-white md:text-3xl">
              Dreams are not what you see in your sleep.
            </p>

            <p className="mt-6 text-xl italic leading-relaxed text-gray-300 md:text-2xl">
              Dreams are the things which do not let you sleep.
            </p>

            <div className="mt-10 h-px w-full bg-yellow-500/20" />

            <p className="mt-8 text-lg font-semibold tracking-wide text-yellow-500">
              — Cristiano Ronaldo
            </p>
          </motion.div>
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-28 text-center"
        >
          <p className="text-xl font-semibold text-yellow-400 md:text-2xl py-6">
            From Every Country.
          </p>

          <h3 className="mt-4 text-4xl font-black text-white md:text-6xl">
            For One Legend.
          </h3>

          <div className="mt-8 flex w-full justify-center">
            <p className="w-full max-w-2xl text-center text-lg leading-9 text-gray-400 py-2">
              The final whistle will come one day.
              <br />
              The legacy never will.
            </p>
          </div>

          <p className="mt-10 text-sm uppercase tracking-[8px] text-gray-500">
            Forever Number Seven ❤️
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalTribute;