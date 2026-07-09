import { motion } from "framer-motion";

const Chapter = ({
  chapter,
  quote,
  title,
  subtitle,
  image,
  align,
}) => {
  const isLeft = align === "left";

  return (
    <section className="relative overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[120px] sm:h-80 sm:w-80 md:h-[420px] md:w-[420px] lg:h-[520px] lg:w-[520px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8 md:px-12 lg:px-20">
        <div
          className={`grid items-center gap-12 lg:min-h-screen lg:grid-cols-2 lg:gap-20 ${
            isLeft ? "" : ""
          }`}
        >
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className={`order-2 ${
              isLeft ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[6px] text-yellow-500 sm:tracking-[8px]">
              {chapter}
            </p>

            <p className="mb-6 max-w-xl text-lg italic leading-relaxed text-gray-300 sm:text-xl md:text-2xl">
              "{quote}"
            </p>

            <h2 className="mb-6 text-4xl font-black uppercase leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              {title}
            </h2>

            <div className="mb-8 h-[2px] w-24 bg-yellow-500" />

            <p className="max-w-xl text-base leading-8 text-gray-300 sm:text-lg md:text-xl">
              {subtitle}
            </p>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="mt-12 flex items-center gap-3"
            >
              <span className="text-xs uppercase tracking-[4px] text-gray-500">
                Continue Journey
              </span>

              <svg
                className="h-5 w-5 text-yellow-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: isLeft ? 80 : -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className={`order-1 ${
              isLeft ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl lg:rounded-3xl"
            >
              <img
                src={image}
                alt={title}
                className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-110 sm:h-[380px] md:h-[500px] lg:h-[650px] xl:h-[720px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute inset-0 rounded-2xl border border-white/10 lg:rounded-3xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Chapter;