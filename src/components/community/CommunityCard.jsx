import { motion } from "framer-motion";

const CommunityCard = ({ member }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-white/10 bg-zinc-900 p-8 transition-all"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-white">
            {member.name}
          </h3>

          <p className="mt-1 text-gray-400">
            {member.country}
          </p>
        </div>

        <span className="text-3xl">
          🌍
        </span>
      </div>

      {/* Favorite Moment */}
      <div className="mt-8">
        <p className="text-xs uppercase tracking-[4px] text-yellow-500">
          Favorite Ronaldo Moment
        </p>

        <h4 className="mt-2 text-2xl font-bold text-white">
          {member.favoriteMoment}
        </h4>
      </div>

      {/* Message */}
      <p className="mt-6 leading-8 text-gray-300">
        "{member.message}"
      </p>
    </motion.article>
  );
};

export default CommunityCard;