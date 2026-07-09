import { motion } from "framer-motion";

const StatCard = ({ number, suffix = "", title }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-white/10 bg-zinc-900 p-10 text-center"
    >
      <h2 className="mb-4 text-6xl font-black text-yellow-500">
        {number}
        {suffix}
      </h2>

      <div className="mx-auto mb-6 h-[2px] w-20 bg-yellow-500"></div>

      <p className="text-lg text-gray-300">
        {title}
      </p>
    </motion.div>
  );
};

export default StatCard;