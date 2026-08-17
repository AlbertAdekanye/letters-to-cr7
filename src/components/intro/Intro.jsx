import { motion, useReducedMotion } from "framer-motion";
import introBg from "../../assets/images/intro-bg.png"

const Intro = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      {/* Animated Background Image */}
      <motion.img
        src={introBg}
        alt=""
        aria-hidden="true"
        initial={
          prefersReducedMotion
            ? false
            : { scale: 1.05, x: 0 }
        }
        animate={
          prefersReducedMotion
            ? undefined
            : {
                scale: [1.05, 1.13, 1.05],
                x: [0, -8, 0],
              }
        }
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-20 bg-black/65" />

      {/* Cinematic Gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black via-black/30 to-black" />

      {/* Vignette */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-black/70 via-transparent to-black/70" />

      {/* Golden Glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[140px]"
      />

      {/* Content */}
      <motion.div
        initial={
          prefersReducedMotion
            ? false
            : { opacity: 0, y: 40 }
        }
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true, amount: 0.5 }}
        className="relative z-10 max-w-4xl text-center"
      >
        <p className="text-4xl font-light leading-relaxed text-white drop-shadow-2xl md:text-6xl lg:text-7xl">
          Every fan
          <br />
          has a story.
        </p>

        <motion.div
          initial={
            prefersReducedMotion ? false : { scaleX: 0 }
          }
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 h-px w-24 origin-center bg-yellow-500"
        />

        <motion.p
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl"
        >
          Before the final whistle,
          <br className="hidden sm:block" />
          this is our chance to tell ours.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Intro;