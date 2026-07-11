import { motion } from "framer-motion";

const CommunityHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mx-auto mb-20 max-w-4xl text-center"
    >
      <p className="uppercase tracking-[8px] text-yellow-500">
        Community
      </p>

      <h2 className="mt-4 text-4xl font-black text-white md:text-6xl">
        One Legend. Millions Inspired.
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
        Cristiano Ronaldo's journey has connected fans from every corner of the
        world. Different countries, different languages, but one shared
        admiration for greatness.
      </p>
    </motion.div>
  );
};

export default CommunityHeader;