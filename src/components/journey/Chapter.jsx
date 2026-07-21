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
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[140px]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div
          className={`grid w-full max-w-6xl items-center gap-20 lg:grid-cols-2 ${
            isLeft ? "" : ""
          }`}
        >
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${
              isLeft
                ? "lg:order-1 lg:text-left"
                : "lg:order-2 lg:text-left"
            } text-center`}
          >
            <p className="mb-4 uppercase tracking-[8px] text-yellow-500">
              {chapter}
            </p>

            <p className="mb-6 text-xl italic text-gray-300">
              "{quote}"
            </p>

            <h2 className="mb-6 text-5xl font-black uppercase md:text-6xl lg:text-7xl">
              {title}
            </h2>

            <div className="mb-8 h-[2px] w-24 bg-yellow-500 mx-auto lg:mx-0" />

            <p className="text-lg leading-9 text-gray-300">
              {subtitle}
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: isLeft ? 80 : -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`flex justify-center ${
              isLeft ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-3xl shadow-2xl"
            >
              <img
                src={image}
                alt={title}
                className="h-[600px] w-[520px] object-cover transition duration-700 hover:scale-105"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Chapter;