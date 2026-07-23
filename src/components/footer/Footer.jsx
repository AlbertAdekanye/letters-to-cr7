import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiGlobeAlt } from "react-icons/hi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex justify-center border-t border-white/10 bg-black">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Logo */}
          <div className="flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/10 text-3xl font-black text-yellow-500 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
              7
            </div>
          </div>

          {/* Title */}
          <h2 className="mt-8 text-4xl font-black text-white md:text-5xl">
            Letters to CR7
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            One Legend. Millions Inspired.
          </p>

          {/* Divider */}
          {/* <div className="mx-auto my-12 h-px w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" /> */}

          {/* Signature */}
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[8px] text-gray-500">
              Forever Number Seven
            </p>

            <h3 className="text-5xl font-black text-white md:text-6xl">
              SIUUUU ❤️
            </h3>

            <p className="text-yellow-500">
              Thank You, Cristiano.
            </p>
          </div>

          {/* Links */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-8">
            <a
              href="https://github.com/AlbertAdekanye"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 transition duration-300 hover:text-yellow-500"
            >
              <FaGithub className="text-xl" />
              GitHub
            </a>

            <a
              href="https://codewithkanye-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 transition duration-300 hover:text-yellow-500"
            >
              <HiGlobeAlt className="text-xl" />
              Portfolio
            </a>

            <a
              href="https://www.linkedin.com/in/albert-adekanye-a82118243"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 transition duration-300 hover:text-yellow-500"
            >
              <FaLinkedin className="text-xl" />
              LinkedIn
            </a>
          </div>

          {/* Bottom */}
          <div className="mt-16 border-t border-white/10 pt-8">
            <p className="text-sm text-gray-500">
              Built with ❤️ by{" "}
              <span className="font-semibold text-white">
                Albert Adekanye
              </span>
            </p>

            <p className="mt-3 text-sm text-gray-600">
              © {year} Letters to CR7 • Unofficial Fan Tribute
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;