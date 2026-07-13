import stadium from "/src/assets/images/stadium.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <motion.img
        src={stadium}
        alt="Football stadium"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />

      {/* Golden Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[400px]
          w-[400px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-yellow-500/10
          blur-[120px]
        "
      />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl font-bold uppercase tracking-[12px] md:text-8xl"
        >
          LETTERS TO{" "}
          <span className="text-yellow-500">CR7</span>
        </motion.h1>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
          className="mt-8 max-w-2xl text-lg leading-9 text-gray-300 md:text-2xl"
        >
          Every generation has heroes.
          <br />
          Ours wore number <span className="text-yellow-500">7.</span>
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.4,
            duration: 1,
          }}
          className="mt-14 rounded-lg border border-yellow-500 px-10 py-4 text-white transition-all duration-500 hover:bg-yellow-500 hover:text-black"
        >
          Begin the Journey →
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="absolute bottom-10 flex flex-col items-center text-sm text-gray-400"
        >
          <span>Scroll</span>
          <span className="mt-2 text-xl">↓</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;