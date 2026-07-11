import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[8px] text-yellow-500">
            Forever 7
          </p>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            Thank You, Cristiano.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            From a young boy in Madeira to one of the greatest footballers in
            history, your journey inspired millions to dream bigger, work
            harder, and never give up.
          </p>

          <div className="mt-16 flex justify-center text-4xl text-yellow-500">
            ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐
          </div>

          <p className="mt-12 text-lg text-gray-300">
            Built with ❤️ for Cristiano Ronaldo and his fans around the world.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            © {year} Letters to CR7. Created by Albert Adekanye.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;