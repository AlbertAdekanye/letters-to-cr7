import { motion } from "framer-motion";

const CommunityCard = ({ member }) => {
  // Prevent crashes if member is temporarily undefined
  if (!member) return null;

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
      className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8 shadow-xl transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-2xl font-bold text-black">
          {(member.nickname || "A").charAt(0).toUpperCase()}
        </div>

        <div>
          <h3 className="text-xl font-bold text-white">
            {member.nickname || "Anonymous Fan"}
          </h3>

          <p className="text-gray-400">
            {member.country || "🌍 Somewhere on Earth"}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-white/10" />

      {/* Message */}
      <div>
        <p className="mb-3 text-xs uppercase tracking-[4px] text-yellow-500">
          Fan Message
        </p>

        <p className="leading-8 text-gray-300 italic">
          "{member.message}"
        </p>
      </div>

      {/* Footer */}
      <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
        <span className="rounded-full bg-yellow-500/10 px-4 py-2 text-sm text-yellow-500">
          ❤️ CR7 Supporter
        </span>

        <span className="text-sm text-gray-500">
          Community Member
        </span>
      </div>
    </motion.article>
  );
};

export default CommunityCard;