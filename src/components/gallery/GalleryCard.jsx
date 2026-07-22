import { motion } from "framer-motion";

const GalleryCard = ({
  year,
  title,
  description,
  image,
  reverse,
}) => {
  return (
    <section className="relative">
      {/* Background Year */}
      <div className="mb-8 text-center">
        <h1 className="select-none text-[90px] font-black leading-none text-white/5 sm:text-[140px] md:text-[180px] lg:text-[220px]">
          {year}
        </h1>
      </div>

      <div
        className={`grid items-center gap-16 lg:grid-cols-2 ${
          reverse ? "" : ""
        }`}
      >
        {/* TEXT */}
        <motion.div
          initial={{
            opacity: 0,
            x: reverse ? 80 : -80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={`order-2 ${
            reverse ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <p className="mb-3 uppercase tracking-[6px] text-yellow-500">
            {year}
          </p>

          <h2 className="mb-6 text-4xl font-black text-white md:text-6xl">
            {title}
          </h2>

          <div className="mb-8 h-[2px] w-24 bg-yellow-500" />

          <p className="max-w-xl text-lg leading-9 text-gray-400">
            {description}
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            x: reverse ? -80 : 80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={`order-1 flex justify-center ${
            reverse ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
            className="group relative w-full max-w-[620px] overflow-hidden rounded-3xl"
          >
            <img
              src={image}
              alt={title}
              className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[450px] lg:h-[620px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute inset-0 rounded-3xl border border-white/10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryCard;