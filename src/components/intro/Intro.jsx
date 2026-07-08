import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-black px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-4xl text-center"
      >
        <p className="text-4xl font-light leading-relaxed text-white md:text-6xl">
          Every fan
          <br />
          has a story.
        </p>
      </motion.div>
    </section>
  );
};

export default Intro;