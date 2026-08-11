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
    <section className="relative overflow-hidden bg-black py-16 sm:py-20 lg:py-0">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[100px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] lg:blur-[140px]" />

      <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 lg:min-h-screen lg:px-8">
        <div className="grid w-full max-w-6xl items-center gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-20">
          {/* TEXT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className={`text-center ${
              isLeft
                ? "lg:order-1 lg:text-left"
                : "lg:order-2 lg:text-left"
            }`}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[4px] text-yellow-500 sm:mb-4 sm:text-sm sm:tracking-[6px] lg:tracking-[8px]">
              {chapter}
            </p>

            <p className="mx-auto mb-5 max-w-xl text-base italic leading-7 text-gray-300 sm:mb-6 sm:text-lg lg:mx-0 lg:text-xl">
              "{quote}"
            </p>

            <h2 className="mb-5 break-words text-3xl font-black uppercase leading-tight text-white sm:text-4xl md:text-5xl lg:mb-6 lg:text-6xl xl:text-7xl">
              {title}
            </h2>

            <div className="mx-auto mb-6 h-[2px] w-16 bg-yellow-500 sm:w-20 lg:mx-0 lg:mb-8 lg:w-24" />

            <p className="mx-auto max-w-xl text-sm leading-7 text-gray-300 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg lg:leading-9">
              {subtitle}
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`flex w-full justify-center ${
              isLeft ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="w-full max-w-[380px] overflow-hidden rounded-2xl shadow-2xl sm:max-w-[440px] lg:max-w-[520px] lg:rounded-3xl"
            >
              <img
                src={image}
                alt={title}
                className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105 sm:aspect-[5/6] lg:h-[600px] lg:aspect-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Chapter;