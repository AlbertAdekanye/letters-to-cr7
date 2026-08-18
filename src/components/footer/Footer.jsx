import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCommentDots,
  FaGithub,
  FaLinkedin,
  FaShareAlt,
} from "react-icons/fa";
import { HiGlobeAlt } from "react-icons/hi";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSef9OZVQz1G_AhZhDxxCouN6AnYs0tONbmtvox_z8wbKtYGtw/viewform";

const WEBSITE_URL =
  "https://letters-to-cr7-five.vercel.app/";

const Footer = () => {
  const year = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Letters to CR7",
      text: "One final season. Millions of memories. One legend forever. Leave your letter to Cristiano Ronaldo.",
      url: WEBSITE_URL,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      await navigator.clipboard.writeText(WEBSITE_URL);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Unable to share:", error);
      }
    }
  };

  return (
    <footer className="flex justify-center border-t border-white/10 bg-black">
      <div className="mx-auto w-full max-w-6xl px-5 py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Signature */}
          <div className="mt-8 space-y-3">
            <p className="text-sm uppercase tracking-[8px] text-gray-500">
              Forever Number Seven
            </p>

            <p className="text-yellow-500">
              Thank You, Cristiano.
            </p>
          </div>

          {/* Community Actions */}
          <div className="mt-14 ">
            <p className="text-sm uppercase tracking-[6px] text-gray-500">
              Keep The Tribute Going
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row py-">
              {/* Share */}
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex min-w-[190px] items-center justify-center gap-3 rounded-full bg-yellow-500 px-7 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-yellow-400"
              >
                <FaShareAlt className="text-lg" />

                {copied
                  ? "Link Copied!"
                  : "Share Tribute"}
              </button>

              {/* Feedback */}
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[190px] items-center justify-center gap-3 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-7 py-4 font-semibold text-yellow-500 transition duration-300 hover:scale-105 hover:bg-yellow-500 hover:text-black"
              >
                <FaCommentDots className="text-xl" />
                Send Feedback
              </a>
            </div>

            <div className="mt-6 flex w-full justify-center">
              <p className="w-full max-w-xl text-center text-sm leading-6 text-gray-600 py-2">
                Share Letters to CR7 with another fan and help more
                people leave their message before the final whistle.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-8">
            <a
              href="https://github.com/AlbertAdekanye"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Albert Adekanye on GitHub"
              className="flex items-center gap-2 text-gray-400 transition duration-300 hover:text-yellow-500"
            >
              <FaGithub className="text-xl" />
              GitHub
            </a>

            <a
              href="https://codewithkanye-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Albert Adekanye's portfolio"
              className="flex items-center gap-2 text-gray-400 transition duration-300 hover:text-yellow-500"
            >
              <HiGlobeAlt className="text-xl" />
              Portfolio
            </a>

            <a
              href="https://www.linkedin.com/in/albert-adekanye-a82118243"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Albert Adekanye on LinkedIn"
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