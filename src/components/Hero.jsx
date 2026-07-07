import stadium from "../assets/images/stadium.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={stadium}
        alt="Football stadium"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-6xl font-bold uppercase tracking-[12px] md:text-8xl"
          >
            LETTERS TO{" "}
            <span className="text-yellow-500">CR7</span>
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;