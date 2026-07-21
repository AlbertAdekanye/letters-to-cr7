import stadium from "/src/assets/images/stadium.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const handleBeginJourney = () => {
    document.getElementById("journey")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      {/* Background */}
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

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[140px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-black uppercase tracking-[6px] text-white sm:text-6xl md:text-7xl lg:text-8xl lg:tracking-[12px]"
        >
          LETTERS TO <span className="text-yellow-500">CR7</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 1,
          }}
          className="mt-8 max-w-3xl text-lg leading-8 text-gray-300 md:text-2xl md:leading-10"
        >
          Every generation has heroes.
          <br />
          Ours wore number{" "}
          <span className="font-semibold text-yellow-500">
            7
          </span>
          .
        </motion.p>

        {/* Button */}
        <motion.button
          type="button"
          onClick={handleBeginJourney}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
          style={{
            padding: "18px 40px",
          }}
          className="mt-14 inline-flex items-center justify-center rounded-full border-2 border-yellow-500 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-yellow-500 hover:text-black"
        >
          Begin the Journey →
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.6,
        }}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center text-gray-400"
      >
        <span className="text-sm uppercase tracking-[4px]">
          Scroll
        </span>

        <span className="mt-2 text-2xl">↓</span>
      </motion.div>
    </section>
  );
};

export default Hero;