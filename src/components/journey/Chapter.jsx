import { motion } from "framer-motion";

const Chapter = ({ chapter, quote, title, subtitle, image }) => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <motion.img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.08 }}
        transition={{ duration: 12, ease: "easeInOut" }}
        viewport={{ once: true }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black" />

      {/* Golden Glow */}
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[90px] sm:h-80 sm:w-80 md:h-[420px] md:w-[420px] lg:h-[520px] lg:w-[520px]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20 sm:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center"
        >
          {/* Chapter */}
          <p className="mb-4 text-xs font-medium tracking-[6px] text-yellow-500 sm:text-sm sm:tracking-[8px] md:tracking-[10px]">
            {chapter}
          </p>

          {/* Quote */}
          <p className="mx-auto mb-6 max-w-2xl text-base italic leading-relaxed text-gray-300 sm:text-lg md:text-xl lg:text-2xl">
            "{quote}"
          </p>

          {/* Title */}
          <h2 className="mb-6 text-4xl font-extrabold uppercase leading-none text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="mx-auto max-w-3xl text-base leading-8 text-gray-300 sm:text-lg md:text-xl lg:text-2xl">
            {subtitle}
          </p>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mt-16 flex flex-col items-center"
          >
            <span className="text-xs uppercase tracking-[4px] text-gray-400">
              Continue
            </span>

            <svg
              className="mt-3 h-7 w-7 text-yellow-500"
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
      </div>
    </section>
  );
};

export default Chapter;